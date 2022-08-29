import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import CommunityQnAProgramsPage from "./QnA/CommunityQnAProgramsPage";
import CommunityQnaProgramPage from "./QnA/CommunityQnaProgramPage";
import CommunityQuestionPage from "./QnA/CommunityQuestionPage";

import CommunityReviewsProgramsPage from "./Reviews/CommunityReviewsProgramsPage";
import CommunityReviewsProgramPage from "./Reviews/CommunityReviewsProgramPage";

// /community/*
function CommunityPage() {
  return (
    <>
      <Routes>
        {/* CommunityQnA로 Routing 되는 경우를 하나로 나타낼순 없을까!? */}
        <Route index element={<CommunityQnAProgramsPage />} />
        <Route path="qna" element={<CommunityQnAProgramsPage />} />
        <Route path="qna/:major" element={<CommunityQnAProgramsPage />} />
        <Route
          path="qna/:major/:programNo"
          element={<CommunityQnaProgramPage />}
        />
        <Route
          path="qna/:major/:programNo/question/:questionNo"
          element={<CommunityQuestionPage />}
        />

        <Route path="review" element={<CommunityReviewsProgramsPage />} />
        <Route
          path="review/:major"
          element={<CommunityReviewsProgramsPage />}
        />
        <Route
          path="review/:major/:programNo"
          element={<CommunityReviewsProgramsPage />}
        />
      </Routes>
    </>
  );
}

export default memo(CommunityPage);
