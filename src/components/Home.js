import React, {Component} from 'react';
import Project from './Project'
import Footer from './Footer';


class Home extends Component {
    render() {

        return (
            <section className="home-section">
                <div className="container">
                    <div className="row">
                        
                           
                            
                            <h1 className={'name'}>Hii There 
                            I am Kaavya </h1>
                        </div>
                    
                </div>

                <Footer/>
            </section>

        );
    }
}

export default Home;