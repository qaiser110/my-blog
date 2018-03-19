import React from 'react'
import Link from 'gatsby-link'
import { catInfo } from '../../data'
import PostTags from './PostTags'
import { rhythm, scale } from '../utils/typography'

const CatLink = ({ category }) => (
  <span className="cat-link">
    <span className='dim'>{' in '}</span>
    <Link to={`/categories/${category}`} className='dim-link'>{catInfo[category]}</Link>
  </span>
)

export default ({ post, showCat }) => (
  <div className="post-item">
    <Link to={post.frontmatter.path}>
      <h2
        style={{
          ...scale(1 / 3),
          marginTop: rhythm(1.8),
          lineHeight: 1.22,
          color: '#ff4400'
        }}
      >
        {post.frontmatter.title}
      </h2>
    </Link>
    <p
      style={{
        ...scale(-1 / 4),
        lineHeight: 1,
      }}
    >
      <i>
        <span className='dim'>posted {post.frontmatter.date}{' '}</span>
        {showCat && <CatLink category={post.frontmatter.category} />}
      </i>
    </p>
    <div>
      {post.excerpt}
      <div
        style={{
          ...scale(-1 / 5),
          display: 'block',
          marginTop: rhythm(.4),
          lineHeight: 3,
        }}
      >
        <em><PostTags tags={post.frontmatter.tags} /></em>
        <h6><em><Link to={post.frontmatter.path} className='dim-link'>Read more...</Link></em></h6>
      </div>
    </div>
  </div>
)
