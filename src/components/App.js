import React from "react";
import img1 from '../image/_U5A1689.png';

import { FaInstagramSquare } from 'react-icons/fa';

import '../CSSFile/app.css'

const App = () => {
    return (
        <div className="intro-container">
            <div>
                <h1>Portfolio</h1>
            </div>
            <div className="intro">
                <div>
                    <img className="intro-image" src={img1} width="380px" height="400px"></img>
                </div>
                <div className="intro-left">
                    <p className="intro-left-name">Renuka Bharti</p>
                    <p className="intro-left-title">Real Estate Agent</p>
                </div>
            </div>
            <div className="summary">
                <h3 className="about-heading">About</h3>
                <div className="about-elements">
                    <p className="about-paragraph">
                        Hello, I am originally from India and moved to Silicon Valley in 2009. As a Real Estate Agent, my goal is to provide excellent service and make your dream home a reality. I value trust, interest and commitment clients place in me and I work hard to exceed their expectations. I am available to help with your Real Estate needs anytime!
                    </p>
                </div>
            </div>
            <div className="footer-contact">
                <div className="insta-container">
                    <p className="footer-p">Follow me on Instagram: </p>
                    <p><a className="insta-link" href="https://www.instagram.com/homesbyrenuka/" target="_blank"><FaInstagramSquare /></a></p>
                </div>
                <p className="footer-p2">Email me at: <span>renujai78@gmail.com</span></p>
            </div>
        </div>
    )
}

export default App;