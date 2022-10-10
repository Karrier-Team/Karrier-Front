import React, { useEffect, useState, memo } from "react";
import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";
import useAsync from "../hooks/useAsync";
import Loading from "react-loading";

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
import { apiGetProgramPageData } from "../apis/mentoring";

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
  height: 130vh;
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

function ProgramPage() {
  const [mentorCarrierMenu, setMentorCarrierMenu] = useState("mentorIntroduce");
  const [mentorCarrierContent, setMentorCarrierContent] = useState("");
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const { programNo } = useParams();

  const [state] = useAsync(() => apiGetProgramPageData({ programNo }));
  const { loading, error, data } = state;

  useEffect(() => {
    if (!data) return;
    setMentorCarrierContent(data[mentorCarrierMenu]);
    if (!searchParams.get("program"))
      navigate("?program=introduction", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, mentorCarrierMenu, searchParams]);

  if (loading) return <Loading />;
  if (error) return <Navigate to="/error" replace></Navigate>;
  if (!data) return <h1>데이터에러</h1>;

  return (
    <>
      <AdBar />
      <Wrapper>
        <LeftsideWrapper>
          <ProfileImg data={data.profileImage} />
          <MentorContactSection data={data} />
          <MentorInfoSection data={data} />
          <MentoringInfoSection data={data} />
          <ProgramDetailSection data={data} />
        </LeftsideWrapper>
        <MainWrapper>
          <UpperMainWrapper>
            <UpperMainGrid
              sub_content={data.tagList.map((tag) => tag.tagName + " ")}
              main_content={mentorCarrierContent} // ?
              mentorCarrierMenu={mentorCarrierMenu}
              setMentorCarrierMenu={setMentorCarrierMenu}
            />
          </UpperMainWrapper>
          <LowerMainWrapper>
            <LowerMainSection
              type={searchParams.get("program")}
              content={data}
            />
          </LowerMainWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
}

export default memo(ProgramPage);
