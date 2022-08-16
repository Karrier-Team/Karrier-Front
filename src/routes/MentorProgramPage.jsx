import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

//components
import MentorProgramNavBar from "../components/MentorProgram/MentorProgramNavbar";
import ProgramInfo from "../components/MentorProgram/ProgramInfo";
import ProgramIntro from "../components/MentorProgram/ProgramIntro";
import Curriculum from "../components/MentorProgram/Curriculum";
import MentorIntro from "../components/MentorProgram/MentorIntro";

//styled-components
const Wrapper = styled.div`
  display: flex;
`;

const MentorProgramPage = () => {
  return (
    <Wrapper>
      <MentorProgramNavBar />
      <Routes>
        <Route path="info" element={<ProgramInfo />} />
        <Route path="intro" element={<ProgramIntro />} />
        <Route path="curriculum" element={<Curriculum />} />
        <Route path="mentor" element={<MentorIntro />} />
      </Routes>
    </Wrapper>
  );
};

export default MentorProgramPage;
