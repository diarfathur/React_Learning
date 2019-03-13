import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import {actions} from '../Store'

const Profile = props => {
    
    if (!props.is_login) {
        return <Redirect to={{ pathname: "/signin" }} />;
    } else {
        return (
            <section className="container mt-5">
                <center>
                    <h1>Profile</h1>
                    <p className="mt-5">Email: {props.email}</p>
                    <p>Fullname: {props.full_name}</p>
                </center>
            </section>
        );
    }
};

export default connect (
    "is_login, email, full_name",
    actions
    )(withRouter(Profile))