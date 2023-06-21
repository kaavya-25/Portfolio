import React, {Component} from 'react';
import Footer from './Footer';

class Projects extends Component {
    render() {


        return (
            <section className="projects-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                                <div className="about-title display-1">PROJECTS</div>
                            <br/>
                                <p className="about-description display-7 ">
                                   I have done certain  projects in these 3 years of study. In the area of DBMS I have a shopping portal . In Machine Learning I have done Bank Customer Churn Prediction 
                                   and Rainfall Prediction. In addition to this I have dveleped E-health care app. I always like to do more projects on various areas so as to gain more 
                                   knowledge. 

                                </p>
                            </div>
                            <div className="skills-list col-md-6">

                                <ul className="skills-list display-6">
                                    <li><a className={"link-secondary link-offset-2 link-underline link-underline-opacity-0 "} href={"https://github.com/kaavya-25/MLTDA"}></a>Bank Churn Prediction  </li>
                                    <li><a className={"link-secondary link-offset-2 link-underline link-underline-opacity-0 "} href={"https://github.com/laasya-dev/E-Healthcare-Services"}></a> Health Care Services</li>
                                    <li><a className={"link-secondary link-offset-2 link-underline link-underline-opacity-0 "} href={"https://bharathm7.github.io/agecalculator/"}></a>Age Caculator </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                    <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                    <Footer/>
            </section>

        );
    }
}

export default Projects;