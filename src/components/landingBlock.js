import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import Background from '../images/landing-background.mp4';

class LandingBlock extends Component {
    render() {
        return (
            <section className="landing-block">
                <video src={Background} autoPlay loop muted></video>
                <Animated animationIn="fadeIn" animationInDelay={750} isVisible={true}>
                    <div className="landing-text">
                        <h1>Innovating User Friendly Digital Experiences</h1>
                        <h6>-Crafted With Pride-</h6>
                    </div>
                </Animated>
                <Animated className="i" animationIn="fadeIn" animationInDelay={1500} isVisible={true}>
                    <i className="fa fa-chevron-down"></i>
                </Animated>
            </section >
        );
    }
}

export default LandingBlock;