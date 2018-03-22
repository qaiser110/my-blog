// const _ = require("lodash")
// const webpackLodashPlugin = require("lodash-webpack-plugin")
const path = require('path')
const { tagInfo } = require('./data/index.js')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const categoryPage = path.resolve('src/templates/posts-by-category.js')
  const tagPage = path.resolve('src/templates/posts-by-tag.js')
  const blogPage = path.resolve('src/templates/blog.js')

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              templateKey
              path
              series
              chapters
              date
              title
              cover
              category
              tags
              image
              heading
              description
              intro {
                blurbs {
                  image
                  text
                }
                heading
                description
              }
              main {
                heading
                description
                image1 {
                  alt
                  image
                }
                image2 {
                  alt
                  image
                }
                image3 {
                  alt
                  image
                }
              }
              testimonials {
                author
                quote
              }
              full_image
              pricing {
                heading
                description
                plans {
                  description
                  items
                  plan
                  price
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const categorySet = new Set()
    const tagSet = new Set()
    
    const postsPerPage = 2
    const pagesMap = {1: []}
    currPage = 1

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.category) {
        categorySet.add(node.frontmatter.category)
      }

      if (node.frontmatter.templateKey === 'blog-post') {
        if (pagesMap[currPage].length < postsPerPage)
          pagesMap[currPage].push(node)
        else {
          currPage += 1
          pagesMap[currPage] = [node]
        }
      }

      if (node.frontmatter.tags)
        node.frontmatter.tags.forEach(tag => {
          if (!tagInfo[tag]) {
            const err = `Tag "${tag}" used in "${
              node.frontmatter.path
            }" doesn't exist in "data/index.js"
Allowed values are: ${Object.keys(tagInfo).join(', ')}
`
            throw new Error(err)
          }
          tagSet.add(tag)
        })

      const pagePath = node.frontmatter.path
      const cover = node.frontmatter.cover
        ? `/${node.frontmatter.cover.split('/img/')[1].split('.')[0]}/`
        : '/chemex/'

      createPage({
        path: pagePath,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        context: {
          cover,
          // path: pagePath,
          series: node.frontmatter.series || '',
        },
      })

      if (node.frontmatter.series !== null) {
      } else {
      }
    })

    Object.keys(pagesMap).forEach(pgNum => {
      createPage({
        path: pgNum === 1 ? '/' : `/page-${pgNum}/`,
        component: blogPage,
        context: {
          pgNum,
          posts: pagesMap[pgNum],
        },
      })
    })
    const tagList = Array.from(tagSet)
    tagList.forEach(tag => {
      createPage({
        path: `/tags/${tag}/`,
        component: tagPage,
        context: {
          tag,
        },
      })
    })

    const categoryList = Array.from(categorySet)
    categoryList.forEach(category => {
      createPage({
        path: `/categories/${category}/`,
        component: categoryPage,
        context: {
          category,
        },
      })
    })

    return Promise.resolve()
  })
}
