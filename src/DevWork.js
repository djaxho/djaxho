import React, { Component } from 'react'
import analytics from './img/Canalyticscode.jpeg';
import calcimg from './img/Ccalc.jpeg';
import codeimg from './img/Ccode.jpeg';
import earth1 from './img/Cearth1.jpg';
import earth2 from './img/Cearth2.jpg';
import geo from './img/Cgeo.jpg';
import river from './img/Criver.jpg';
import sat from './img/Csat.jpg';
import sea from './img/Csea.jpg';
import sketch from './img/Csketch.jpeg';
import swell from './img/Cswell.png';
import wave from './img/Cwave.jpg';
import waves from './img/Cwaves.jpg';
import weather from './img/Cweather.jpg';
import pos from './img/pos.jpeg';
import graph from './img/graph.png';

class DevWork extends Component {
    render() {
        return (
            <div>
                <h4>Overview</h4>

                <div className="overview">

                    <p>
                        I'm well versed in object oriented PHP using modern design patterns and SOLID programming principles. Team and individual experience developing full cycle MVC applications from concept to production.  I use PHP, MySQL, Bash, Python, Apache, Nginx on Linux (LAMP) for back end development and css, scss, html, pure javascript, ReactJS, D3js, and jquery for front end development.
                    </p><p>
                        I generally use Laravel / Lumen as a back end framework and Foundation / Bootstrap as a style framework, and React, node, jquery, d3js, angular, as front end ‘frameworks.’ I use git (Github and Bitbucket) for version control individually and as part of large development teams. I have experience setting up, maintaining, and troubleshooting linux servers (stand alone, Digital Ocean, Liquidweb, and AWS).
                    </p><p>
                        I have experience planning/creating/maintaining API's and their corresponding front ends along with heavily integrating 3rd party APIs (Infusionsoft CRM, Vonage, etc.) into applications, and in some cases using them to completely power applications and software.
                    </p>

                </div>

                <h4 style={{marginBottom:'20px'}}>Notable projects</h4>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={analytics} />
                    </div>
                    <div className="media-object-section">
                        <h5>Marketing Funnel Software</h5>
                        <p>
                            Created an extensible MVC program to rapidly produce variations of websites and
                            modularize components using custom blade directives to form a trickle-down usage of assets (js, css)
                            and tracking/stats components. This program brought about a company-wide shift to the way we
                            performed A/B testing, adoption of default modules, and new site builds.
                        </p>
                    </div>
                </div>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={pos} />
                    </div>
                    <div className="media-object-section">
                        <h5>React infusionsoft POS </h5>
                        <p>
                            Created a Point of Sale (POS) Application using <a href="https://facebook.github.io/react/">react js</a> for front end and Laravel for the
                            RESTful API, accounting system, databases, and API integration for processing payments and customer
                            details through Infusionsoft’s API. This application has a customer lookup/creation, shopping cart, and
                            system for splitting payments, payment plans, cash/credit/check payments, card-swiping.
                        </p>
                    </div>
                </div>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={swell} />
                    </div>
                    <div className="media-object-section">
                        <h5>Environmental Data Mapping</h5>
                        <p>
                            Wrote scripts in GrADS to map various global environmental data sets in the GRIB format.
                        </p>
                    </div>
                </div>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={graph} />
                    </div>
                    <div className="media-object-section">
                        <h5>d3.JS Interactive Multigraph</h5>
                        <p>
                            Created a 3-in-1 connected chart using d3 javascript. It displays various data sets along a common time line with optional drilling-down of more detailed data.
                        </p>
                    </div>
                </div>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={calcimg} />
                    </div>
                    <div className="media-object-section">
                        <h5>Data Scraper and Forecast</h5>
                        <p>
                            Created a program which collects data (via ftp and cURL) from various public government sources and uses python, deGRIB, bash, and more to process the various environmental data sets (grib), run it though custom forecasting algorithms, and upload to databases for use in my api.
                        </p>
                    </div>
                </div>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={weather} />
                    </div>
                    <div className="media-object-section">
                        <h5>Weather Web App</h5>
                        <p>
                            Conceptualized and developed the framework for an ocean forecasting system and developed
                            associated interactive web applications. Using bash software and python for data processing, model
                            runs, database updates/backups, map and image processing. Using Laravel for api’s and model runs
                            and testing. Using Javascript (D3js for data visualization and UI) and CSS (Foundation) for front-end
                            design.
                        </p>
                    </div>
                </div>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={sketch} />
                    </div>
                    <div className="media-object-section">
                        <h5>More...</h5>
                        <p>
                            Throughout my professional and personal history with programming and coding I have worked on many exciting projects and websites.&nbsp;
                            <a target="_blank" href="mailto:djaxho@gmail.com?Subject=Developer%20Enquiry&body=Hi,%20I%20was%20on%20your%20developer%20site%20recently%20and..." >
                                 Give me an email to discuss more of them.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DevWork