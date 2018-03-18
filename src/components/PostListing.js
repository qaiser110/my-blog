import React from 'react'
import Link from 'gatsby-link'
import { categories } from '../../data'
import PostTags from './PostTags'
import { rhythm, scale } from '../utils/typography'

const CatLink = ({ category }) => (
  <span className="cat-link">
    {' in '}
    <Link to={`/categories/${category}`}>{categories[category]}</Link>
  </span>
)

export default ({ post, showCat }) => (
  <div className="post-item">
    <Link to={post.frontmatter.path}>
      <h2
        style={{
          ...scale(1 / 3),
          marginTop: rhythm(1.5),
          lineHeight: 1.22,
        }}
      >
        {post.frontmatter.title}
      </h2>
    </Link>
    <p
      style={{
        ...scale(-1 / 4),
        lineHeight: 1,
        fontWeight: 100,
      }}
    >
      <i>
        posted {post.frontmatter.date}{' '}
        {showCat && <CatLink category={post.frontmatter.category} />}
      </i>
    </p>
    <div>
      {post.excerpt}
      <br />
      <br />
      <PostTags tags={post.frontmatter.tags} />
      <br />
      <Link to={post.frontmatter.path}>Keep Reading →</Link>
    </div>
  </div>
)
