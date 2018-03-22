import React from 'react'
import Link from 'gatsby-link'

// const ToC = ({})

export default ({ series, chapters, currPath }) =>
  currPath === series.path ? null : (
    <aside id="series">
      This blog post is part of a series on{' '}
      <Link
        to={`${series.path}`}
        className={currPath === series.path ? 'is-active' : ''}
      >
        {series.title}
      </Link>. Here's the complete list from this series, in case you've missed
      the previous posts:
      <br/>
      <br/>
      <ol className="chapters">
        {series.chapters.map(
          (chap, key) =>
            currPath === chapters[chap].path ? (
              <li key={key}>
                <span className="curr-post">{chapters[chap].title}</span>
              </li>
            ) : (
              <Link
                key={key}
                style={{ textDecoration: 'none' }}
                to={`${chapters[chap].path}`}
              >
                <li>{chapters[chap].title}</li>
              </Link>
            )
        )}
      </ol>
    </aside>
  )
