import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const Profile = props => {
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    const email = localStorage.getItem("email");
    const full_name = localStorage.getItem("full_name");
    console.log("is_login", is_login);

    if (is_login === null) {
        return <Redirect to={{ pathname: "/signin" }} />;
    } else {
        return (
            <section className="content">
                <h1>Profile</h1>
                <p>Email: {email}</p>
                <p>Fullname: {full_name}</p>
            </section>
        );
    }
};

export default Profile