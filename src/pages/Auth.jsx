import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, HeartHandshake } from 'lucide-react';
import './Auth.css';

function Auth() {
    const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
    const [role, setRole] = useState('restaurant'); // 'restaurant' or 'ngo'
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, perform auth logic here. For now, simulate routing:
        if (role === 'restaurant') {
            navigate('/restaurant');
        } else {
            navigate('/ngo');
        }
    };

    return (
        <div className="auth-page animate-fade-in container">
            <div className="auth-container card glass">
                <h2 className="auth-title">
                    {activeTab === 'login' ? 'Welcome Back' : 'Create an Account'}
                </h2>

                <div className="auth-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
                        onClick={() => setActiveTab('login')}
                    >
                        Login
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
                        onClick={() => setActiveTab('register')}
                    >
                        Register
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="role-selector">
                        <p>I am a:</p>
                        <div className="role-options">
                            <label className={`role-card ${role === 'restaurant' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="role"
                                    value="restaurant"
                                    checked={role === 'restaurant'}
                                    onChange={() => setRole('restaurant')}
                                    className="sr-only"
                                />
                                <Building2 size={24} />
                                <span>Restaurant</span>
                            </label>
                            <label className={`role-card ${role === 'ngo' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="role"
                                    value="ngo"
                                    checked={role === 'ngo'}
                                    onChange={() => setRole('ngo')}
                                    className="sr-only"
                                />
                                <HeartHandshake size={24} />
                                <span>NGO / Orphanage</span>
                            </label>
                        </div>
                    </div>

                    {activeTab === 'register' && (
                        <div className="form-group">
                            <label>Organization Name</label>
                            <input type="text" className="form-input" placeholder="Enter name" required />
                        </div>
                    )}

                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" className="form-input" placeholder="Enter email" required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-input" placeholder="Enter password" required />
                    </div>

                    <button type="submit" className="btn btn-primary w-full mt-4">
                        {activeTab === 'login' ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Auth;
