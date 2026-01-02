import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Members from "./pages/Members.jsx";
import RegisterPlacement from "./pages/RegisterPlacement.jsx";
import Terms from "./pages/Terms.jsx";
import Contact from "./pages/Contact.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/members" element={<Members />} />
      <Route path="/register" element={<RegisterPlacement />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
