import React, { Component } from 'react';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        number: '',
        textarea: ''
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        const { name, email, number, textarea } = this.state;
        return (
            <section id="contact" className="contact">
                <div className="container">
                    <h3>Get In Touch</h3><span className="icon-container"><i className="fa fa-envelope"></i></span>
                    <div className="header-divider"></div>
                    <div className="row">
                        <form action="" className="col-6" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input className="input-style" type="text" name="name" value={name} onChange={this.onChange} placeholder="Your Name:" />
                            </div>
                            <div className="form-group">
                                <input className="input-style" type="email" name="email" value={email} onChange={this.onChange} placeholder="Your Email:" />
                            </div>
                            <div className="form-group">
                                <input className="input-style" type="text" name="number" value={number} onChange={this.onChange} placeholder="Your Number:" />
                            </div>
                            <div className="form-group">
                                <textarea className="text-area-style" name="textarea" value={textarea} onChange={this.onChange} placeholder="Let's chat..." rows="10"></textarea>
                            </div>
                            <input className="button-style" type="submit" value="Send" />
                        </form>
                        <div className="col-md-6">
                            <p>
                                Got an idea? Need a new Website that looks great on all devices? Got an existing website that needs updating? We'd love to hear about your Web Development needs and how we can work together to make your idea
                                a reality. You can reach us by filling the contact form to the left. Include as much as you can explaining what you require (a site for bussines, an online webstore,
                                a personal blog etc) and we'll get back to you in a timely manor. We look forward to hearing from you!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;

