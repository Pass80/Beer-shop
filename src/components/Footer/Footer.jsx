import React from 'react';
import './Footer.css';
import img4 from '../../assets/images/beer-cup.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Link to="/">
                <div className="footer-image">
                    <img src={img4} alt="two glasses of beer" />
                </div>
            </Link>
        </footer>
    );
};

export default Footer;
