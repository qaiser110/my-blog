import React from 'react'
import Helmet from 'react-helmet'
import Link from "gatsby-link"
import PostListing from '../components/PostListing'
import config from '../../data/SiteConfig'
import { catInfo } from '../../data'

export default class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.category
    return (
      <section className="section">
        <Helmet
          title={`Posts in category "${catInfo[category]}" | ${
            config.siteTitle
          }`}
        />
        <div className="container">
          <div className="content">
            <h1>
              Category: <i>{catInfo[category]}</i>
            </h1>
            {this.props.data.allMarkdownRemark.edges.map(({ node }, key) => (
              <PostListing key={key} post={node} />
            ))}
          </div>
          <div><Link to="/categories">View all categories</Link></div>
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
      filter: { frontmatter: { category: { eq: $category }, draft: { ne: true } } }
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
