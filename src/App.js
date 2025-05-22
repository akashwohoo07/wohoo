// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import GoogleCallback from './components/GoogleCallback';
import DashboardLayout from './components/DashboardLayout';
import Trips from './components/Trips';
import Discover from './components/Discover';
import Wishlist from './components/Wishlist';

// Protected route component - redirects to login if not logged in
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Route that redirects logged-in users to dashboard
const PublicOnlyRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return children;
};

// Main application content
const AppContent = () => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="py-4">
          <Routes>
            {/* Home page - accessible to everyone, but redirects to dashboard if logged in */}
            <Route path="/" element={
              user ? <Navigate to="/dashboard" replace /> : <Home />
            } />
            
            {/* Login page - only accessible when logged out */}
            <Route path="/login" element={
              <PublicOnlyRoute>
                <Login />
              </PublicOnlyRoute>
            } />
            
            {/* Google OAuth callback route */}
            <Route path="/auth/google/callback" element={<GoogleCallback />} />
            
            {/* Discover page - accessible to everyone */}
            <Route path="/discover" element={<Discover />} />
            
            {/* Protected routes - require login */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            } />
            <Route path="/trips" element={
              <ProtectedRoute>
                <Trips />
              </ProtectedRoute>
            } />
            <Route path="/wishlist" element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            } />
            
            {/* Fallback route */}
            <Route path="*" element={
              user ? <Navigate to="/dashboard" replace /> : <Navigate to="/" replace />
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

// Main App component
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
