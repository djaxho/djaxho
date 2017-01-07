import React, { Component } from 'react'
import Layout from './layouts/Layout';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

class App extends Component {
    render () {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Layout}>
                    <IndexRoute component={Home} />
                    <Route path='/address' component={Address}>
                        <IndexRoute component={TwitterFeed} />
                        <Route path='instagram' component={Instagram} />
                        <Route path='query' component={Query} />
                    </Route>
                    <Route path='/about(/:name)' component={About} />
                    <Route path='/namedComponent' component={NamedComponents}>
                        <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
                    </Route>
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

//another way of doing it, not sure if it's proper
const Query = (props) => (
    <h2>{props.location.query.message}</h2>
)

class Title extends Component {
    render() {
        return (
            <h1>Hello from Title Component</h1>
        );
    }
}

class SubTitle extends Component {
    render() {
        return (
            <h1>Hello from SubTitle Component</h1>
        );
    }
}

class NamedComponents extends Component {
    render() {
        return (
            <div>
                {this.props.title}<br />
                {this.props.subTitle}
            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <h1>Hello from Home!</h1>
        );
    }
}

class Address extends Component {
    render() {
        return (
            <div>
                <br />
                <Link to='/address'>Twitter Feed</Link>&nbsp;
                <Link to='/address/instagram'>Instagram Feed</Link>
                <h1>We are located at 555 Jackson St.</h1>
                {this.props.children}
            </div>
        );
    }
}

class Instagram extends Component {
    render() {
        return (
            <h3>Instagram Feed</h3>
        );
    }
}

class TwitterFeed extends Component {
    render() {
        return (
            <h3>Twitter Feed</h3>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <h3>Welcome to the About Page</h3>
                { this.props.params.name && <h2>Hello, {this.props.params.name}</h2>}
            </div>
        );
    }
}

class NotFound extends Component {
    render() {
        return (
            <h1>404.. This page is not found!</h1>
        );
    }
}
export default App