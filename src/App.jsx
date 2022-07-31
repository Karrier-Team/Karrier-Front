import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./commonStyles";

import TestPage from "./routes/TestPage";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage";
import ErrorPage from "./routes/ErrorPage";
import LandingPage from "./routes/LandingPage";
import MentorPage from "./routes/MentorPage";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mentor" element={<MentorPage />} />
        <Route path="/mentor/:id" element={<MentorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
