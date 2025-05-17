import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import DashboardLayout from './components/DashboardLayout';
import Trips from './components/Trips';
import Discover from './components/Discover';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="trips" element={<Trips />} />
          <Route path="discover" element={<Discover />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route index element={<Navigate to="trips" replace />} />
        </Route>

        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;