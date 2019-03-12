import React, { Component } from 'react';
import MainRoute from './mainroute/MainRoute';
import { withRouter } from 'react-router-dom';

import './styles/App.css';

import Header from './components/Header';

class AppAjax extends Component {
    postSignout = () => {
        localStorage.removeItem("is_login");
        this.props.history.push("/");
    };

    render() {
        return (
            <div className="App">
                <Header postSignout={this.postSignout} />
                <MainRoute/>
            </div>
        );
    }
}

export default withRouter(AppAjax);