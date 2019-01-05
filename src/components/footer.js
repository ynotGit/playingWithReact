import React, { Component } from 'react';
import ReactLogo from '../images/react-logo.png';
import ExpressLogo from '../images/express-logo.png';
import NodeLogo from '../images/node-logo.png';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="powered-by">
                    <h6>Powered by:</h6>
                    <img src={NodeLogo} alt="" />
                    <img src={ReactLogo} alt="" />
                    <img src={ExpressLogo} alt="" />
                </div>
                <p>Created By Ynot Innovate Ltd {(new Date().getFullYear())}</p>
                <p>A company registered in England & Wales, number 11323974 at Westloch Road, Cramlington, Northumberland, NE236LW</p>
                <a href="#">Terms, Condtions & Privacy</a>
                <br /><br />
                <p>-Crafted With Pride est 2017-</p>
            </footer>
        );
    }
}

export default Footer;