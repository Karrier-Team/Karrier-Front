import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

// components
import CommunityNavbar from "../../organisms/CommunityNavbar";
import CommunityQnA from "./CommunityQnAPage";

function CommunityPage() {
  return (
    <>
      <CommunityNavbar>커뮤니티 질의응답</CommunityNavbar>
      <Routes>
        <Route index element={<CommunityQnA />} />
        <Route path="qna" element={<CommunityQnA />} />
      </Routes>
    </>
  );
}

export default memo(CommunityPage);
