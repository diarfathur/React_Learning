import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid">

                <div className="row footer">
                    <div className="col-md-6 col-sm-12">
                        <img id="logofooter" src="assets/img/logo/logo-alterra-academy-plain.png" />
                        <p id="copyright"> &copy; Copyright Alterra Group 2019</p>
                    </div>

                    <div className="col-md-6 col-sm-12 sosmedfooter">
                        <div className="followme">
                            <p className="textfollowme">Follow Us On</p>
                            <ul>
                                <li className="listsosmed">
                                    <img className="imgsosmed" src="assets/img/ico/ico-facebook.png" />
                                    <span className="textsosmed" id="facebook">Facebook</span>
                                </li>
                                <li className="listsosmed">
                                    <img className="imgsosmed" src="assets/img/ico/ico-twitter.png" />
                                    <span className="textsosmed">Twitter</span>
                                </li>
                                <li className="listsosmed">
                                    <img className="imgsosmed" src="assets/img/ico/ico-instagram.png" />
                                    <span className="textsosmed">Instagram</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;