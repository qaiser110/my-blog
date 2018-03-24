import React from 'react'
import Link from 'gatsby-link'

const noLink = pg => (
  <button key={11 + pg}>
    {pg}
  </button>
)

const pgLink = (pg, href) => (
  <Link to={href} key={11 + pg}>
    <button key={11 + pg}>{pg}</button>
  </Link>
)

function getPagingArray(currPage, maxPage, size = 4) {
  let current = currPage,
    last = maxPage,
    delta = size,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [],
    l

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i)
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push('...')
      }
    }
    rangeWithDots.push(i)
    l = i
  }

  return rangeWithDots
}

export default props => {
  const { hrefBase, currPage, maxPage } = props
  const pagingArray = getPagingArray(currPage, maxPage)

  let pageLinks = pagingArray.map(pg => {
    return pg === Number(currPage) ? (
      noLink(pg)
    ) : pg === '...' ? (
      <button disabled key="dots">
        ...
      </button>
    ) : (
      pgLink(pg, pg === 1 ? '' : hrefBase + pg)
    )
  })

  return <div>{pageLinks}</div>
}
