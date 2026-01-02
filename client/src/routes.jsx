import { Routes, Route } from "react-router-dom";
import React from "react";

import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Members from "./pages/Members.jsx";
import RegisterPlacement from "./pages/RegisterPlacement.jsx";
import Terms from "./pages/Terms.jsx";
import Contact from "./pages/Contact.jsx";

import ScrollToTop from "./components/ScrollToTop.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const AppRoutes = () => {
  return (
    <>
      {/* 👇 MUST be outside Routes */}
      <ScrollToTop />

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

        <Route
          path="/members"
          element={
            <ProtectedRoute>
              <Members />
            </ProtectedRoute>
          }
        />

        <Route
          path="/register"
          element={
            <ProtectedRoute>
              <RegisterPlacement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/terms"
          element={
            <ProtectedRoute>
              <Terms />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
