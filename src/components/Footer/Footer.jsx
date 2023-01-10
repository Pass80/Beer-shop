import React from 'react';
import './Footer.css';
import img4 from '../../assets/images/beer-cup.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer-image">
                <img src={img4} alt="two glasses of beer" />
            </div>
        </footer>
    );
};

export default Footer;
