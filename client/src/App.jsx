import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AppRoutes from "./routes.jsx";
import "./css/global.css";

function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="app-content">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
