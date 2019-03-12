import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../pages/App';
import SignIn from '../pages/SignIn';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import MyBlog from '../pages/MyBlog';
import Profile from '../pages/Profile';


class MainRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/blog" component={MyBlog} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        )
    }
}

export default MainRoute;