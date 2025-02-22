import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2 className="newsletter-title">
              <span style={{ fontWeight: 400 }}>SUBSCRIBE OUR </span>
              NEWSLETTER
            </h2>
            <p className="newsletter-description">
              Join our newsletter to stay on top of current
              <br />
              information and events.
            </p>
          </div>
          <form className="newsletter-form">
            <label htmlFor="email" className="visually-hidden">Email address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="newsletter-image">
          <div className="image-container">
            <div className="image-wrapper">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4eb6eed545e14321eade99781e6d1426c7101b1cb69242e46768766a03ba605?placeholderIfAbsent=true&apiKey=d7fdf129aacf40d1a5b25f2e0fdc66ab"
                alt="Newsletter illustration"
                className="newsletter-icon"
              />
              <div className="image-text">image</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;