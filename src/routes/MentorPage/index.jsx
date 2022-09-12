import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import MentorProgramPage from "./MentorProgramPage";
import MentorProfileChangePage from "./MentorProfileChangePage";
import MentorQnaPage from "./MentorQnaPage";
import MentorReviewsPage from "./MentorReviewsPage";
import MentorWishlistPage from "./MentorWishlistPage";
import MentorFollowsPage from "./MentorFollowsPage";

function MentorPage() {
  return (
    <Routes>
      <Route index element={<Navigate to="./programs" replace />} />

      {/* 멘토-개인프로그램 관리 페이지 */}
      {/* /programs */}

      {/* 멘토-개인 프로그램 만들기 페이지*/}
      <Route path="/program/create" element={<MentorProgramPage />} />

      {/* 멘토-질의응답 관리 페이지  */}
      <Route path="/qna" element={<MentorQnaPage />} />

      {/* 멘토-수강후기 관리 페이지  */}
      <Route path="/reviews" element={<MentorReviewsPage />} />

      {/* 멘토-찜 및 팔로우(찜) 관리 페이지  */}
      <Route path="/wishlist" element={<MentorWishlistPage />} />

      {/* 멘토-찜 및 팔로우(팔로우) 관리 페이지  */}
      <Route path="/follows" element={<MentorFollowsPage />} />

      {/* 멘토-프로필 변경 페이지 */}
      <Route path="/profile" element={<MentorProfileChangePage />} />

      {/* 멘토-계정관리 페이지 */}
      {/* /account - 승열이가만들어둠! */}
    </Routes>
  );
}

export default memo(MentorPage);
