import React, { Component } from 'react';
import Particles from 'react-particles-js';
import AboutImg from '../images/about-img.png';

const particleOutput = {
    particles: {
        number: { value: 160, density: { enable: true, value_area: 1200 } },
        color: { value: ["#2E299C", "#c51722", "#1A6A33"] },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
        },
        opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
        },
        size: {
            value: 4,
            random: true,
            anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#000000",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: { enable: false, rotateX: 600, rotateY: 600 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "repulse" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 200, size: 1, opacity: 0, duration: 2 }
        }
    },
    retina_detect: true

};

class AboutUs extends Component {
    render() {
        return (
            <section id="about" className="about-block">
                <div className="container about-us-info-container">
                    <div className="particle-container">
                        <Particles
                            params={particleOutput}
                        />
                    </div>
                    <h3>About Us</h3><span className="icon-container"><i className="fa fa-address-card"></i></span>
                    <div className="header-divider"></div>
                    <div className="row">
                        <div className="about-style col-lg-6">
                            <p>Thanks for stopping by and welcome to Ynot Innovate.
                                Based in the beautiful city of Newcastle upon-Tyne we build Websites
                                for personal use, start ups and businesses. We put the user at the heart
                                of everything we do, providing an easy to use digital
                                experience. Combining our background in Web Development,
                                Psychology, Sales and Marketing, we listen to your needs
                                and create tailor made solutions. Need a Website built? You're in
                                the right place and we'd love to hear about your project.
                                </p>
                        </div>
                        <div className="about-style col-lg-6">
                            <img src={AboutImg} alt="About Us" />
                        </div>
                    </div>
                </div>
            </section >

        );
    }
}

export default AboutUs;