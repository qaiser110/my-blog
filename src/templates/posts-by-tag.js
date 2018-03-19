import React from 'react'
import Helmet from 'react-helmet'
import PostListing from '../components/PostListing'
import config from '../../data/SiteConfig'
import { tagInfo } from '../../data'

export default class CategoryTemplate extends React.Component {
  render() {
    const tag = this.props.pathContext.tag
    return (
      <section className="section">
        <Helmet
          title={`Posts tagged "${tagInfo[tag].title}" | ${config.siteTitle}`}
        />
        <div className="container">
          <div className="content">
            <h1>
              Posts tagged "<i>{tagInfo[tag].title}</i>"
            </h1>
          </div>
          {this.props.data.allMarkdownRemark.edges.map(({ node }, key) => (
            <PostListing key={key} post={node} />
          ))}
        </div>
      </section>
    )
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query PostsByTagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
