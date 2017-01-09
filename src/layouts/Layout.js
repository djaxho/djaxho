import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import './Layout.css';
import { Link, IndexLink } from 'react-router'

class Nav extends Component {
    render() {
        return (
            <ul className="header-subnav">
                {/*<li></li>*/}
                <li><Link activeClassName='is-active' to='/work'>Work</Link></li>
                <li><IndexLink activeClassName='is-active' to='/djaxho'>About me</IndexLink></li>
                <li><Link activeClassName='is-active' to='/personal'>Personal</Link></li>
                {/*<li><Link activeClassName='is-active' to={{ pathname: '/address/query', query: { message: 'Hello from Route Query' } }}>Route Query</Link></li>*/}
            </ul>
        );
    }
}

class Layout extends Component {
  render() {
    return (
        <div className="Layout">

                <div className="Layout-header callout large">

                    <div className="Layout-header-content row column text-center">

                        <IndexLink to='/'>

                            <div>
                                <img src={logo} style={{opacity: 0.8}} className="Layout-header-logo" alt="logo" />
                                <h2>Danny Jackson</h2>
                                <p>Programmer | Developer</p>
                            </div>

                        </IndexLink>

                        <div>

                            <a target="_newtab" className="contact-button button large" href="mailto:djaxho@gmail.com?Subject=Developer%20Enquiry&body=Hi,%20I%20was%20on%20your%20developer%20site%20recently%20and...">Contact me</a>
                            <button className="social-button button large hollow" >
                                <a target="_blank" href="https://www.linkedin.com/in/danny-jackson-3857bb77" ><i className="fa fa-linkedin-square" aria-hidden={true} style={{}} ></i></a>
                                <a target="_blank" href="https://www.instagram.com/memoirs_of_a_white_geisha/" ><i className="fa fa-instagram" aria-hidden={true}></i></a>
                                <a target="_blank" href="mailto:djaxho@gmail.com?Subject=Developer%20Enquiry&body=Hi,%20I%20was%20on%20your%20developer%20site%20recently%20and..." ><i className="fa fa-envelope-o" aria-hidden={true}></i></a>
                                <a target="_blank" href="https://github.com/djaxho" ><i className="fa fa-github" aria-hidden={true}></i></a>
                            </button>

                        </div>

                    </div>

                    <Nav />

                </div>

                {this.props.children}

        </div>
    );
  }
}

export default Layout;
