import React from 'react'
import Script from 'react-load-script'
import graphql from 'graphql'
import PostListing from '../components/PostListing'

export default class IndexPage extends React.Component {
  render() {

    const { pgNum, posts } = this.props.pathContext

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latest Posts</h1>
          </div>
          {posts
            .map((node, key) => (
              <PostListing key={key} pgNum={pgNum} post={node} showCat />
            ))}
        </div>
      </section>
    )
  }
}

/*
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            cover
            category
            tags
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
            series
            chapters
          }
        }
      }
    }
  }
`
*/
