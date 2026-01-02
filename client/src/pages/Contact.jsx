import { useState } from "react";
import "../css/contact.css";
import React from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });

  const [info, setInfo] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // frontend-only (personal group app)
    setInfo("Message noted 👍 We’ll get back to you!");
    setFormData({ name: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>📞 Contact Us</h1>
      <p className="contact-subtitle">
        Reach out to Aryabhata Cricket Lovers
      </p>

      {/* ---------- INFO ---------- */}
      <div className="contact-info">
        <p><strong>Group:</strong> Aryabhata Cricket Lovers</p>
        <p><strong>Hostel:</strong> Aryabhata Hostel</p>
        <p><strong>Email:</strong> aryabhatacricket@gmail.com</p>
      </div>

      {/* ---------- FORM ---------- */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send a Message</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send</button>

        {info && <p className="info-msg">{info}</p>}
      </form>
    </div>
  );
};

export default Contact;
