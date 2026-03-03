import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import './Contact.css';

function Contact() {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Simulate network request
        setTimeout(() => {
            setFormStatus('success');
            e.target.reset();
        }, 1500);
    };

    return (
        <div className="contact-page animate-fade-in">
            {/* Header Section */}
            <div className="contact-header">
                <div className="container text-center">
                    <h1 className="contact-title">Get in Touch</h1>
                    <p className="contact-subtitle">
                        Have questions about donating food in Karachi? Need help registering your NGO?
                        We're here to help you make a difference.
                    </p>
                </div>
            </div>

            <div className="container contact-content">
                <div className="contact-grid">

                    {/* Contact Information Cards */}
                    <div className="contact-info-section">
                        <div className="info-card card glass">
                            <div className="info-icon-wrapper">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3>Our Location</h3>
                                <p className="text-muted">123 Food Street, Phase 5 DHA<br />Karachi, Pakistan</p>
                            </div>
                        </div>

                        <div className="info-card card glass">
                            <div className="info-icon-wrapper">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3>Email Us</h3>
                                <p className="text-muted">support@foodrescue.pk<br />partnerships@foodrescue.pk</p>
                            </div>
                        </div>

                        <div className="info-card card glass">
                            <div className="info-icon-wrapper">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3>Call Us</h3>
                                <p className="text-muted">+92 300 1234567<br />Mon-Fri, 9am till 6pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-section card">
                        <div className="form-header">
                            <MessageSquare size={24} className="text-primary" />
                            <h2>Send a Message</h2>
                        </div>

                        {formStatus === 'success' ? (
                            <div className="success-message text-center py-8">
                                <div className="success-icon mb-4">
                                    <Send size={48} className="text-primary mx-auto" />
                                </div>
                                <h3 className="mb-2">Message Sent Successfully!</h3>
                                <p className="text-muted mb-6">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                                <button className="btn btn-outline" onClick={() => setFormStatus('idle')}>
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group grid-2">
                                    <div className="input-field">
                                        <label>First Name</label>
                                        <input type="text" className="form-input" placeholder="Ali" required />
                                    </div>
                                    <div className="input-field">
                                        <label>Last Name</label>
                                        <input type="text" className="form-input" placeholder="Khan" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="form-input" placeholder="ali@example.com" required />
                                </div>

                                <div className="form-group">
                                    <label>Subject</label>
                                    <select className="form-input" required defaultValue="">
                                        <option value="" disabled>Select a topic</option>
                                        <option value="partner">Restaurant Partnership</option>
                                        <option value="ngo">NGO Registration</option>
                                        <option value="support">Technical Support</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Your Message</label>
                                    <textarea className="form-input" rows="5" placeholder="How can we help you?" required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-full mt-4" disabled={formStatus === 'submitting'}>
                                    {formStatus === 'submitting' ? 'Sending...' : (
                                        <>
                                            <Send size={18} /> Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;
