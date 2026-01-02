import "../css/footer.css";
import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Aryabhata Cricket Lovers 🏏
      </p>
      <p className="footer-sub">
        Built with ❤️ for memories, friendships & celebrations
      </p>
    </footer>
  );
};

export default Footer;
