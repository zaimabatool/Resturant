import React, { useState, useEffect } from 'react';
import { PlusCircle, Clock, Package, Trash2 } from 'lucide-react';
import './RestaurantPanel.css';

function RestaurantPanel() {
    const [foods, setFoods] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Dummy data or fetch from local storage
    useEffect(() => {
        const savedFoods = JSON.parse(localStorage.getItem('restaurant_foods')) || [];
        setFoods(savedFoods);
    }, []);

    const getFoodImage = (foodName) => {
        const name = foodName.toLowerCase();

        // Biryani & Rice
        if (name.includes('biryani') || name.includes('pulao') || name.includes('chalaw') || name.includes('fried rice') || name.includes('mandi')) return 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800';

        // Desi Gravies & Meat
        if (name.includes('karahi') || name.includes('qorma') || name.includes('handi') || name.includes('nihari') || name.includes('haleem') || name.includes('shinwari') || name.includes('mutton') || name.includes('chicken')) return 'https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&q=80&w=800';
        if (name.includes('tikkah') || name.includes('bbq') || name.includes('boti') || name.includes('kebab') || name.includes('seekh') || name.includes('malai')) return 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800';
        if (name.includes('chana') || name.includes('cholay') || name.includes('lobia')) return 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800';
        if (name.includes('saag') || name.includes('palak')) return 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=800';
        if (name.includes('daal') || name.includes('dal') || name.includes('lentil') || name.includes('chawal')) return 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800';

        // Breads
        if (name.includes('bread') || name.includes('roti') || name.includes('naan') || name.includes('paratha') || name.includes('puri') || name.includes('kulcha')) return 'https://images.unsplash.com/photo-1596372439589-9b4862534ce6?auto=format&fit=crop&q=80&w=800';

        // Fast Food / Street Food
        if (name.includes('burger') || name.includes('slider') || name.includes('zinger')) return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800';
        if (name.includes('pizza') || name.includes('calzone')) return 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800';
        if (name.includes('broast') || name.includes('fried chicken') || name.includes('nugget') || name.includes('wings')) return 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800';
        if (name.includes('sandwich') || name.includes('club')) return 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800';
        if (name.includes('roll') || name.includes('shawarma') || name.includes('wrap')) return 'https://images.unsplash.com/photo-1626804475297-4160baea0a4beb?auto=format&fit=crop&q=80&w=800';
        if (name.includes('fries') || name.includes('chips')) return 'https://images.unsplash.com/photo-1576107232684-1279f3908581?auto=format&fit=crop&q=80&w=800';
        if (name.includes('samosa') || name.includes('pakora') || name.includes('kachori') || name.includes('chaat') || name.includes('gol gappay')) return 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800';

        // Chinese / Continental / Pasta
        if (name.includes('macaroni') || name.includes('pasta') || name.includes('spaghetti') || name.includes('lasagna')) return 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800';
        if (name.includes('chinese') || name.includes('chow mein') || name.includes('noodles') || name.includes('manchurian') || name.includes('shashlik') || name.includes('soup')) return 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800';
        if (name.includes('steak') || name.includes('beef')) return 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800';

        // Seafood
        if (name.includes('fish') || name.includes('prawn') || name.includes('seafood') || name.includes('shrimp')) return 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800';

        // Sweets & Desserts
        if (name.includes('sweet') || name.includes('dessert') || name.includes('cake') || name.includes('kheer') || name.includes('halwa') || name.includes('gulab') || name.includes('jalebi') || name.includes('ice cream') || name.includes('mithai')) return 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800';

        // Breakfast & Drinks
        if (name.includes('egg') || name.includes('omelette') || name.includes('anda')) return 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800';
        if (name.includes('salad')) return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800';
        if (name.includes('drink') || name.includes('juice') || name.includes('shake') || name.includes('chai') || name.includes('tea') || name.includes('coffee')) return 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800';

        // Reliable Random Food Image Fallbacks based on ID string length (pseudo-random, avoids all default items sharing same image)
        const defaults = [
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', // Assorted fresh food
            'https://images.unsplash.com/photo-1490818387583-1b5f2220984e?auto=format&fit=crop&q=80&w=800', // Healthy spread
            'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=800', // Dinner gathering setup
            'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=800', // Rustic hearty meal
            'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800'  // General cooking ingredients/prepared dish
        ];

        const randomIndex = name.length % defaults.length;
        return defaults[randomIndex];
    };

    const handleAddFood = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const foodName = formData.get('name');

        // Determine image URL or use user provided one
        const userProvidedImage = formData.get('image');
        const finalImage = userProvidedImage && userProvidedImage.trim() !== ''
            ? userProvidedImage
            : getFoodImage(foodName);

        const newFood = {
            id: Date.now(),
            name: foodName,
            quantity: formData.get('quantity'),
            expiry: formData.get('expiry'),
            image: finalImage,
            status: 'Available',
            timestamp: new Date().toLocaleString()
        };

        // Save state
        const updatedFoods = [newFood, ...foods];
        setFoods(updatedFoods);
        localStorage.setItem('restaurant_foods', JSON.stringify(updatedFoods));

        // Also push to global feed for NGOs
        const globalFeed = JSON.parse(localStorage.getItem('global_feed')) || [];
        globalFeed.push({ ...newFood, restaurantName: 'Karachi Biryani House' }); // Mock name
        localStorage.setItem('global_feed', JSON.stringify(globalFeed));

        setShowModal(false);
    };

    const handleRemoveFood = (id) => {
        // Remove from restaurant local state
        const updatedFoods = foods.filter(food => food.id !== id);
        setFoods(updatedFoods);
        localStorage.setItem('restaurant_foods', JSON.stringify(updatedFoods));

        // Remove from global feed for NGOs
        const globalFeed = JSON.parse(localStorage.getItem('global_feed')) || [];
        const updatedGlobalFeed = globalFeed.filter(food => food.id !== id);
        localStorage.setItem('global_feed', JSON.stringify(updatedGlobalFeed));
    };

    return (
        <div className="dashboard container animate-fade-in">
            <div className="dashboard-header">
                <div>
                    <h1 className="dashboard-title">Restaurant Dashboard</h1>
                    <p className="text-muted">Manage and upload your surplus food.</p>
                </div>
                <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                    <PlusCircle size={20} />
                    <span>Add Food</span>
                </button>
            </div>

            <div className="food-list grid">
                {foods.length === 0 ? (
                    <div className="empty-state card text-center">
                        <Package size={48} className="text-muted mb-4 mx-auto" style={{ margin: '0 auto', marginBottom: '1rem', display: 'block' }} />
                        <h3>No Food Listed Yet</h3>
                        <p className="text-muted">You haven't uploaded any surplus food. Click 'Add Food' to get started.</p>
                    </div>
                ) : (
                    foods.map(food => (
                        <div key={food.id} className="card food-card p-0">
                            {food.image && (
                                <div className="food-image-wrapper">
                                    <img src={food.image} alt={food.name} className="food-image" />
                                </div>
                            )}
                            <div className="food-card-content">
                                <div className="food-card-header">
                                    <h3>{food.name}</h3>
                                    <span className={`status-badge ${food.status.toLowerCase()}`}>{food.status}</span>
                                </div>
                                <div className="food-card-body mt-3">
                                    <p><Package size={16} /> {food.quantity}</p>
                                    <p><Clock size={16} /> Expires: {food.expiry}</p>
                                    <p className="text-muted text-sm mt-2">Added: {food.timestamp}</p>
                                </div>
                                <div className="food-card-actions mt-4">
                                    <button
                                        className="btn btn-outline"
                                        style={{ width: '100%', borderColor: 'var(--color-danger)', color: 'var(--color-danger)' }}
                                        onClick={() => handleRemoveFood(food.id)}
                                    >
                                        <Trash2 size={16} /> Remove Food
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal card glass">
                        <h2>Add Surplus Food</h2>
                        <form onSubmit={handleAddFood} className="modal-form">
                            <div className="form-group">
                                <label>Food Item / Description</label>
                                <input type="text" name="name" className="form-input" placeholder="e.g. 5kg Chicken Biryani" required />
                            </div>
                            <div className="form-group">
                                <label>Estimated Quantity / People it can serve</label>
                                <input type="text" name="quantity" className="form-input" placeholder="e.g. Serves 15 people" required />
                            </div>
                            <div className="form-group">
                                <label>Safe to consume until</label>
                                <input type="time" name="expiry" className="form-input" required />
                            </div>
                            <div className="form-group">
                                <label>Image URL (Optional)</label>
                                <input type="url" name="image" className="form-input" placeholder="https://source.unsplash.com/..." />
                            </div>
                            <div className="modal-actions">
                                <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary">List Food</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RestaurantPanel;
