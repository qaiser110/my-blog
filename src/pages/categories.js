import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
// import kebabCase from "lodash/kebabCase"
import { siteTitle } from '../../data/SiteConfig'
import { catInfo } from '../../data'

class CatsPageRoute extends React.Component {
  render() {
    const allCats = this.props.data.allMarkdownRemark.group
    return (
      <div>
        <Helmet title={siteTitle + ' | categories'} />
        <div>
          <h1 className="title">Categories</h1>
          <ul>
            {allCats.map(
              cat =>
                cat.fieldValue !== 'undefined' && (
                  <li key={cat.fieldValue}>
                    <Link
                      style={{
                        textDecoration: 'none',
                      }}
                      to={`/categories/${cat.fieldValue}/`}
                    >
                      {catInfo[cat.fieldValue]} ({cat.totalCount})
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default CatsPageRoute

export const pageQuery = graphql`
  query CatsQuery {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
