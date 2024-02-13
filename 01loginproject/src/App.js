import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './pages/Dashboard';
import { checkTokenLoader, tokenLoader } from './utils/authenticateToken';

function App() {
  // simulated authentication token
  // const isAuthenticated = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route exact path="/" loader={tokenLoader} element={<LoginForm />} />
        <Route path="/dashboard" loader={tokenLoader} element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
