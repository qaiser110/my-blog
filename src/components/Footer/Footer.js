import React, { Component } from 'react'
import Link from 'gatsby-link'
import UserLinks from './UserLinks'
import UserInfo from '../UserInfo'
import './Footer.sass'

class Footer extends Component {
  render() {
    const { config } = this.props

    return (
      <footer className="footer">
        <section className="container">
          <div className="item" style={{flex: 2}}>
            <h4>About me</h4>
            <p>
              I'm a Full-Stack Developer and Automation Engineer. I help teams build quality software by applying good development, automation, and testing tools and practices.
            </p>
          </div>
          <div className="item" style={{flex: 2}}>
            <h4>Favorites</h4>
            <p>I love working on Node, React, ReactNative, improving Code Quality, and all kinds of Automation and tools for testing of applications. I also love functional languages like Elm, Elixir & Clojure.</p>
          </div>
          <div className="item" style={{flex: 1}}>
            <div className="contact">
              <h4>Contact Me</h4>
              <UserLinks config={config} labeled />
            </div>
          </div>
        </section>

        <h6 className="container notice-container">
            <span className="item" style={{paddingTop: '8px'}}><UserInfo /></span>
            <span className="item" style={{paddingLeft: '8em', color: '#959595'}}>
              {config.copyright || null}
            </span>
            <span className="item">
              <Link style={{ float: 'right' }} to={config.siteRss}>
                Subscribe
              </Link>
            </span>
        </h6>
      </footer>
    )
  }
}

export default Footer
