import React from "react";
import styled from "styled-components";

//components
import MentorProgramNavBar from "../components/MentorProgram/MentorProgramNavbar";
import ProgramInfo from "../components/MentorProgram/ProgramInfo";
import ProgramIntro from "../components/MentorProgram/ProgramIntro";
import Curriculum from "../components/MentorProgram/Curriculum";
import MentorIntro from "../components/MentorProgram/MentorIntro";
import Btn from "../components/atoms/Btn";

//styled-components
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
`;

const PageWrapper = styled.div`
  width: 89%;
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  width: 70%;
  margin-top: 5%;
`;

const SubmitSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10%;
`;

const MentorProgramPage = () => {
  return (
    <Wrapper>
      <MentorProgramNavBar />
      <PageWrapper>
        <Section>
          <ProgramInfo id="1" />
          <ProgramIntro id="2" />
          <Curriculum id="3" />
          <MentorIntro id="4" />
          <SubmitSection>
            <Btn
              children={"임시저장"}
              color={"black"}
              backgroundColor={"RGB(235, 235, 235)"}
              handleClick={() => {}}
              size={"27vw"}
              fontSize={"1.2em"}
            />

            <Btn
              children={"저장"}
              backgroundColor={"#007bc3"}
              handleClick={() => {}}
              size={"27vw"}
              fontSize={"1.2em"}
            />
          </SubmitSection>
        </Section>
      </PageWrapper>
    </Wrapper>
  );
};

export default MentorProgramPage;
