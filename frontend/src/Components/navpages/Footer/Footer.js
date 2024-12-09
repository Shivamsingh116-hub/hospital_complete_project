// Footer.js
import React from 'react';
import './Footer.css'; // Import CSS file for styling
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We provide top-quality healthcare services to ensure your well-being.</p>
        </div>

        <div className="footer-section">
          <h4>Contact Information</h4>
          <ul>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@hospital.com</li>
            <li>Address: 123 Hospital St., Health City, HC 12345</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><XIcon/></a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Medical Care 24*7. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
