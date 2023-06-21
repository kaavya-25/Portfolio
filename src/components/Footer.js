import React, {Component} from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
class Footer extends Component {
    render() {
        return (
            <div >
                <footer className="footer mt-auto py-3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center">
                                <div className="social-icons">
                                    <a href="https://www.linkedin.com/in/karishma-e-869a5b200/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FontAwesomeIcon icon={faLinkedin} size="5x" />
                                    </a>
                                    <a href="https://github.com/kaavya-25" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FontAwesomeIcon icon={faGithub} size="5x" />
                                    </a>
                                    <a href="https://instagram.com/karish_moorthy?igshid=ZDc4ODBmNjlmNQ==" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FontAwesomeIcon icon={faInstagram} size="5x" />
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;