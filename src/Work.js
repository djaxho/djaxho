import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import './Work.css';

class Work extends Component {
    render() {
        return (

            <div className="Work row small-12 medium-8 large-12 columns">

                <div className="mock-tabs" >
                    <IndexLink activeClassName='is-active'
                          to='/work'
                    >
                        Programming/Dev
                    </IndexLink>
                    <Link activeClassName='is-active'
                          className=""
                          to='/work/sci'
                    >
                        Science
                    </Link>
                </div>

                <div className="columns">

                    {this.props.children}

                </div>

            </div>
        );
    }
}

export default Work