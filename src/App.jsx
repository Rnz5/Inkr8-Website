import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// Pages
import Login from './pages/Login';
import Home from './pages/Home';
import Practice from './pages/Practice';
import Writing from './pages/Writing';
import Results from './pages/Results';

function AppLayout() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

function PageTitle({ title }) {
  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>{title}</h1>
      <p style={{ color: 'var(--text-secondary)' }}>Welcome to your {title.toLowerCase()} panel.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="practice" element={<Practice />} />
          <Route path="practice/write" element={<Writing />} />
          <Route path="practice/results" element={<Results />} />
          
          <Route path="profile" element={<PageTitle title="Profile" />} />
          <Route path="settings" element={<PageTitle title="Settings" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
