import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

// components
import CommunityQnA from "./CommunityQnAPage";

function CommunityPage() {
  return (
    <>
      <Routes>
        <Route index element={<CommunityQnA />} />
        <Route path="qna" element={<CommunityQnA />} />
        <Route path="qna/:major" element={<CommunityQnA />} />
      </Routes>
    </>
  );
}

export default memo(CommunityPage);
