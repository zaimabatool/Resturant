import React, { useState, useEffect } from 'react';
import { Package, Clock, MapPin, Building2, CheckCircle2, Trash2 } from 'lucide-react';
import './NgoPanel.css';

function NgoPanel() {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        fetchFeed();
    }, []);

    const fetchFeed = () => {
        // In actual implementation, this fetches from backend
        const globalFeed = JSON.parse(localStorage.getItem('global_feed')) || [];
        setFeed(globalFeed);
    };

    const handleClaim = (id) => {
        const mockNgoName = "JDC Welfare Organization"; // Default mock NGO claiming the food

        // Optimistic UI update
        const updatedFeed = feed.map(item =>
            item.id === id ? { ...item, status: 'Claimed', claimedBy: mockNgoName } : item
        );
        setFeed(updatedFeed);

        // Save to global feed
        localStorage.setItem('global_feed', JSON.stringify(updatedFeed));

        // Also update the restaurant's local storage items (Mock backend logic)
        const restaurantFoods = JSON.parse(localStorage.getItem('restaurant_foods')) || [];
        const updatedRestaurantFoods = restaurantFoods.map(item =>
            item.id === id ? { ...item, status: 'Claimed', claimedBy: mockNgoName } : item
        );
        localStorage.setItem('restaurant_foods', JSON.stringify(updatedRestaurantFoods));
    };

    const handleRemoveFood = (id) => {
        // Remove from global feed
        const updatedFeed = feed.filter(item => item.id !== id);
        setFeed(updatedFeed);
        localStorage.setItem('global_feed', JSON.stringify(updatedFeed));

        // Also remove from restaurant local storage to keep it synced
        const restaurantFoods = JSON.parse(localStorage.getItem('restaurant_foods')) || [];
        const updatedRestaurantFoods = restaurantFoods.filter(item => item.id !== id);
        localStorage.setItem('restaurant_foods', JSON.stringify(updatedRestaurantFoods));
    };

    return (
        <div className="ngo-dashboard container animate-fade-in">
            <div className="dashboard-header">
                <div>
                    <h1 className="dashboard-title">Orphanage & NGO Feed</h1>
                    <p className="text-muted">Available food donations in across Karachi.</p>
                </div>
            </div>

            <div className="feed-grid grid">
                {feed.length === 0 ? (
                    <div className="empty-state card text-center">
                        <Package size={48} className="text-muted mb-4 mx-auto" style={{ margin: '0 auto', marginBottom: '1rem', display: 'block' }} />
                        <h3>No Food Available Right Now</h3>
                        <p className="text-muted">Restaurants haven't uploaded any surplus food yet. Please check back later.</p>
                    </div>
                ) : (
                    feed.map(item => (
                        <div key={item.id} className={`card food-card p-0 ${item.status === 'Claimed' ? 'claimed-card' : ''}`}>
                            {item.image && (
                                <div className="food-image-wrapper">
                                    <img src={item.image} alt={item.name} className="food-image" />
                                </div>
                            )}
                            <div className="food-card-content">
                                <div className="food-card-header">
                                    <div>
                                        <h3>{item.name}</h3>
                                        <div className="restaurant-badge">
                                            <Building2 size={14} /> {item.restaurantName || 'Restaurant'}
                                        </div>
                                    </div>
                                    <span className={`status-badge ${item.status.toLowerCase()}`}>{item.status}</span>
                                </div>

                                <div className="food-card-body mt-4">
                                    <p><Package size={16} /> <strong>Quantity:</strong> {item.quantity}</p>
                                    <p><Clock size={16} /> <strong>Expires:</strong> {item.expiry}</p>
                                    <p className="text-muted text-sm mt-3">Posted: {item.timestamp}</p>
                                </div>

                                <div className="food-card-actions" style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {item.status === 'Available' ? (
                                        <button
                                            className="btn btn-primary w-full"
                                            onClick={() => handleClaim(item.id)}
                                        >
                                            Claim This Food
                                        </button>
                                    ) : (
                                        <div className="claimed-message w-full text-center">
                                            <CheckCircle2 size={18} />
                                            <span>You have claimed this donation</span>
                                        </div>
                                    )}
                                    <button
                                        className="btn btn-outline"
                                        style={{ width: '100%', borderColor: 'var(--color-danger)', color: 'var(--color-danger)' }}
                                        onClick={() => handleRemoveFood(item.id)}
                                    >
                                        <Trash2 size={16} /> Remove Food
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default NgoPanel;
