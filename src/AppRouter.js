import React, { Component } from 'react';
import MainRoute from './mainroute/MainRoute';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from './Store';

import './styles/App.css';

import Header from './components/Header';

class AppAjax extends Component {
    postSignout = () => {
        this.props.postLogout().then(() => {
            console.log("this", this);
            this.props.history.replace("/profile");
        })
    };

    render() {
        return (
            <div className="App">
                <Header postSignout={this.postSignout} />
                <MainRoute />
            </div>
        );
    }
}

export default connect("is_login", actions)(withRouter(AppAjax));