import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import MypageProgramsPage from "./MypageProgramsPage";

// /mypage/*
function Mypage() {
  return (
    <Routes>
      <Route index element={<Navigate to="./programs?sort=all" replace />} />
      <Route path="/programs" element={<MypageProgramsPage />} />
    </Routes>
  );
}

export default memo(Mypage);
