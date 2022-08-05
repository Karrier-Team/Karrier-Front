import React, { useEffect, useState, memo } from "react";
import styled from "styled-components";

// components - left-side
import AdBar from "../components/Mentor/Adbar";
import ProfileImg from "../components/Mentor/ProfileImg";
import MentorContactSection from "../components/Mentor/MentorContactSection";
import MentorInfoSection from "../components/Mentor/MentorInfoSection";
import MentoringInfoSection from "../components/Mentor/MentoringInfoSection";

// components - upper-right-side
import UpperMainGrid from "../components/Mentor/UpperMainGrid";

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
  height: 50%;
`;

const fetchedMentorData = {
  hashtags: "#기본소개 #대학소개 #동아리 #오프라인 #공모전",
  regular_info: "안녕하세요. 문준용 멘토입니다. 등등등 안녕하세요. 문준용 멘토입니다. 등등등 안녕하세요. 문준용 멘토입니다. 등등등 안녕하세요. 문준용 멘토입니다. 등등등 안녕하세요. 문준용 멘토입니다. 등등등",
  university_info: "경북대학교는 최고에요",
  club_info: "mic 해달 등등 잼게했어요",
  offline_info: "오프라인 접오에요",
  competition_info: "저는 수상내역도 하나없어요",
  blog_info: "저는 블로그 주소도 없어요",
};

function MentorPage() {
  const [mentorCarrierMenu, setMentorCarrierMenu] = useState("regular_info");
  const [mentorCarrierContent, setMentorCarrierContent] = useState("");
  const [mentorProgramMenu, setMentorProgramMenu] = useState(0);

  //CONNECT:
  useEffect(() => {
    // 해당 멘토의 정보를 불러오는 부분 (axios)
    // 해당 멘토의 정보를 setState해서 state로 저장!
  }, []);

  useEffect(() => {
    setMentorCarrierContent(fetchedMentorData[mentorCarrierMenu]);
  }, [mentorCarrierMenu]);

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
          <LowerMainWrapper></LowerMainWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
}

export default memo(MentorPage);
