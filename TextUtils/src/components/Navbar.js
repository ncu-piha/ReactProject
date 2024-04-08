import React from 'react'
import PropTypes from 'prop-types'
import { a } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="#">{props.title}</a>
            <buthrefn className="navbar-hrefggler" type="buthrefn" data-hrefggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
                <span className="navbar-hrefggler-icon"></span>
            </buthrefn>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auhref">
                    <li className="nav-item active">
                        <a className="nav-a" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href="/about">{props.aboutText}</a>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <buthrefn className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</buthrefn>
                </form> */}
                <div className={`cushrefm-control cushrefm-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input type="checkbox" className="cushrefm-control-input" onClick={props.hrefggleMode} id="cushrefmSwitch1"/>
  <label className="cushrefm-control-label" htmlFor="cushrefmSwitch1">Enable dark Mode</label>
</div>
            </div>
        </nav>
    )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
aboutText:PropTypes.string
}
Navbar.defaultProps={
    title:"set title here",
    aboutText:"About"
}