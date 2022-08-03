import React, { useEffect, memo } from "react";
import styled from "styled-components";

// components
import AdBar from "../components/Mentor/Adbar";
import ProfileImg from "../components/Mentor/ProfileImg";
import MentorContactSection from "../components/Mentor/MentorContactSection";
import MentorInfoSection from "../components/Mentor/MentorInfoSection";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const LeftsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
`;

const MainWrapper = styled.div`
  width: 70%;
  height: 100%;
  background-color: green;
`;

const UpperMainWrapper = styled.div`
  width: 100%;
  height: calc(100vw * 0.3);
  background-color: yellow;
`;

const LowerMainWrapper = styled.div`
  width: 100%;
  height: 50%;
  background-color: yellowgreen;
`;

function MentorPage() {
  useEffect(() => {
    console.log("This is Mentor Page");
  }, []);

  return (
    <>
      <AdBar />
      <Wrapper>
        <LeftsideWrapper>
          <ProfileImg />
          <MentorContactSection />
          <MentorInfoSection />
          {/* <MentoringInfoSection /> */}
          {/* <MentorSubMenu /> */}
        </LeftsideWrapper>
        <MainWrapper>
          <UpperMainWrapper></UpperMainWrapper>
          <LowerMainWrapper></LowerMainWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
}

export default memo(MentorPage);
