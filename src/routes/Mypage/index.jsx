import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import MypageProgramsPage from "./MypageProgramsPage";
import MypageQnAPage from "./MypageQnAPage";
import MypageWishlistPage from "./MypageWishlistPage";
import MypageFollowingPage from "./MypageFollowingPage";
import MypageReviewsPage from "./MypageReviewsPage";

// /mypage/*
function Mypage() {
  return (
    <Routes>
      <Route index element={<Navigate to="./programs?sort=all" replace />} />
      <Route path="/programs" element={<MypageProgramsPage />} />
      <Route path="/qna" element={<MypageQnAPage />} />
      <Route path="/reviews" element={<MypageReviewsPage />} />
      <Route path="/wishlist" element={<MypageWishlistPage />} />
      <Route path="/following" element={<MypageFollowingPage />} />
    </Routes>
  );
}

export default memo(Mypage);
