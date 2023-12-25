import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link  className="nav-link " aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">
                                {props.features}
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <Link  className="nav-link active" to="/about">
                                {props.AboutText} About
                            </Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="/">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className="form-check form-switch" style={props.myStyle}>
                <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.txt}</label>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    features: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "Set title here",
    features: "Display Features"
};