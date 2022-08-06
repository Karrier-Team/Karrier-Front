import React, { useEffect, useState, memo } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

// components - left-side
import AdBar from "../components/Mentor/Adbar";
import ProfileImg from "../components/Mentor/ProfileImg";
import MentorContactSection from "../components/Mentor/MentorContactSection";
import MentorInfoSection from "../components/Mentor/MentorInfoSection";
import MentoringInfoSection from "../components/Mentor/MentoringInfoSection";

// components - main
import UpperMainGrid from "../components/Mentor/UpperMainGrid";
import LowerMainSection from "../components/Mentor/LowerMainSection";

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
`;

const UpperMainWrapper = styled.div`
  width: 100%;
  height: calc(100vw * 0.3);
`;

const LowerMainWrapper = styled.div`
  width: 100%;
  height: calc(100vw * 0.7);
  border-left: 1px solid #dadada;
`;

const fetchedMentorData = {
  hashtags: "#기본소개 #대학소개 #동아리 #오프라인 #공모전",
  mentor_info: "안녕하세요. 문준용 멘토입니다. 등등등 안녕하세요. 문준용 멘토입니다. 등등등 안녕하세요. 문준용 멘토입니다. 등등등 안녕하세요. 문준용 멘토입니다. 등등등 안녕하세요. 문준용 멘토입니다. 등등등",
  club_info: "mic 해달 등등 잼게했어요",
  activities_info: "오프라인 접오에요",
  competition_info: "저는 수상내역도 하나없어요",
  intern_info: "인턴안해봐서요",
  blog_info: "저는 블로그 주소도 없어요",
};

const fetchedProgramData = "안녕하세요 프로그램 소개입니다. 안녕하세요 프로그램 소개입니다. 안녕하세요 프로그램 소개입니다. 안녕하세요 프로그램 소개입니다. 안녕하세요 프로그램 소개입니다. 안녕하세요 프로그램 소개입니다. 안녕하세요 프로그램 소개입니다. 안녕하세요 프로그램 소개입니다. ";

function MentorPage() {
  const [mentorCarrierMenu, setMentorCarrierMenu] = useState("mentor_info");
  const [mentorCarrierContent, setMentorCarrierContent] = useState("");
  const [mentorProgramContent, setMentorProgramContent] = useState("null");
  const [searchParams] = useSearchParams();

  //CONNECT:
  useEffect(() => {
    // 해당 멘토의 정보를 불러오는 부분 (axios)
    // 해당 멘토의 정보를 setState해서 state로 저장!
  }, []);

  useEffect(() => {
    setMentorCarrierContent(fetchedMentorData[mentorCarrierMenu]);
  }, [mentorCarrierMenu]);

  useEffect(() => {
    // 멘토의 프로그램 소개 / 커리큘렴 / 수강후기 / 질의응답 받아오는부분임 (axios)
    // GET mentor/123?program=introduction
    // fetchedProgramData = await fetch() 이런식일듯
    setMentorProgramContent(fetchedProgramData);
  }, [searchParams]);

  return (
    <>
      <AdBar />
      <Wrapper>
        <LeftsideWrapper>
          <ProfileImg />
          <MentorContactSection />
          <MentorInfoSection />
          <MentoringInfoSection />
        </LeftsideWrapper>
        <MainWrapper>
          <UpperMainWrapper>
            <UpperMainGrid sub_content={fetchedMentorData["hashtags"]} main_content={mentorCarrierContent} mentorCarrierMenu={mentorCarrierMenu} setMentorCarrierMenu={setMentorCarrierMenu} />
          </UpperMainWrapper>
          <LowerMainWrapper>
            <LowerMainSection type={searchParams.get("program")} content={mentorProgramContent} />
          </LowerMainWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
}

export default memo(MentorPage);
