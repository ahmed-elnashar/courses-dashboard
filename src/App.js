import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Container from './components/Container/Container';

import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (

    <div className='App'>
      <Sidebar />
      <Container stickyNav={<Navbar />} content={ <Dashboard />} />
    </div>
  );
}

export default App;
