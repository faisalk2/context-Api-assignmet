
import './App.css';
import { useContext } from 'react';
import React from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Footer from './components/Footer';
import LoginStatus from './components/LoginStatus';

function App() {
  const {theme}=useContext(ThemeContext)
  return (
    <div className={`App ${theme==="light" ? "light":"dark"}`}>
      <LoginStatus/>
     <Navbar/>
     <Form/>
     <Footer/>
    </div>
  );
}

export default App;
