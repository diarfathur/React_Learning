import React, { Component } from 'react';


class Gallery extends Component {
    render() {
        return (
            <div>
                <div class="row aboutheader">
                    <div class="col-md-6">
                        <img id="logo" src="assets/img/logo/logo-alterra-academy.png" />
                    </div>
                    <div class="col-md-6">
                        <nav>
                            <ul class="nav justify-content-end headerlist" id="navbarku">
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">ABOUT</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="active" href="galery.html">GALLERY</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">CONTACT</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="album py-5 bg-light">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-1 col-sm-1">
                                <img class="picturegalery" src="./assets/img/ico/ico-gallery@2x.png" />
                            </div>
                            <div class="col-md-1 col-sm-1">
                                <h1>Galery</h1>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-md-4 col-sm-6 col-12">
                                <div class="card mb-4 shadow-sm">
                                    <img class="picture1" src="./assets/img/exp-gallery/jake-allison-1322894-unsplash.jpg" />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12">
                                <div class="card mb-4 shadow-sm">
                                    <img class="picture2" src="./assets/img/exp-gallery/jay-lee-1323073-unsplash.jpg" />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12">
                                <div class="card mb-4 shadow-sm">
                                    <img class="picture3" src="./assets/img/exp-gallery/nordwood-themes-1319985-unsplash.jpg" />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12">
                                <div class="card mb-4 shadow-sm">
                                    <img class="picture4" src="./assets/img/exp-gallery/ryan-1321510-unsplash.jpg" />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12">
                                <div class="card mb-4 shadow-sm">
                                    <img class="picture5" src="./assets/img/exp-gallery/nic-yee-1321843-unsplash.jpg" />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-12">
                                <div class="card mb-4 shadow-sm">
                                    <img class="picture6" src="./assets/img/exp-gallery/phil-desforges-1322844-unsplash.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="container-fluid">
                    <div class="row footer">
                        <div class="col-md-6">
                            <img id="logofooter" src="assets/img/logo/logo-alterra-academy-plain.png" />
                            <p id="copyright"> &copy; Copyright Alterra Group 2019</p>
                        </div>
                        <div class="col-md-6 sosmedfooter">
                            <div class="followme">
                                <p class="textfollowme">Follow Us On</p>
                                <ul>
                                    <li class="listsosmed">
                                        <img class="imgsosmed" src="assets/img/ico/ico-facebook.png" />
                                        <span class="textsosmed" id="facebook">Facebook</span>
                                    </li>
                                    <li class="listsosmed">
                                        <img class="imgsosmed" src="assets/img/ico/ico-twitter.png" />
                                        <span class="textsosmed">Twitter</span>
                                    </li>
                                    <li class="listsosmed">
                                        <img class="imgsosmed" src="assets/img/ico/ico-instagram.png" />
                                        <span class="textsosmed">Instagram</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Gallery