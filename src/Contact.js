import React, { Component } from 'react';


class Contact extends Component {
    render() {
        return (
            <div>
                <form class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 col-sm-12 leftcolumn">
                            <a href="about.html">
                                <img class="logoimage after" src="assets/img/logo/logo-alterra-academy-plain@2x.png" alt="" />
                            </a>
                        </div>
                        <div class="col-md-6 col-sm-12 rightcolumn">
                            <div class="formisi">
                                <div class="row">
                                    <h1>Contact Us</h1>
                                </div>
                                <hr />
                                <p>Send us a message and we will get back to you as soon as possible</p>
                                <form>
                                    <label for="name">Name<span style={{ color: "red" }}>*</span></label>
                                    <div class="input-group mb-1">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="name"><img src="./assets/img/ico/ico-user.png" /></span>
                                        </div>
                                        <input class="form-control" type="text" />>
                                    </div>
                                    <label for="email">Email<span style={{ color: "red" }}>*</span></label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="email"><img src="./assets/img/ico/ico-email.png" /></span>
                                        </div>
                                        <input class="form-control" type="email" />>
                                    </div>
                                    <label for="phonenumber">Phone Number<span style={{ color: "red" }}>*</span></label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="phonenumber"><img class="editphone" src="./assets/img/ico/ico-phone.png" /></span>
                                        </div>
                                        <input class="form-control" type="tel" />>
                                    </div>
                                    <div class="form-group-list">
                                        <label for="national">National</label>
                                        <br />
                                        <div class="select-arrow">
                                            <select id="national" class="form-control input-lg">
                                                <option></option>
                                                <option>Indonesia</option>
                                                <option>Malaysia</option>
                                                <option>Singapore</option>
                                                <option>Japan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="message">Message</label>
                                        <textarea class="form-control" id="message" rows="3"></textarea>
                                    </div>
                                    <button type="button" class="btn btn-warning btn-lg btn-block">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </form>
                <script src="./assets/js/bootstrap.min.js"></script>
            </div>
        );
    }
}

export default Contact