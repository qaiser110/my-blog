import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Script from 'react-load-script'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import config from '../../data/SiteConfig'
import favicon from './favicon.png'
import './all.sass'
const { rhythm, scale } = require('../utils/typography')

class TemplateWrapper extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
    window.netlifyIdentity.init()
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <Helmet title="Home | ${config.siteTitle}" />
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="shortcut icon" href={favicon} />
          <link rel="stylesheet" href="/style.css" />
        </Helmet>
        <Navbar />
        <div
          style={{
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            maxWidth: rhythm(24),
            margin: `0 auto`,
            paddingTop: `80px`,
          }}
        >
          <div>{children()}</div>
        </div>
        <Footer config={config} />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
