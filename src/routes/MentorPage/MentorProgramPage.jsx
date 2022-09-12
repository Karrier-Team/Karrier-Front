import React, { useState } from "react";
import styled from "styled-components";

//components
import MentorProgramNavBar from "../../components/MentorProgram/MentorProgramNavbar";
import ProgramInfo from "../../components/MentorProgram/ProgramInfo";
import ProgramIntro from "../../components/MentorProgram/ProgramIntro";
import Curriculum from "../../components/MentorProgram/Curriculum";
import MentorIntro from "../../components/MentorProgram/MentorIntro";
import Btn from "../../components/atoms/Btn";

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
  padding-top: 10%;
  padding-bottom: 10%;
`;

const MentorProgramPage = () => {
  // programInfo data
  const [programInfo, setProgramInfo] = useState({
    representInfo: "",
    representImg: "",
  });

  // program Intro data
  const [programIntro, setProgramIntro] = useState({
    intro: "",
    title: "",
    shortIntro: "",
    onOff: true,
    offline_place: "",
    open_date: new Date(),
    close_date: new Date(),
    running_time: "",
    max_people: undefined,
    price: undefined,
    recommended_target: [],
  });

  //curriculum data
  const [curriculum, setCurriculum] = useState([]);

  //mentorIntro data
  const [mentorIntro, setMentorIntro] = useState({
    introduce: "",
    club: "",
    contest: "",
    external_activity: "",
    intern: "",
    naverblog_address: "",
    facebook_address: "",
    instar_address: "",
    tag: [],
  });

  //method
  // const handleScroll = () => {
  //   // for scroll method
  //   introRef.current.scrollToTop({ behaivior: "smooth" });
  // };

  const handleSubmit = () => {
    // fetch 최종 저장 데이터
  };

  const handleTempSubmit = () => {
    // fetch 임시 저장 데이터
  };

  return (
    <Wrapper>
      <MentorProgramNavBar onClick={() => {}} />
      <PageWrapper>
        <Section>
          <ProgramInfo
            programInfo={programInfo}
            handleSubmit={handleSubmit}
            handleTempSubmit={handleTempSubmit}
            handleChange={setProgramInfo}
          />
          <ProgramIntro
            programIntro={programIntro}
            handleChange={setProgramIntro}
          />
          <Curriculum curriculum={curriculum} handleChange={setCurriculum} />
          <MentorIntro
            mentorIntro={mentorIntro}
            handleChange={setMentorIntro}
          />
          <SubmitSection>
            <Btn
              children={"임시저장"}
              color={"black"}
              backgroundColor={"RGB(235, 235, 235)"}
              handleClick={handleTempSubmit}
              size={"27vw"}
              fontSize={"1.2em"}
            />
            <Btn
              children={"저장"}
              backgroundColor={"#007bc3"}
              handleClick={handleSubmit}
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
