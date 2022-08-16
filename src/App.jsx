import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./commonStyles";

import Navbar from "./common/Navbar";

import TestPage from "./routes/TestPage";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage";
import ErrorPage from "./routes/ErrorPage";
import LandingPage from "./routes/LandingPage";
import MajorPage from "./routes/MajorPage";
import MentorPage from "./routes/MentorPage";
import ApplyPage from "./routes/ApplyPage";
import MentorProgramPage from "./routes/MentorProgramPage";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mentor" element={<MentorPage />} />
        <Route path="/mentor/:id" element={<MentorPage />} />
        <Route path="/apply/*" element={<ApplyPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/major" element={<MajorPage />} />
        <Route path="/mentor-program/*" element={<MentorProgramPage />} />
      </Routes>
    </Router>
  );
}

export default App;
