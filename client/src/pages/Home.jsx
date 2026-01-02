import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  const navigate = useNavigate();

  // get logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="home-container">
      {/* ---------- HERO / INTRO ---------- */}
      <section className="home-hero">
        <h1>🏏 Aryabhata Cricket Lovers</h1>

        {user && (
          <div className="welcome-box">
            <h2>
              Welcome, <span>{user.name}</span> 👋
            </h2>
            <p>
              Proud to have you here. Let’s celebrate cricket, brotherhood,
              and success together.
            </p>
          </div>
        )}

        <p className="hero-subtext">
          More than a group — memories, cricket, friendships, and celebrations
          that last forever.
        </p>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="home-about">
        <h2>About Our Group</h2>
        <p>
          We are a group of hostel mates bonded by cricket, late-night talks,
          struggles, placements, and celebrations. This space is created to
          manage our memories and party plans in one place.
        </p>
      </section>

      {/* ---------- GROUP PHOTOS ---------- */}
      <section className="home-gallery">
        <h2>Our Moments</h2>

        <div className="gallery-grid">
          <img src="https://groupphoto2.edgeone.app/IMG-20250614-WA0077.jpg" alt="Group moment 1" />
          <img src="https://groupphoto1.edgeone.app/IMG-20250614-WA0058.jpg" alt="Group moment 2" />
          <img src="https://groupphoto3.edgeone.app/IMG-20250614-WA0127.jpg" alt="Group moment 3" />
           <img src="https://groupphoto4.edgeone.app/IMG-20240814-WA0012.jpg" alt="Group moment 1" />
          <img src="https://groupphoto5.edgeone.app/IMG-20260101-WA0014.jpg" alt="Group moment 2" />
          <img src="https://groupphoto6.edgeone.app/IMG-20260101-WA0013.jpg" alt="Group moment 3" />
           <img src="https://groupphoto7.edgeone.app/IMG-20260101-WA0015.jpg" alt="Group moment 1" />
          <img src="https://groupphoto8.edgeone.app/IMG-20251205-WA0036.jpg" alt="Group moment 2" />
          <img src="https://groupphoto9.edgeone.app/IMG-20251027-WA0008.jpg" alt="Group moment 3" />
          <img src="https://groupphoto10.edgeone.app/IMG-20250614-WA0123.jpg" alt="Group moment 3" />
          <img src="https://groupphoto11.edgeone.app/IMG-20250602-WA0010.jpg" alt="Group moment 3" />
          <img src="https://groupphoto12.edgeone.app/IMG-20251124-WA0066.jpg" alt="Group moment 3" />


        </div>
      </section>

      {/* ---------- ACTION BUTTONS ---------- */}
      <div className="home-actions">
        <button onClick={() => navigate("/dashboard")}>
          View Members
        </button>

        <button onClick={() => navigate("/register")}>
          Register Placement
        </button>
      </div>
    </div>
  );
};

export default Home;
