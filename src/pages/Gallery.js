import React, { Component } from 'react';
import '../styles/galery_style.css';
import '../styles/about_style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentGallery from '../components/ContentGallery';

class Gallery extends Component {
    render() {
        return (
            <div>
                <ContentGallery/>                
                <Footer/>
            </div>
        );
    }
}

export default Gallery