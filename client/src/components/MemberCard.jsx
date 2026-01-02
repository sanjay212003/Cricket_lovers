import "../css/members.css";
import React from "react";


const MemberCard = ({ member }) => {
  return (
    <div className="member-card">
      <img src={member.photo} alt={member.name} />

      <div className="member-overlay">
        <h3>{member.name}</h3>

        <div className="social-icons">
          <a href={member.linkedin} target="_blank">in</a>
          <a href={member.instagram} target="_blank">ig</a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
