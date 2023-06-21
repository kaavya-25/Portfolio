import React, {Component} from 'react';
import Footer from './Footer';
class Contact extends Component {

    render() {
        return (
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="contact-content">
                                <h2 className="section-title">Contact Me</h2>
                                
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <span>Email:</span>
                                        <p>kaavya.s2020@vitstudent.ac.in</p>
                                        
                                    </div>
                                    <div className="contact-item">
                                        <span>Phone:</span>
                                        <p>9345809123</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>





        );
    }
}

export default Contact;