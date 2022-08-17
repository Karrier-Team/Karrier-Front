import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

// components
import MentorApplyNavbar from "../components/Apply/MentorApplyNavbar";
import MentorBasicInformation from "../components/Apply/MentorBasicInformation";
import MentorDetailedInformation from "../components/Apply/MentorDetailedInformation";
import MentorContacts from "../components/Apply/MentorContacts";
import MentorVerification from "../components/Apply/MentorVerification";
import MentorFinalConfirmation from "../components/Apply/MentorFinalConfirmation";

function ApplyPage() {
  return (
    <>
      <MentorApplyNavbar />
      <Routes>
        <Route index element={<MentorBasicInformation />} />
        <Route path="step1" element={<MentorBasicInformation />} />
        <Route path="step2" element={<MentorDetailedInformation />} />
        <Route path="step3" element={<MentorContacts />} />
        <Route path="step4" element={<MentorVerification />} />
        <Route path="step5" element={<MentorFinalConfirmation />} />
      </Routes>
    </>
  );
}

export default memo(ApplyPage);
