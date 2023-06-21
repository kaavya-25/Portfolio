import React, {Component} from 'react';
import Footer from './Footer'
class About extends Component {
    render() {

        return (
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-title display-1">All About Me </div>
                            <p className="about-description display-7 ">
                               I am Kaavya, currently pursuing 3rd Year Mtech(INT) CSE in VIT. I am deeply interested in developing softwares. I have also written 
                               some tech blogs about Artificial Intelligence and Machine Learning .With this I  have also learnt Flutter development. 
                               

                            </p>
                        </div>
                        <div className="skills-list col-md-6">

                            <ul className="skills-list display-1">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                            
                                <li>Python</li>
                                <li>Java</li>
                                <li>C,Cpp</li>
                                <li>Cloud Computing</li>
                                <li>Artifical Intelligence </li>
                                <li> Flutter </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Footer/>
            </section>

        );
    }

}

export default About;