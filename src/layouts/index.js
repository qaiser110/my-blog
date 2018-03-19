import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import config from '../../data/SiteConfig'
import favicon from './favicon.png'
import './all.sass'
const {rhythm, scale} = require("../utils/typography")

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <div
      style={{
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        maxWidth: rhythm(24),
        margin: `0 auto`,
      }}
    >
      <Navbar />
      <div>{children()}</div>
      <Footer config={config} />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
