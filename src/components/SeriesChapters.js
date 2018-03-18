import React from 'react'
import Link from 'gatsby-link'

export default ({ series, chapters, currPath }) => (
  <aside id="series">
    <ul className="menu-list">
      <li>
        <Link
          to={`${series.path}`}
          className={currPath === series.path ? 'is-active' : ''}
        >
          {series.title}
        </Link>
        <ol className="chapters">
          {series.chapters.map((chap, key) => (
            <Link
              key={key}
              style={{ textDecoration: 'none' }}
              to={`${chapters[chap].path}`}
            >
              <li
                className={currPath === chapters[chap].path ? 'is-active' : ''}
              >
                {chapters[chap].title}
              </li>
            </Link>
          ))}
        </ol>
      </li>
    </ul>
  </aside>
)
