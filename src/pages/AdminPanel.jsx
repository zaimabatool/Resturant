import React, { useState, useEffect } from 'react';
import { Package, UtensilsCrossed, HeartHandshake, CheckCircle2, History } from 'lucide-react';
import './AdminPanel.css';

function AdminPanel() {
    const [feed, setFeed] = useState([]);
    const [stats, setStats] = useState({
        totalDonations: 0,
        totalClaimed: 0,
        uniqueRestaurants: 0,
        uniqueNgos: 0
    });

    useEffect(() => {
        // Fetch global data from mock storage
        const globalFeed = JSON.parse(localStorage.getItem('global_feed')) || [];
        setFeed(globalFeed);

        // Calculate Statistics
        const claimedCount = globalFeed.filter(f => f.status === 'Claimed').length;
        const restaurants = new Set(globalFeed.map(f => f.restaurantName));
        const ngos = new Set(globalFeed.filter(f => f.status === 'Claimed').map(f => f.claimedBy).filter(Boolean));

        setStats({
            totalDonations: globalFeed.length,
            totalClaimed: claimedCount,
            uniqueRestaurants: restaurants.size,
            uniqueNgos: ngos.size
        });
    }, []);

    return (
        <div className="admin-dashboard container animate-fade-in">
            <div className="dashboard-visual-header glass mb-4">
                <div className="header-text-content">
                    <h1 className="dashboard-title">System Administrator Dashboard</h1>
                    <p className="text-muted">Master overview of all food rescue operations across Karachi.</p>
                </div>
                <div className="header-chart-container glass p-4 rounded-lg">
                    <h3 className="chart-title mb-3">Donation vs Delivery Progress</h3>
                    <div className="chart-wrapper">
                        <div className="chart-bar-group">
                            <div className="chart-label-row">
                                <span>Total Donated</span>
                                <span className="text-primary font-bold">{stats.totalDonations}</span>
                            </div>
                            <div className="chart-bar-bg">
                                <div className="chart-bar-fill primary" style={{ width: `${stats.totalDonations > 0 ? 100 : 0}%` }}></div>
                            </div>
                        </div>
                        <div className="chart-bar-group mt-3">
                            <div className="chart-label-row">
                                <span>Successfully Delivered</span>
                                <span className="text-secondary font-bold">{stats.totalClaimed}</span>
                            </div>
                            <div className="chart-bar-bg">
                                <div className="chart-bar-fill secondary" style={{ width: `${stats.totalDonations > 0 ? (stats.totalClaimed / stats.totalDonations) * 100 : 0}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Statistics Cards */}
            <div className="stats-grid">
                <div className="card stat-card">
                    <div className="stat-icon" style={{ background: 'rgba(52, 211, 153, 0.1)', color: 'var(--color-primary-light)' }}>
                        <Package size={28} />
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalDonations}</h3>
                        <p>Total Donations</p>
                    </div>
                </div>
                <div className="card stat-card">
                    <div className="stat-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--color-secondary)' }}>
                        <CheckCircle2 size={28} />
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalClaimed}</h3>
                        <p>Successfully Claimed</p>
                    </div>
                </div>
                <div className="card stat-card">
                    <div className="stat-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa' }}>
                        <UtensilsCrossed size={28} />
                    </div>
                    <div className="stat-content">
                        <h3>{stats.uniqueRestaurants}</h3>
                        <p>Active Restaurants</p>
                    </div>
                </div>
                <div className="card stat-card">
                    <div className="stat-icon" style={{ background: 'rgba(167, 139, 250, 0.1)', color: '#c084fc' }}>
                        <HeartHandshake size={28} />
                    </div>
                    <div className="stat-content">
                        <h3>{stats.uniqueNgos}</h3>
                        <p>Supported NGOs</p>
                    </div>
                </div>
            </div>

            {/* Full History Table */}
            <div className="history-section card mb-8">
                <div className="history-header">
                    <h2><History size={20} className="inline-icon" /> Donation Log & History</h2>
                </div>

                <div className="table-container">
                    <table className="history-table">
                        <thead>
                            <tr>
                                <th>ID / Date</th>
                                <th>Source (Restaurant)</th>
                                <th>Food Details</th>
                                <th>Status</th>
                                <th>Destination (NGO)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feed.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center text-muted" style={{ padding: '2rem' }}>
                                        No operations recorded yet.
                                    </td>
                                </tr>
                            ) : (
                                [...feed].reverse().map((item, index) => (
                                    <tr key={item.id || index}>
                                        <td>
                                            <div className="text-sm">{item.timestamp}</div>
                                        </td>
                                        <td className="font-medium text-primary">
                                            {item.restaurantName || 'Unknown'}
                                        </td>
                                        <td className="food-details-cell">
                                            {item.image && (
                                                <div className="table-thumbnail">
                                                    <img src={item.image} alt="Food" />
                                                </div>
                                            )}
                                            <div>
                                                <div>{item.name}</div>
                                                <div className="text-sm text-muted">{item.quantity}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`status-badge ${item.status.toLowerCase()}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="font-medium text-secondary">
                                            {item.status === 'Claimed' ? (item.claimedBy || 'Unknown NGO') : '-'}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;
