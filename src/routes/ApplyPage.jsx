import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

// components
import MentorApplyNavbar from "../components/Apply/MentorApplyNavbar";
import MentorBasicInformation from "../components/Apply/MentorBasicInformation";
import MentorDetailedInformation from "../components/Apply/MentorDetailedInformation";
import MentorContacts from "../components/Apply/MentorContacts";
import MentorVerification from "../components/Apply/MentorVerification";
import MentorFinalConfirmation from "../components/Apply/MentorFinalConfirmation";

//styled-component
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 1%;
`;

function ApplyPage() {
  return (
    <>
      <MentorApplyNavbar />
      <Wrapper>
        <Routes>
          <Route index element={<MentorBasicInformation />} />
          <Route path="step1" element={<MentorBasicInformation />} />
          <Route path="step2" element={<MentorDetailedInformation />} />
          <Route path="step3" element={<MentorContacts />} />
          <Route path="step4" element={<MentorVerification />} />
          <Route path="step5" element={<MentorFinalConfirmation />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default memo(ApplyPage);
