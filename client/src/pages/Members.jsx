import React from "react";
import "../css/members.css";

const partySchedulers = [
  {
    name: "Vicky",
    img: "https://vicky.edgeone.app/IMG-20260101-WA0008.jpg"
  },
  {
    name: "Sanjay",
    img: "https://img.sanishtech.com/u/0bb289ce6dfaaba3baf6454939ededf9.jpeg"
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
    img: "https://img.sanishtech.com/u/86f6a01685c277d7e1c3ef7013a9bc78.jpeg"
  },
  {
    name: "Suhas",
    img: "https://img.sanishtech.com/u/b776ada4964dbcd2d03256086ccc000d.jpeg"
  },
  {
    name: "Bathinanna",
    img: "https://img.sanishtech.com/u/96b197482433546742a1b74b817ea3b9.jpeg"
  },
  {
    name: "Shivaprasad",
    img: "https://img.sanishtech.com/u/2e8f43533e9e5d14d976797f2c3bc75b.jpg"
  },
  {
    name: "Darshan Chouthayi",
    img: "https://img.sanishtech.com/u/8b8a2ae1ee490afa8b75df0a2a57509f.jpeg"
  },
  {
    name: "Akash Donge",
    img: "https://img.sanishtech.com/u/fe6db398fd4435b13d1a281d17024281.jpeg"
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
