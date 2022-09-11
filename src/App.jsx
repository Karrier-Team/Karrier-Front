import React from "react";
import { Routes, Route, useLocation, Outlet, Navigate } from "react-router-dom";

import { GlobalStyles } from "./commonStyles";

// hooks
import useAuth from "./hooks/useAuth";

import Navbar from "./common/Navbar";

import TestPage from "./routes/TestPage";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage";
import ErrorPage from "./routes/ErrorPage";
import LandingPage from "./routes/LandingPage";
import MajorPage from "./routes/MajorPage";
import MentorPage from "./routes/MentorPage";
import ApplyPage from "./routes/ApplyPage";
import UnauthorizedPage from "./routes/UnauthorizedPage";
import MentoringApplyPage from "./routes/MentoringApplyPage";

import MentorProgramPage from "./routes/MentorProgramPage";

import CommunityPage from "./routes/CommunityPage";
import Mypage from "./routes/Mypage";
import MentorProfileChangePage from "./routes/MentorProfileChangePage";

const ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
  MENTOR_X: "MENTOR_WAIT",
  MENTOR_O: "MENTOR_APPROVE",
};

const Auth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return allowedRoles.includes(auth?.role) ? (
    <Outlet />
  ) : auth?.email ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
        {/* Allow Every Roles */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/major" element={<MajorPage />} />
        <Route path="/mentoring/:id" element={<MentorPage />} />
        <Route path="/community/*" element={<CommunityPage />} />

        {/* Allow Only Admin */}
        <Route element={<Auth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="/test" element={<TestPage />} />
        </Route>

        {/* Allow User, Admin */}
        <Route element={<Auth allowedRoles={[ROLES.USER, ROLES.ADMIN]} />}>
          {/* 학과별-세부-프로그램 신청페이지 */}
          <Route path="/mentoring/:id/apply" element={<MentoringApplyPage />} />
          {/* 멘토-지원 */}
          <Route path="/apply/*" element={<ApplyPage />} />
          <Route path="/mypage/*" element={<Mypage />} />
        </Route>

        {/* Allow ApprovedMentor, Admin */}
        <Route element={<Auth allowedRoles={[ROLES.MENTOR_O, ROLES.ADMIN]} />}>
          {/* 멘토-프로필 변경 */}
          <Route
            path="/mentor/profile/change"
            element={<MentorProfileChangePage />}
          />
          {/* 멘토-프로그램 만들기 */}
          <Route path="/mentor/program/*" element={<MentorProgramPage />} />
        </Route>
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
