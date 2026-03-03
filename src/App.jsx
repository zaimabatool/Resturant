import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import RestaurantPanel from './pages/RestaurantPanel';
import NgoPanel from './pages/NgoPanel';
import AdminPanel from './pages/AdminPanel';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const isSeeded = localStorage.getItem('is_seeded');
    if (!isSeeded) {
      const dummyGlobalFeed = [
        {
          id: 1,
          name: '10kg Chicken Biryani',
          quantity: 'Serves 30 people',
          expiry: '23:00',
          status: 'Available',
          timestamp: new Date().toLocaleString(),
          restaurantName: 'Karachi Biryani House',
          image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop'
        },

        {
          id: 3,
          name: 'White Chicken Karahi',
          quantity: 'Serves 40 people',
          expiry: '18:00',
          status: 'Available',
          timestamp: new Date().toLocaleString(),
          restaurantName: 'Cafe Clifton',
          image: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?q=80&w=800&auto=format&fit=crop'
        },
        {
          id: 4,
          name: 'Grill Chicken Pieces',
          quantity: 'Serves 20 people',
          expiry: '16:00',
          status: 'Available',
          timestamp: new Date(Date.now() - 3600000).toLocaleString(), // 1 hour ago
          restaurantName: 'Italian Oven DHA',
          image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=800&auto=format&fit=crop'
        },
        {
          id: 5,
          name: 'Fry Fish Platter',
          quantity: 'Serves 25 people',
          expiry: '20:00',
          status: 'Available',
          timestamp: new Date().toLocaleString(),
          restaurantName: 'Rashid Seafood',
          image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=800&auto=format&fit=crop'
        },
        {
          id: 6,
          name: 'Chicken Macaroni',
          quantity: 'Serves 18 people',
          expiry: '22:00',
          status: 'Available',
          timestamp: new Date().toLocaleString(),
          restaurantName: 'Ginsoy',
          image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=800&auto=format&fit=crop'
        },
        {
          id: 7,
          name: 'Authentic Beef Karahi',
          quantity: 'Serves 18 people',
          expiry: '22:00',
          status: 'Available',
          timestamp: new Date().toLocaleString(),
          restaurantName: 'Karachi Karahi Center',
          image: 'https://images.unsplash.com/photo-1542382156909-9ae37b3f56ce?q=80&w=800&auto=format&fit=crop'
        }
      ];

      const dummyRestaurantFoods = [
        dummyGlobalFeed[0], // Mock default restaurant is Karachi Biryani House
        dummyGlobalFeed[3] // Another mock active item for user testing
      ];

      localStorage.setItem('global_feed', JSON.stringify(dummyGlobalFeed));
      localStorage.setItem('restaurant_foods', JSON.stringify(dummyRestaurantFoods));
      localStorage.setItem('is_seeded', 'true');
    }
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      <main style={{ flex: 1, marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/restaurant" element={<RestaurantPanel />} />
          <Route path="/ngo" element={<NgoPanel />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
