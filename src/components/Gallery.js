import React, { Component } from 'react';
import '../styles/galery_style.css';
import '../styles/about_style.css';
import Header from './Header';
import Footer from './Footer';
import ContentGallery from './ContentGallery';

class Gallery extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ContentGallery/>                
                <Footer/>
            </div>
        );
    }
}

export default Gallery