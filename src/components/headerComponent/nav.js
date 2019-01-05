import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            active: false
        };
    }

    render() {
        return (
            <Router>
                <div className="navContainer">
                    <div onClick={() => this.setState({ open: !this.state.open, active: !this.state.active })}>
                        <div className={this.state.active ? "active" : "inactive"} id="button-container">
                            <span className="top"></span>
                            <span className="middle"></span>
                            <span className="bottom"></span>
                        </div>
                        <div className={this.state.open ? "open" : "closed"} id="overlay">
                            <div className="container-fluid ">
                                <div className="row">
                                    <div className="col-md-6 side-image"></div>
                                    <div className="col-md-6 col-sm-12 nav-media">
                                        <nav>
                                            <ul>
                                                <li><NavLink to="/#home"><i className="fa fa-home"> Home</i></NavLink></li>
                                                <li><NavLink smooth to="/#about"><i className="fa fa-address-card"> About</i></NavLink></li>
                                                <li><NavLink smooth to="/#news"><i className="fa fa-eye">  Updates</i></NavLink></li>
                                                <li><NavLink to="/#work"><i className="fa fa-code">  Creations</i></NavLink></li>
                                                <li><NavLink smooth to="/#testimonials"><i className="fa fa-comment"> Testimonials</i></NavLink></li>
                                                <li><NavLink smooth to="/#contact"><i className="fa fa-envelope"> Contact</i></NavLink></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Nav;
