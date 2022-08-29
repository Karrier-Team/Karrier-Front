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
import MentoringApplyPage from "./routes/MentoringApplyPage";
import CommunityPage from "./routes/CommunityPage";
import Mypage from "./routes/Mypage";

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
        <Route path="/mentoring" element={<MajorPage />} />
        <Route path="/mentoring/:id" element={<MentorPage />} />
        <Route path="/mentoring/:id/apply" element={<MentoringApplyPage />} />
        <Route path="/apply/*" element={<ApplyPage />} />
        <Route path="/community/*" element={<CommunityPage />} />
        <Route path="/mypage/*" element={<Mypage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
