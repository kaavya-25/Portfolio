import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faProjectDiagram, faEnvelope, faCode} from '@fortawesome/free-solid-svg-icons';


class Nav extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <Link className={"navbar-brand"} to={"./Home"}>
                    <FontAwesomeIcon icon={faCode} className="brand-icon" />

                </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link  className={"nav-link"} to={"./Home"}>                                    
                                <FontAwesomeIcon icon={faHome} className="me-1" />
                                    <span className="nav-name">Home</span>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link  className={"nav-link"} to={"./About"}>
                                   <FontAwesomeIcon icon={faUser} className="me-1" />
                                    <span className="nav-name">About</span>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link  className={"nav-link"} to={"./Project"}>
                                    <FontAwesomeIcon icon={faProjectDiagram} className="me-1" />
                                    <span className="nav-name">Project</span>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link  className={"nav-link"} to={"./Contact"}>
                                    <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                                    <span className="nav-name">Contact</span>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        );
    }
}

export default Nav;