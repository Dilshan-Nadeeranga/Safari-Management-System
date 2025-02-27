import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Componets/CSS/Profile.css"; // Import external CSS

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    lname: "",
    gender: "",
    phone1: "",
    phone2: "",
    email: "",
    profilePicture: "",
  });
//Dilshan nadeeranga
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/LoginForm");
    } else {
      setUser(storedUser);
      setUpdatedUser(storedUser);
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8070/customerRoutes/update/${user._id}`,
        updatedUser
      );
      if (response.status === 200) {
        alert("Profile updated successfully!");
        setUser(response.data.updatedUser);
        localStorage.setItem("user", JSON.stringify(response.data.updatedUser));
        setEditMode(false);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update profile.");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await axios.delete(`http://localhost:8070/customerRoutes/delete/${user._id}`);
        alert("Account deleted successfully!");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/Homepage");
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete account.");
      }
    }
  };

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="profile-header">
        <div className="logo">SafariGo</div>
        <nav className="profile-nav">
          <a href="/UserHomepage">Home</a>
          <a href="/discover">Discover</a>
          <a href="/activities">Activities</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        {/*<button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            navigate("/LoginForm");
          }}
        >
          Logout
        </button>*/}
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Two-Column Layout */}
        <div className="two-column-layout">
          {/* Left Column: User Information */}
          <section className="user-information">
            <h2>User Information</h2>
            <div className="user-info-form">
              <div className="form-group">
                <label htmlFor="name">First Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={updatedUser.name}
                  onChange={handleInputChange}
                  disabled={!editMode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last Name:</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={updatedUser.lname}
                  onChange={handleInputChange}
                  disabled={!editMode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={updatedUser.gender}
                  onChange={handleInputChange}
                  disabled={!editMode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone1">Phone 1:</label>
                <input
                  type="text"
                  id="phone1"
                  name="phone1"
                  value={updatedUser.phone1}
                  onChange={handleInputChange}
                  disabled={!editMode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone2">Phone 2:</label>
                <input
                  type="text"
                  id="phone2"
                  name="phone2"
                  value={updatedUser.phone2}
                  onChange={handleInputChange}
                  disabled={!editMode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={updatedUser.email}
                  onChange={handleInputChange}
                  disabled
                />
              </div>
              <div className="form-buttons">
                {editMode ? (
                  <>
                    <button className="save-btn" onClick={handleUpdate}>
                      Save
                    </button>
                    <button className="cancel-btn" onClick={() => setEditMode(false)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button className="edit-btn" onClick={() => setEditMode(true)}>
                    Edit
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Right Column: My Trips */}
          <section className="user-trips">
            <h2>My Trips</h2>
            <div className="trip-card">
              <div className="trip-info">
                <div className="trip-rating">
                  <span>⭐⭐⭐⭐ 4.5 (1200 Reviews)</span>
                </div>
                <div className="trip-details">
                  <p>Non refundable</p>
                  <p>Date: 26th March 2025</p>
                  <p>Duration: Full day</p>
                </div>
                <div className="trip-price">
                  <span>⭐⭐⭐⭐ 1,200</span>
                  <p>Includes taxes and fees</p>
                </div>
              </div>
              <div className="trip-actions">
                <button className="delete-btn">Delete</button>
                <button className="update-btn">Update</button>
                <button className="view-btn">View Safari Details</button>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SafariGo</h3>
              <p>
                We are dedicated to making safari bookings seamless and transparent. We connect
                travelers with trusted safari operators, ensuring a hassle-free and fair-priced
                wildlife experience.
              </p>
            </div>
            <div className="footer-section">
              <h3>Links</h3>
              <ul>
                <li><a href="/discover">Discover</a></li>
                <li><a href="/special-deals">Special Deals</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/community">Community</a></li>
                <li><a href="/about">About Us</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>Address: No.2, Flower Road, Colombo 03</p>
              <p>Phone: 010540321</p>
              <p>Email: safarigo@gmail.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 SafariGo. All rights reserved.</p>
            <div className="footer-links">
              <a href="/terms">Terms and Conditions</a>
              <a href="/privacy">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default UserProfile;