import React from 'react'
import Link from 'gatsby-link'

// const ToC = ({})

export default ({ prevPost, nextPost }) =>
  <div className="pager">
    <i>
      {prevPost && (
        <Link to={prevPost.path}>
          <span className="arrow">{'<<  '}</span> Previous: {prevPost.title}</Link>
      )}
    </i>
    {prevPost && nextPost && <span className="divider">{'   |   '}</span>}
    <i>
      {nextPost && (
        <Link to={nextPost.path}>
          Next: {nextPost.title} <span className="arrow">{' >>'}</span>
        </Link>
      )}
    </i>
  </div>
