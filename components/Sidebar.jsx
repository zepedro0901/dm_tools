import React from 'react';
import "../styles/Sidebar.styles.css"

const Sidebar = () => {
  return ( 
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar