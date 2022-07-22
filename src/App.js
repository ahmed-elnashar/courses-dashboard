import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Sidebar from './components/Sidebar/Sidebar';
import Container from './components/Container/Container';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Sidebar />
        <Container stickyNav={<Navbar />} content={<Dashboard />} />
      </div>
    </Provider>
  );
}

export default App;
