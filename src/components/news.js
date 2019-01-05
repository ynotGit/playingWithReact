import React, { Component } from 'react';
import Logo from '../images/logo.png';

class News extends Component {
    render() {
        return (
            <section id="news" className="news-block">
                <div className="container">
                    <h3>Updates & Articles</h3><span className="icon-container"><i className="far fa-exclamation"></i></span>
                    <div className="header-divider"></div>
                    <div className="row">
                        <div className="col-md-4 article">
                            <h4>Web Dev 2019, What Can We Expect? (Pt.1)</h4>
                            <img src={Logo} alt="Article" />
                            <p>2018 was a noticeable year for technology, being in the news for good and bad reasons. Everything from Augmented and Visual reality growing and becoming main...</p>
                            <a href="#">Continue Reading...</a>
                        </div>
                        <div className="col-md-4 article border-left">
                            <h4>Into The App Market...</h4>
                            <p>Into the App market we go! We specialise in creating web sites that not only look good on desktops but all types of digital devices, no matter how great or small, however...</p>
                            <a href="#">Continue Reading...</a>
                        </div>
                        <div className="col-md-4 article border-left">
                            <h4>We Are Live!</h4>
                            <p>We are live! Welcome to the new and shiny Ynot Innovate website. We've worked hard on broadening our skills over the past year, using an entirely new tech stack to create...</p>
                            <a href="#">Continue Reading...</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default News;