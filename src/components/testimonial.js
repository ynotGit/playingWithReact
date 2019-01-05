import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Review0 from '../images/review0.png'
import Review1 from '../images/review1.png'
import Review2 from '../images/review2.png'

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

class Testimonial extends Component {
    render() {
        return (
            <section id="testimonials" className="testimonial-block">
                <div className="particle-container">
                    <Particles
                        params={particleOutput}
                    />
                </div>
                <div className="container">
                    <h3>Testimonials</h3><span className="icon-container"><i className="fa fa-comment"></i></span>
                    <div className="header-divider"></div>
                    <div className="testimonials">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="testimonial-img" src={Review0} alt="" />
                                <blockquote><i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</i></blockquote>
                                <p><b>Sean, Kings Catering</b></p>
                            </div>
                            <div className="col-md-4">
                                <img className="testimonial-img" src={Review1} alt="" />
                                <blockquote><i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</i></blockquote>
                                <p><b>Grace, Miss Tiffins Tales</b></p>
                            </div>
                            <div className="col-md-4">
                                <img className="testimonial-img" src={Review2} alt="" />
                                <blockquote><i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</i></blockquote>
                                <p><b>Kristina, Adventures of Tiff</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


        );
    }
}

export default Testimonial;