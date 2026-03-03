import React from 'react';
import { Users, Target, Heart, ShieldCheck } from 'lucide-react';
import './About.css';

function About() {
    return (
        <div className="about-page animate-fade-in">
            <section className="about-hero">
                <div className="container about-content">
                    <div className="about-text glass">
                        <h1 className="hero-title">
                            About <span className="text-gradient">Food Rescue</span>
                        </h1>
                        <p className="hero-subtitle">
                            Bridging the gap between surplus food and empty stomachs in Karachi.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mission-vision container">
                <div className="grid-2-col">
                    <div className="card mission-card">
                        <Target size={40} className="feature-icon mb-4" />
                        <h2>Our Mission</h2>
                        <p>
                            To eliminate food waste in our city by seamlessly connecting restaurants that have surplus food with orphanages and old age homes that need it most. We believe that no edible food should ever end up in a landfill while people go hungry.
                        </p>
                    </div>
                    <div className="card vision-card">
                        <Users size={40} className="feature-icon mb-4" />
                        <h2>Our Vision</h2>
                        <p>
                            A zero-waste Karachi where every vulnerable individual has reliable access to nutritious meals, fostering a community built on empathy, sharing, and sustainability.
                        </p>
                    </div>
                </div>
            </section>

            <section className="core-values container">
                <h2 className="section-title text-center">Our Core Values</h2>
                <div className="features-grid">
                    <div className="card feature-card">
                        <div className="feature-icon-wrapper">
                            <Heart size={32} className="feature-icon" />
                        </div>
                        <h3>Empathy First</h3>
                        <p>We operate with deep compassion for the communities we serve, ensuring dignity for all.</p>
                    </div>
                    <div className="card feature-card">
                        <div className="feature-icon-wrapper">
                            <ShieldCheck size={32} className="feature-icon" />
                        </div>
                        <h3>Safety & Hygiene</h3>
                        <p>Ensuring that all shared food meets the highest standards of safety and freshness.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
