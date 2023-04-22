import { Routes, Route, useRoutes, Router } from 'react-router-dom';
import LogIn from './page/LogIn';
import Index from './page/Index';
import { Home } from './page/Home';
import { Register } from './page/Register';
import SearchFollowers from './page/SearchFollowers';
import Profile from './page/Profile';
import React, { useEffect, useState } from 'react';
import { ProtectedRoute } from './services/privateRoute';

// [NOTE]: Secrets in the vite and react app
// console.log('import.meta.env.VITE_FRONTEND_URL', import.meta.env.VITE_FRONTEND_URL);
// console.log('import.meta.env.VITE_BACKEND_URL', import.meta.env.VITE_BACKEND_URL);
// console.log(
//   'import.meta.env.SUPER_SECRET_NOT_PREFIXED',
//   import.meta.env.SUPER_SECRET_NOT_PREFIXED,
// );
export default function App(): any {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  const handleLoginSuccess = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('authToken', newToken);
  };
  const handleRegisterSuccess = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('authToken', newToken);
  };
  const isAuthenticated = Boolean(token);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<LogIn onLoginSuccess={handleLoginSuccess} />} />
      <Route
        path="/register"
        element={<Register onRegisterSucces={handleRegisterSuccess} />}
      />
      <Route
        path="/home/*"
        element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
      >
        <Route index element={<Home />} />
      </Route>
      <Route
        path="/search/*"
        element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
      >
        <Route index element={<SearchFollowers />} />
      </Route>
      <Route
        path="/profile/*"
        element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
      >
        <Route index element={<Profile />} />
      </Route>
    </Routes>
  );
}
