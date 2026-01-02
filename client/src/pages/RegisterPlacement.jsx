import React, { useState } from "react";
import "../css/register.css";

const RegisterPlacement = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roomNumber: "",
    company: "",
    band: "",
    packageCTC: "",
    partyDate: "",
    isCricketMember: "",
    isHosteller: "",
    isGettingFacilities: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
      setMessage("❌ Please accept Terms & Conditions before registering.");
      return;
    }

    for (const key in formData) {
      if (formData[key] === "") {
        setMessage("❌ Please fill all fields.");
        return;
      }
    }

    try {
      const res = await fetch(`${API_URL}/api/placements/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setShowPopup(true);
        setMessage("");

        setFormData({
          name: "",
          email: "",
          roomNumber: "",
          company: "",
          band: "",
          packageCTC: "",
          partyDate: "",
          isCricketMember: "",
          isHosteller: "",
          isGettingFacilities: ""
        });

        setAcceptedTerms(false);
      } else {
        setMessage("❌ Failed to save registration.");
      }
    } catch (error) {
      setMessage("❌ Server error. Try again later.");
    }
  };

  return (
    <div className="register-container">
      <h1>🎉 Placement Party</h1>

      {/* ---------- BAND RULES ---------- */}
      <section className="info-box">
        <h2>📌 Party Rules (Based on Placement Band)</h2>
        <ul>
          <li>
            <strong>Band 1:</strong> Party should be arranged in <b>Naidu</b>
          </li>
          <li>
            <strong>Band 2:</strong> Party should be arranged in <b>Meghana's</b>
          </li>
          <li>
            <strong>Band 3:</strong> Party should be arranged in{" "}
            <b>Any star hotels / restaurants</b>
          </li>
        </ul>
      </section>

      {/* ---------- TERMS & CONDITIONS ---------- */}
      <section className="info-box">
        <h2>📜 Terms & Conditions</h2>
        <ul>
          <li>Party date must be finalized with group consent.</li>
          <li>Expenses should be handled by the placed member.</li>
          <li>All group members must be informed in advance.</li>
          <li>Rules may change based on group decisions.</li>
        </ul>

        <label className="terms-checkbox">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
          I have read and agree to the Terms & Conditions
        </label>
      </section>

      {/* ---------- REGISTRATION FORM ---------- */}
      <form
        className={`register-form ${!acceptedTerms ? "disabled" : ""}`}
        onSubmit={handleSubmit}
      >
        <h2>📝 Party Registration Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          disabled={!acceptedTerms}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          disabled={!acceptedTerms}
          required
        />

        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={formData.roomNumber}
          onChange={handleChange}
          disabled={!acceptedTerms}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          disabled={!acceptedTerms}
          required
        />

        <select
          name="band"
          value={formData.band}
          onChange={handleChange}
          disabled={!acceptedTerms}
          required
        >
          <option value="">Select Placement Band</option>
          <option value="Band 1">Band 1</option>
          <option value="Band 2">Band 2</option>
          <option value="Band 3">Band 3</option>
        </select>

        <input
          type="number"
          name="packageCTC"
          placeholder="Package (CTC in LPA)"
          value={formData.packageCTC}
          onChange={handleChange}
          disabled={!acceptedTerms}
          required
        />

        <label className="date-label">
          Party Date
          <input
            type="date"
            name="partyDate"
            value={formData.partyDate}
            onChange={handleChange}
            disabled={!acceptedTerms}
            required
          />
        </label>

        <select
          name="isCricketMember"
          value={formData.isCricketMember}
          onChange={handleChange}
          disabled={!acceptedTerms}
          required
        >
          <option value="">Member of Cricket Group?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <select
          name="isHosteller"
          value={formData.isHosteller}
          onChange={handleChange}
          disabled={!acceptedTerms}
          required
        >
          <option value="">Hostel / Non-Hostel</option>
          <option value="Hostel">Hostel</option>
          <option value="Non-Hostel">Non-Hostel</option>
        </select>

        <select
          name="isGettingFacilities"
          value={formData.isGettingFacilities}
          onChange={handleChange}
          disabled={!acceptedTerms}
          required
        >
          <option value="">
            Getting all facilities from cricket group?
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <button type="submit" disabled={!acceptedTerms}>
          Submit Registration
        </button>

        {message && <p className="message">{message}</p>}
      </form>

      {/* ---------- SUCCESS POPUP ---------- */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>🎉 Registration Successful</h2>
            <p>Your party details have been saved successfully.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPlacement;
