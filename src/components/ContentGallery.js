import React, { Component } from 'react';

class ContentGallery extends Component {
    render() {
        return (
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-1 col-sm-1">
                            <img class="picturegalery" src={require("../img/ico/ico-gallery@2x.png")} />
                        </div>
                        <div class="col-md-1 col-sm-1">
                            <h1>Galery</h1>
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-md-4 col-sm-6 col-12">
                            <div class="card mb-4 shadow-sm">
                                <img class="picture1" src={require("../img/exp-gallery/jake-allison-1322894-unsplash.jpg")} />
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-12">
                            <div class="card mb-4 shadow-sm">
                                <img class="picture2" src={require("../img/exp-gallery/jay-lee-1323073-unsplash.jpg")} />
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-12">
                            <div class="card mb-4 shadow-sm">
                                <img class="picture3" src={require("../img/exp-gallery/nordwood-themes-1319985-unsplash.jpg")} />
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-12">
                            <div class="card mb-4 shadow-sm">
                                <img class="picture4" src={require("../img/exp-gallery/ryan-1321510-unsplash.jpg")} />
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-12">
                            <div class="card mb-4 shadow-sm">
                                <img class="picture5" src={require("../img/exp-gallery/nic-yee-1321843-unsplash.jpg")} />
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-12">
                            <div class="card mb-4 shadow-sm">
                                <img class="picture6" src={require("../img/exp-gallery/phil-desforges-1322844-unsplash.jpg")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentGallery