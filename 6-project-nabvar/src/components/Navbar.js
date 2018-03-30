import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from "../logo.svg";
import '../styles/Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid sin-padding">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a className="navbar-brand" ><img src={logo} className="App-logo" alt="logo" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/bio" className="nav-link" >Bio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/description" className="nav-link" >Description</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact-us" className="nav-link" >Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
