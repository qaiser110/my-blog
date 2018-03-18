import React from 'react'
import Helmet from 'react-helmet'
import PostListing from '../components/PostListing'
import config from '../../data/SiteConfig'
import { categories } from '../../data'

export default class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.category
    return (
      <section className="section">
        <Helmet
          title={`Posts in category "${categories[category]}" | ${
            config.siteTitle
          }`}
        />
        <div className="container">
          <div className="content">
            <h1>
              Category: <i>{categories[category]}</i>
            </h1>
            {this.props.data.allMarkdownRemark.edges.map(({ node }, key) => (
              <PostListing key={key} post={node} />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query PostsByCategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            cover
            category
            tags
            path
            date
          }
        }
      }
    }
  }
`
