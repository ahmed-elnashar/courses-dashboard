import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';
import RequireAuth from './auth/RequireAuth';
import './App.css';

function App() {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const Auth = RequireAuth(Dashboard);

  const Home = () => (
    <>
      <Sidebar />
      <Container stickyNav={<Navbar />} content={<Auth />} />
    </>
  );
  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          {!loggedIn &&
            <Route path='/' element={<Login />} />
          }
          {loggedIn &&
            <Route path='/*' element={<Home />} />
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
