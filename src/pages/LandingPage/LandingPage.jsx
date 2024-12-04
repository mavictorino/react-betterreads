import React from 'react';
import { Container, Title, Text, Image, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import './LandingPage.css';


const LandingPage = () => {
    return (
      <div className="landing-container">
        <header className="landing-header">
          <h1>Welcome to BetterReads!</h1>
          <p>Discover, save, and rate your favorite books. Your ultimate book journey starts here!</p>
          <div className="button-group">
            <button className="custom-button">
              <Link to="/home">Start Exploring</Link>
            </button>
            <button className="custom-button">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
        </header>
        <div className="landing-image-container">
          <img
            src="../public/books.jpg"
            alt="Landing illustration"
            className="landing-image"
          />
        </div>
      </div>
    );
  };
  
  export default LandingPage;