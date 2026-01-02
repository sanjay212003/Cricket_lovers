import "../css/terms.css";
import React from "react";


const Terms = () => {
  return (
    <div className="terms-container">
      <h1>📜 Terms & Conditions</h1>

      <p className="terms-intro">
        These terms are created for the internal use of Aryabhata Cricket Lovers.
        They can be modified anytime based on group decisions.
      </p>

      <div className="terms-box">
        <h2>General Rules</h2>
        <ul>
          <li>Only Aryabhata Cricket Lovers group members can access this site.</li>
          <li>Placement details shared should be genuine.</li>
          <li>Party rules are decided by placement band.</li>
        </ul>
      </div>

      <div className="terms-box">
        <h2>Party Rules</h2>
        <ul>
          <li>Band 1 placements → Party in Hotel 1.</li>
          <li>Band 2 placements → Party in Hostel 2.</li>
          <li>Band 3 placements → Party in Hotel 3.</li>
        </ul>
      </div>

      <div className="terms-box">
        <h2>Disclaimer</h2>
        <p>
          This website is built only for fun, memories, and internal coordination.
          It is not a commercial or official platform.
        </p>
      </div>

      <p className="terms-note">
        ⚠️ Note: Replace this content with your final group-approved rules.
      </p>
    </div>
  );
};

export default Terms;
