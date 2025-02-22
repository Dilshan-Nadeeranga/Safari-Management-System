import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Stay Closer, Explore Wilder - Your Perfect Safari Adventure Awaits
        </h1>
        <div className="background-image">background image</div>
      </div>
      <p className="hero-description">
        Find safari lodges and camps near your favorite national parks
        instantly! <br />
        Use our filters to select location, accommodation type, and
        budget—no more endless scrolling
      </p>
      <form className="search-form">
        <div className="search-inputs">
          <div className="input-group">
            <label htmlFor="location" className="input-label">Location *</label>
            <input
              id="location"
              type="text"
              className="input-field"
              placeholder="Enter City or Park Name"
            />
          </div>
          <div className="accommodation-group">
            <label htmlFor="accommodation" className="accommodation-label">Accommodation Type</label>
            <div className="accommodation-select">
              <select id="accommodation" className="select-text">
                <option value="">Select Accommodation Type</option>
              </select>
              <div className="select-arrow">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cf233b0d72fedcea667a3f28409c57778a503ca185a81efbfe91e1c4899cf01?placeholderIfAbsent=true&apiKey=d7fdf129aacf40d1a5b25f2e0fdc66ab"
                  alt="Down arrow"
                  className="arrow-icon"
                />
              </div>
            </div>
          </div>
          <div className="all-option">All</div>
        </div>
        <div className="search-buttons">
          <div className="search-arrow">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cf233b0d72fedcea667a3f28409c57778a503ca185a81efbfe91e1c4899cf01?placeholderIfAbsent=true&apiKey=d7fdf129aacf40d1a5b25f2e0fdc66ab"
              alt="Down arrow"
              className="arrow-icon"
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cedead1e5b0a6ae4096a06a1e54f94ff0870f1a814459a454aaa92f03effe069?placeholderIfAbsent=true&apiKey=d7fdf129aacf40d1a5b25f2e0fdc66ab"
            alt="Search"
            className="search-icon"
          />
        </div>
      </form>
    </section>
  );
};

export default HeroSection;