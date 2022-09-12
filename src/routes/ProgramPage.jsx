import React, { useEffect, useState, memo } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

// components - left-side
import AdBar from "../common/Adbar";
import ProfileImg from "../components/Mentor/ProfileImg";
import MentorContactSection from "../components/Mentor/MentorContactSection";
import MentorInfoSection from "../components/Mentor/MentorInfoSection";
import MentoringInfoSection from "../components/Mentor/MentoringInfoSection";

// components - main
import UpperMainGrid from "../components/Mentor/UpperMainGrid";
import LowerMainSection from "../components/Mentor/LowerMainSection";
import ProgramDetailSection from "../organisms/ProgramDetailSection";

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 10vh - 3em);
  display: flex;
`;

const LeftsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20vw;
  height: 120vh;
`;

const MainWrapper = styled.div`
  width: 80vw;
  height: 100%;
`;

const UpperMainWrapper = styled.div`
  width: 100%;
  height: calc(100vw * 0.2);
  box-sizing: border-box;
`;

const LowerMainWrapper = styled.div`
  width: 100%;
  /* height: calc(100vh * 0.8 - 10vw - 3em); */
  height: 100vh;
  border-left: 1px solid #dadada;
`;

const fetchedMentorData = {
  hashtags: "#기본소개 #대학소개 #동아리 #오프라인 #공모전",
  mentor_info:
    "안녕하세요 김기혁 멘토입니다.\n안녕하세요 김기혁 멘토입니다.\n안녕하세요 김기혁 멘토입니다.\n안녕하세요 김기혁 멘토입니다.\n안녕하세요 김기혁 멘토입니다.\n안녕하세요 김기혁 멘토입니다.\n",
  club_info: "동아리 내역",
  activities_info: "대외활동 내역",
  competition_info: "수상 내역",
  intern_info: "인턴 내역",
  blog_info: "블로그 정보",
};

const fetchedProgramData = "안녕하세요 프로그램 소개입니다. ";

function ProgramPage() {
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

  // 멘토정보
  const dummyMountData = {
    name: "아무개",
    university: "경북대학교",
    student_id: "18학번",
    college: "IT대학",
    department: "컴퓨터학부",
    major: "글로벌소프트웨어융합전공",
    naverblog_address: "https://www.naver.com",
    facebook_address: "https://www.facecbook.com",
    instar_address: "https://www.google.com",
  };

  const dummyDetail = {
    title: "4444",
    mentorName: "김민수",
    type: "전공소개",
    openDate: "2022년 9월 26일(월)",
    closeDate: "2022년 10월 7일(금)",
    runningTime: "화, 목 오전 10시 ~12시 / 금 오후 2시 ~ 4시",
    onlineOffline: true,
  };

  // 사용자 - 프로그램 정보
  const dummyUserProgramData = {
    isParticipating: "true",
    isFollowing: "true",
    isInWishlist: "false",
  };

  return (
    <>
      <AdBar />
      <Wrapper>
        <LeftsideWrapper>
          <ProfileImg data={dummyMountData} />
          <MentorContactSection data={dummyMountData} />
          <MentorInfoSection data={dummyMountData} />
          <MentoringInfoSection data={dummyUserProgramData} />
          <ProgramDetailSection data={dummyDetail}></ProgramDetailSection>
        </LeftsideWrapper>
        <MainWrapper>
          <UpperMainWrapper>
            <UpperMainGrid
              sub_content={fetchedMentorData["hashtags"]}
              main_content={mentorCarrierContent}
              mentorCarrierMenu={mentorCarrierMenu}
              setMentorCarrierMenu={setMentorCarrierMenu}
            />
          </UpperMainWrapper>
          <LowerMainWrapper>
            <LowerMainSection
              type={searchParams.get("program")}
              content={mentorProgramContent}
            />
          </LowerMainWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
}

export default memo(ProgramPage);
