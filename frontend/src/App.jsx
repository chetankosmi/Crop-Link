import React from 'react';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import './styles.css';

function App() {
  return (
    <MainLayout>
      <LandingPage />
    </MainLayout>
  );
}

export default App;
