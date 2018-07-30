import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ msg }) => (
  <div className="tile is-parent" id="footer">
        <article className="tile is-child notification" style={{background: '#ff6600'}}>
          <p className="title" style={{color: 'white'}}>{msg}</p>
      </article>
  </div>
)

Footer.propTypes = {
  msg: PropTypes.string.isRequired,
}

export default Footer;
