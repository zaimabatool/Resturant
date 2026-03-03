import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UtensilsCrossed, HeartHandshake, LogIn, LayoutDashboard, Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="navbar glass">
            <div className="container nav-content">
                <Link to="/" className="nav-logo">
                    <UtensilsCrossed size={28} className="logo-icon" />
                    <span className="logo-text">Food Rescue</span>
                </Link>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>
                        Home
                    </Link>
                    <Link to="/ngo" className={`nav-link ${location.pathname === '/ngo' ? 'active' : ''}`} onClick={closeMobileMenu}>
                        <HeartHandshake size={18} style={{ marginRight: '6px' }} />
                        For NGOs
                    </Link>
                    <Link to="/admin" className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`} onClick={closeMobileMenu}>
                        <LayoutDashboard size={18} style={{ marginRight: '6px' }} />
                        Admin
                    </Link>
                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMobileMenu}>
                        About
                    </Link>
                    <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>
                        Contact
                    </Link>
                    <Link to="/auth" className="nav-btn-primary" onClick={closeMobileMenu}>
                        <LogIn size={18} />
                        <span>Login / Join</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
