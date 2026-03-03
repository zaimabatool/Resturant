import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer relative">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>Food Rescue Karachi</h3>
                    <p>Reducing food waste, feeding those in need across the city.</p>
                </div>
                <div className="footer-links">
                    <p>&copy; {new Date().getFullYear()} Food Rescue. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
