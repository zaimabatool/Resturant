import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Heart, Truck } from 'lucide-react';
import './Home.css';

function Home() {
    return (
        <div className="home-page animate-fade-in">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <div className="hero-text glass">
                        <h1 className="hero-title">
                            Share Food, <br /> <span className="text-gradient">Save Lives</span>
                        </h1>
                        <p className="hero-subtitle">
                            Join the movement in Karachi. We connect restaurants with surplus food
                            directly to orphanages and old age homes. No food goes to waste.
                        </p>
                        <div className="hero-actions">
                            <Link to="/auth" className="btn btn-primary">
                                Register Now
                            </Link>
                            <a href="#how-it-works" className="btn btn-outline">
                                How It Works
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                            alt="Community sharing food"
                            className="floating-hero-img"
                        />
                    </div>
                </div>
                <div className="hero-bg-glow"></div>
            </section>

            {/* Features / How it works */}
            <section id="how-it-works" className="features container">
                <h2 className="section-title text-center">How It Works</h2>
                <div className="features-grid">
                    <div className="card feature-card">
                        <div className="feature-icon-wrapper">
                            <Utensils size={32} className="feature-icon" />
                        </div>
                        <h3>1. Upload Surplus</h3>
                        <p>Restaurants upload details of perfectly good, untouched leftover food at the end of the day or shift.</p>
                    </div>
                    <div className="card feature-card">
                        <div className="feature-icon-wrapper">
                            <Heart size={32} className="feature-icon" />
                        </div>
                        <h3>2. Claim & Match</h3>
                        <p>Registered orphanages and old age homes receive notifications and claim the food they need instantly.</p>
                    </div>
                    <div className="card feature-card">
                        <div className="feature-icon-wrapper">
                            <Truck size={32} className="feature-icon" />
                        </div>
                        <h3>3. Safe Delivery & Impact</h3>
                        <p>Food is safely delivered, reducing city waste and ensuring our vulnerable communities sleep with a full stomach.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
