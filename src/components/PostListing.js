import React from 'react'
import Link from 'gatsby-link'
import { categories } from '../../data'
import PostTags from './PostTags'

const CatLink = ({ category }) => (
  <small className="cat-link">
    {' in '}
    <Link to={`/categories/${category}`}>{categories[category]}</Link>
  </small>
)

export default ({ post, showCat }) => (
  <div className="content">
    <p>
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
      <span> &bull; </span>
      <small>{post.frontmatter.date}</small>
      {showCat && <CatLink category={post.frontmatter.category} />}
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
