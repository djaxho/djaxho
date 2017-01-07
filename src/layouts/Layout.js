import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import './Layout.css';
//import Foundation from 'react-foundation';
import { Link } from 'react-router'

class Nav extends Component {
    render() {
        return (
            <div>
                <Link activeClassName='active' to='/'>Home</Link>&nbsp;
                <Link activeClassName='active' to='/address'>Address</Link>&nbsp;
                <Link activeClassName='active' to='/about'>About</Link>&nbsp;
                <Link activeClassName='active' to='/namedComponent'>Named Components</Link>&nbsp;
                <Link activeClassName='active' to={{ pathname: '/address/query', query: { message: 'Hello from Route Query' } }}>Route Query</Link>
            </div>
        );
    }
}

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dan<u>ny</u> Jackson</h2>
          <span>Programmer | Developer</span>
        </div>
        <p className="App-intro">
            <div><Nav /></div>
            {this.props.children}
        </p>
      </div>
    );
  }
}

export default Layout;
