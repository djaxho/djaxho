import React, { Component } from 'react'
import hexImg from './img/code2.jpg';
import './aboutme.css';

class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <div className="row">
                    <div className="AboutMe-intro media-object stack-for-small column">
                        <div className="media-object-section middle">
                            <h2>Experiencing experiences.</h2>
                            <h5>I enjoy conceptualizing, planning, and building systems big and small.</h5>
                            <p>
                                I have experience working in predictive hydrogeochemical computer modeling, database design and management,
                                server management (<i className="fa fa-linux"></i> Linux), back-end and front-end web software development, websites and web applications, scraping and mapping of environmental data, algorithm design, 'modernizing' old systems and more.
                            </p>
                        </div>
                        <div className="media-object-section">
                            <img className="thumbnail" src={hexImg} alt="programming" />
                        </div>
                    </div>
                </div>

                <div className="row ctas">
                    <div className="small-12 medium-6 large-4 columns">
                        <h3 className="text-center"><i className="fa fa-code"></i> Languages</h3>
                        <p>
                            I 'speak' many languages such as OOP PHP, Javascript, GrADS, CSS, SQL, Redis, Goldsim, SeepW, Hydroflow, bash, python, C, and more.
                        </p>
                    </div>
                    <div className="small-12 medium-6 large-4 columns">
                        <h3 className="text-center"><i className="fa fa-cube"></i> Frameworks</h3>
                        <p>
                            For php I love laravel/lumen.
                            I've also used other php, css and js frameworks and libraries like this site built in React!
                        </p>
                    </div>
                    <div className="small-12 medium-12 large-4 columns">
                        <h3 className="text-center"><i className="fa fa-th"></i> This site</h3>
                        <p>
                            This site is made with React (Javascript), react-router, and Foundation CSS, in case you were wondering.
                            The code is <a href="https://github.com/djaxho/djaxho">available on my github here</a>
                        </p>
                    </div>
                </div>
                <hr />
                <div className="row float-center text-center quote-section">

                    <p className="small-11 medium-9 large-7 small-centered columns">
                            <div className="row"><big><i className="fa fa-quote-left fa-2x fa-border"></i> Really great work Danny, people truly appreciate it, I swear."</big></div>
                        <small className="float-right">-Myself to myself in the mirror</small>
                    </p>
                </div>

            </div>
        );
    }
}

export default AboutMe