import React from 'react'
import { Link } from 'react-router-dom';

import Logo from './Nav/y18.gif'


const NavBar = (props) => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu = is-fixed-top">
        <div className="navbar-start">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src={Logo} />
            </a>
            <p className="title" style={{lineHeight: '1.495'}}>Hacker News</p>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/">
                Actions&nbsp;<span className="icon has-text-info">
                          <i className="fas fa-info-circle"></i>
                        </span>
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="/new-comment">
                  New
                </a>
                <a className="navbar-item" href="/my-comments">
                  Comments
                </a>
                <a className="navbar-item" href="/show">
                  Show
                </a>
                <a className="navbar-item" href="/ask">
                  Ask
                </a>
                <a className="navbar-item" href="/jobs">
                  Jobs
                </a>
                <hr className="navbar-divider" />
              <a className="navbar-item" href="/submit">
                  Submit
                </a>
              </div>
            </div>
          </div>
      </div>
    </nav>
  )


export default NavBar;
