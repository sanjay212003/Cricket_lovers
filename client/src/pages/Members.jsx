import React from "react";
import "../css/members.css";

const Members = () => {
  return (
    <div className="members-container">
      <h1>👥 Aryabhata Cricket Lovers</h1>

      {/* ---------- PARTY SCHEDULERS ---------- */}
      <section className="members-section">
        <h2>🎉 Party Schedulers</h2>

        <div className="scheduler-grid">
          <div className="scheduler-card">
            <img src="https://vicky.edgeone.app/IMG-20260101-WA0008.jpg" alt="Vicky" />
            <p>Vicky</p>
          </div>

          <div className="scheduler-card">
            <img src="https://sanju3.edgeone.app/IMG-20260101-WA0017.jpg" alt="Sanjay" />
            <p>Sanjay</p>
          </div>

          <div className="scheduler-card">
            <img src="https://naveen.edgeone.app/IMG_20260101_202947.jpg" alt="Naveen" />
            <p>Naveen</p>
          </div>

          <div className="scheduler-card">
            <img src="https://akashhandi.edgeone.app/IMG_20260101_203121.jpg" alt="Akash Handi" />
            <p>Akash Handi</p>
          </div>
        </div>
      </section>

      {/* ---------- MEMBERS ---------- */}
      <section className="members-section">
        <h2>👥 Members</h2>
        <p className="members-placeholder">
          Members list will be updated soon 🚧
        </p>
      </section>
    </div>
  );
};

export default Members;
