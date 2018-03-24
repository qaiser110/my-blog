import React from 'react'
import Link from 'gatsby-link'
import './Pagination.sass'

// https://codepen.io/netzzwerg/pen/hfutI

export default ({ hrefBase, currPage, pNumArr }) => (
  <div className="paging-ctor middle">
    <div className="pagination">
      <ul>
        <li>
          {currPage > 1 && <Link to={currPage === 2 ? '/' : `/page-${currPage - 1}`} />}
        </li>
        <li className={currPage === 1 ? 'active' : ''}>
          <Link to='/' />
        </li>
        {pNumArr.shift() &&
          pNumArr.map(p =>
            <li key={p} className={Number(p) === currPage ? 'active' : 'none'}>
              <Link to={`/page-${p}`} />
            </li>)}
        <li>
          <Link to={`/page-${currPage + 1}`} />
        </li>
      </ul>
    </div>
  </div>
)
