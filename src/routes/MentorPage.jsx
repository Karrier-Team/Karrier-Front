import React, { useEffect, memo } from "react";
import styled from "styled-components";

// components
import AdBar from "../components/Mentor/Adbar";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;

const LeftsideWrapper = styled.div``;

const MainWrapper = styled.div``;

const UpperMainWrapper = styled.div``;

const LowerMainWrapper = styled.div``;

function MentorPage() {
  useEffect(() => {
    console.log("This is Mentor Page");
  }, []);

  return (
    <Wrapper>
      <AdBar />
      <LeftsideWrapper></LeftsideWrapper>
      <MainWrapper>
        <UpperMainWrapper></UpperMainWrapper>
        <LowerMainWrapper></LowerMainWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export default memo(MentorPage);
