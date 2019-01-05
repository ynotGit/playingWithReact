import React, { Component } from 'react';

import Logo from '../../images/logo.png';
import Nav from './nav';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-6" id="logo">
                            <img src={Logo} alt='Logo' />
                        </div>
                        <div className="title col-md-6">
                            <h5>&#123;<s>wh</s>y•not•innovate&#125;</h5>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <Nav />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
