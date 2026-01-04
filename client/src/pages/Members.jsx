import React from "react";
import "../css/members.css";

const partySchedulers = [
  {
    name: "Vicky",
    img: "https://vicky.edgeone.app/IMG-20260101-WA0008.jpg"
  },
  {
    name: "Sanjay",
    img: "https://raw.githubusercontent.com/sanjay212003/aryabhata-bois/main/sanjay.jpeg"
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
    img: "https://raw.githubusercontent.com/sanjay212003/aryabhata-bois/main/shivaraj.jpeg"
  },
  {
    name: "Suhas",
    img: "https://raw.githubusercontent.com/sanjay212003/aryabhata-bois/main/suhas.jpeg"
  },
  {
    name: "Bathinanna",
    img: "https://raw.githubusercontent.com/sanjay212003/aryabhata-bois/main/batthii.jpeg"
  },
  {
    name: "Shivaprasad",
    img: "https://raw.githubusercontent.com/sanjay212003/aryabhata-bois/main/shivaprasad.jpg"
  },
  {
    name: "Darshan Chouthayi",
    img: "https://raw.githubusercontent.com/sanjay212003/aryabhata-bois/main/chaoutayi.jpeg"
  },
  {
    name: "Akash Donge",
    img: "https://raw.githubusercontent.com/sanjay212003/aryabhata-bois/main/donge.jpeg"
  },
  {
    name: "Karthik",
    img: "https://raw.githubusercontent.com/sanjay212003/aryabhata-bois/main/karthik.jpeg"
  },
  {
    name: "Darshan",
    img: "https://raw.githubusercontent.com/sanjay212003/aryabhata-bois/main/darshan%20h%20s.jpg"
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
