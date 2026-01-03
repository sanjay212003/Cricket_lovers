import React from "react";
import "../css/members.css";

const partySchedulers = [
  {
    name: "Vicky",
    img: "https://vicky.edgeone.app/IMG-20260101-WA0008.jpg"
  },
  {
    name: "Sanjay",
    img: "https://sanju3.edgeone.app/IMG-20260101-WA0017.jpg"
  },
  {
    name: "Naveen",
    img: "https://naveen.edgeone.app/IMG_20260101_202947.jpg"
  },
  {
    name: "Akash Handi",
    img: "https://akashhandi.edgeone.app/IMG_20260101_203121.jpg"
  }
];

const membersList = [
  {
    name: "Shivaraj",
    img: "https://instasize.com/p/39d533b21fb68e169bc6c9ca423fe0c35328614bab7f7d9a7a0b9e0335f88c02"
  }
  // 👉 you can keep adding members here
];

const Members = () => {
  return (
    <div className="members-container">
      <h1>👥 Aryabhata Cricket Lovers</h1>

      {/* ---------- PARTY SCHEDULERS ---------- */}
      <section className="members-section">
        <h2>🎉 Party Schedulers</h2>

        <div className="scheduler-grid">
          {partySchedulers.map((member, index) => (
            <div className="scheduler-card" key={index}>
              <img src={member.img} alt={member.name} />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- MEMBERS ---------- */}
      <section className="members-section">
        <h2>👥 Members</h2>

        <div className="scheduler-grid">
          {membersList.map((member, index) => (
            <div className="scheduler-card" key={index}>
              <img src={member.img} alt={member.name} />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Members;
