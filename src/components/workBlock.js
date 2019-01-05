import React, { Component } from 'react';

class WorkBlock extends Component {
    render() {
        return (
            <section id="work" className="work-block">
                <div className="container">
                    <h3>Latest Creations</h3><span className="icon-container"><i className="fa fa-code"></i></span>
                    <div className="header-divider"></div>
                </div>
                <div className="work-style work-example-1">
                    <div className="work-style-info">
                        <h2>Adventures of Tiff</h2>
                        <h4>• A Travel Inspired Personal Blog</h4>
                        <button>Find Out More</button>
                    </div>
                </div>
                <div className="work-style work-example-2">
                    <div className="work-style-info">
                        <h2>Miss Tiffins Tales</h2>
                        <h4>• Taking The Classroom Online</h4>
                        <button>Find Out More</button>
                    </div>
                </div>
                <div className="work-style work-example-3">
                    <div className="work-style-info">
                        <h2>Kings Cater Hire</h2>
                        <h4>• Brochure For Bussines</h4>
                        <button>Find Out More</button>
                    </div>
                </div>
                <div className="work-style work-example-4">
                    <div className="work-style-info">
                        <h2>Kings Fridge Hire</h2>
                        <h4>• Brochure For Bussines</h4>
                        <button>Find Out More</button>
                    </div>
                </div>
            </section >
        );
    }
}

export default WorkBlock;