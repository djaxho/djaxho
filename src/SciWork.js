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

class SciWork extends Component {
    render() {
        return (
            <div>
                <h4>Overview</h4>

                <div className="overview">

                    <p>
                        I am experienced in environmental impact
                        assessment, report writing, field hydrogeology,
                        hydrogeochemical and water balance
                        modelling, sedimentation modelling, seepage
                        modelling, and client interaction for operations
                        throughout Australia and South America.
                    </p><p>
                        I hold
                        a Bachelor of Science Degree in Environmental
                        Science with a specialization in Environmental
                        Systems and Resource Management.
                    </p>

                </div>

                <h4 style={{marginBottom:'20px'}}>Notable projects</h4>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={sat} />
                    </div>
                    <div className="media-object-section">
                        <h5>Hydrogeochemical Modeling</h5>
                        <p>
                            Goldsim water balance and
                            hydrogeochemical model building and
                            model interrogations.
                        </p>
                    </div>
                </div>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={river} />
                    </div>
                    <div className="media-object-section">
                        <h5>Hydrogeology Field Work</h5>
                        <p>
                            Groundwater and surface water sampling,
                            well development, pumping tests, and data
                            logger installations and downloads with
                            appropriate QA/QC measures.
                        </p>
                    </div>
                </div>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={earth2} />
                    </div>
                    <div className="media-object-section">
                        <h5>Runoff Sedimentation Modeling</h5>
                        <p>
                            SedCAD modelling of sedimentation for
                            large mining operations to establish water
                            management plans and sedimentation pond
                            designs for TSS compliance.
                        </p>
                    </div>
                </div>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={earth1} />
                    </div>
                    <div className="media-object-section">
                        <h5>Goundwater Seepage Modeling</h5>
                        <p>
                            SEEP/W transient modelling of seepage in
                            unsaturated zones and steady-state
                            modelling of dam seepage.
                        </p>
                    </div>
                </div>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={geo} />
                    </div>
                    <div className="media-object-section">
                        <h5>ArcGIS Projects</h5>
                        <p>
                            ArcGIS use for catchment delineation,
                            stage-storage curves, and multi-layer site
                            suitability selections.
                        </p>
                    </div>
                </div>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={waves} />
                    </div>
                    <div className="media-object-section">
                        <h5>Environmental Impact Assesments</h5>
                        <p>
                            Analysis and interpretation of air and water
                            quality data and flora / fauna baseline
                            studies for impact assessment and
                            regulatory compliance.
                        </p>
                    </div>
                </div>
                <div className="media-object stack-for-small">
                    <div className="media-object-section">
                        <img className="thumbnail" src={wave} />
                    </div>
                    <div className="media-object-section">
                        <h5>More...</h5>
                        <p>
                            Throughout my professional history I've played a role various projects. &nbsp;
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

export default SciWork