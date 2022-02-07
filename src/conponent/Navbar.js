import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-2`}>
      <div className="container">
        <a className="navbar-brand" href='#' style={{fontSize:'32px',fontWeight:'700'}}>{props.tital}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active active">
              <a className="nav-link" href='#'>Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href='#'>Link</a>
            </li>
            {/* <li className="nav-item active dropdown">
              <a className="nav-link dropdown-toggle" href='#' id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href='#'>Action</a>
                <a className="dropdown-item" href='#'>Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href='#'>Something else here</a>
              </div>
            </li> */}
            <li className="nav-item active">
              <a className="nav-link" href='#' >{props.aboutest}</a>
            </li>
          </ul>
          <div className={`custom-control custom-switch ml-1 text-${props.mode==='light'?'dark':'light'}`}>
            <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.togglemode} />
              <label className="custom-control-label" htmlFor="customSwitch1">{props.mode==='light'?'Enable Dark Mode':'Enable light Mode'}</label>
          </div>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
    )
}

Navbar.propTypes = {
    tital: PropTypes.string,
    aboutest: PropTypes.string
}

Navbar.defaultProps = {
    tital: 'set tital here',
    aboutest: 'set about here'
}

