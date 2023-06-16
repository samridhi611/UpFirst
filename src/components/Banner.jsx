import "./banner.css";
import Footer from './Footer';
import Navbar from './Navbar';
import React, { useState } from 'react';
import app from "../images/app.png";
import google from "../images/googleplay.png";
import Home from "../newspages/Home";
import { MDBBtn } from 'mdb-react-ui-kit';


const Banner = ({onBannerClose}) => {

    const [showBanner, setShowBanner] = useState(true);

    const handleCloseBanner = () => {
        setShowBanner(false);
        onBannerClose();
    };

    return(
    
        showBanner && (
        <div className="banner">
             <p>For the best experience use UpFirst app on your smartphone</p>
             <img src={app} alt="app" className="banner-img1"/>
             <img src={google} alt="google" className="banner-img2"/>
             <MDBBtn className="btn-close btn-close-white btn-closes" color="none" aria-label="Close" onClick={handleCloseBanner}/>
        </div>
        )
        
    )
}

export default Banner;