import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="contact-column">
            <div className="contact-info">
              <h3 className="contact-title">CONTACT</h3>
              <p className="contact-email">Email: boarding@gmail.com</p>
              <p className="contact-phone">Phone: +123-456-7890</p>
            </div>
          </div>
          <div className="social-column">
            <h3 className="social-title">SOCIALS</h3>
            {/* Add social media links here */}
          </div>
        </div>
      </div>
      <p className="copyright">
        © 2025 Safari Booking System. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;