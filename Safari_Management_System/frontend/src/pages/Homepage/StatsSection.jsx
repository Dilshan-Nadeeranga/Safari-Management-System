import React from 'react';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-column">
          <div className="stats-grid">
            <div className="stats-row">
              <div className="stat-item">Year of Service</div>
              <div className="stat-item-alt">Happy Travelers </div>
            </div>
            <div className="stats-row">
              <div className="stat-item">Verified Listings </div>
              <div className="stat-item-alt">
                National Parks Covered
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="info-column">
          <div className="info-content">
            <h2 className="info-title">
              Find Your Ideal <br />
              Safari Accommodation
            </h2>
            <p className="info-description">
              We make it easy for adventurers to find affordable and
              comfortable
              <br />
              lodging near their favorite national parks. Browse verified
              listings
              <br />
              and secure your home in the wild in just a few clicks.
            </p>
            <button className="rate-button">Rate Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;