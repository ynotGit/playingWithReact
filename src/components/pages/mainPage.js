import React, { Component } from 'react';
import LandingBlock from '../../components/landingBlock';
import AboutUs from '../../components/aboutUs';
import News from '../../components/news'
import WorkBlock from '../../components/workBlock';
import Testimonial from '../../components/testimonial';
import Contact from '../../components/contact';


class MainPage extends Component {
    render() {
        return (
            <main id="home">
                <LandingBlock />
                <AboutUs />
                <News />
                <WorkBlock />
                <Testimonial />
                <Contact />
            </main>
        );
    }
}

export default MainPage;