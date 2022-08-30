import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import MypageProgramsPage from "./MypageProgramsPage";
import MypageQnAPage from "./MypageQnAPage";

// /mypage/*
function Mypage() {
  return (
    <Routes>
      <Route index element={<Navigate to="./programs?sort=all" replace />} />
      <Route path="/programs" element={<MypageProgramsPage />} />
      <Route path="/qna" element={<MypageQnAPage />} />
    </Routes>
  );
}

export default memo(Mypage);
