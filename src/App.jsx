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

import MentorProgramPage from "./routes/MentorProgramPage";

import CommunityPage from "./routes/CommunityPage";
import Mypage from "./routes/Mypage";
import MentorProfileChangePage from "./routes/MentorProfileChangePage";

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
        <Route path="/major" element={<MajorPage />} />
        {/* 멘토-단과대학-학과별-세부페이지 */}
        <Route path="/mentoring/:id" element={<MentorPage />} />
        {/* 학과별-세부-프로그램 신청페이지 */}
        <Route path="/mentoring/:id/apply" element={<MentoringApplyPage />} />
        {/* 멘토 */}
        {/* 멘토-지원 */}
        <Route path="/apply/*" element={<ApplyPage />} />
        {/* 멘토-프로그램 만들기 */}
        <Route path="/mentor/program/*" element={<MentorProgramPage />} />
        {/* 멘토-질의응답관리 */}
        {/* 멘토-프로필 변경 */}
        <Route
          path="/mentor/profile/change"
          element={<MentorProfileChangePage />}
        />
        {/* 멘토-계정관리 */}

        <Route path="/community/*" element={<CommunityPage />} />
        <Route path="/mypage/*" element={<Mypage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
