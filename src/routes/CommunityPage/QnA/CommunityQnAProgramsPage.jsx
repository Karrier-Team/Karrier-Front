import React, { useState } from "react";
import CommunityNavbar from "../../../organisms/CommunityNavbar";
import ControllBar from "../../../organisms/ControllBar";
import ProfileList from "../../../organisms/ProfileList";
import * as S from "./style.js";
import Dropdown from "../../../common/Navbar/Dropdown";
import useAsync from "../../../hooks/useAsync";
import Loading from "../../../organisms/Loading";
import { Navigate } from "react-router-dom";
import {
  apiGetMentoringPrograms,
  apiGetProgramPageData,
} from "../../../apis/mentoring";

const sortTypeOptions = [
  { value: "latest", name: "최신순" },
  { value: "likes", name: "찜갯수" },
  { value: "alphanumeric", name: "이름순" },
];

const searchTypeOptions = [
  { value: "programName", name: "프로그램 제목" },
  { value: "mentorName", name: "멘토 이름" },
];

const data = [
  {
    programNo: 9,
    name: "김철",
    title: "1111",
    profileImage: "c5b8a81e-c261-440c-8894-0016e12aa0f5프로필 사진.PNG",
    mainImage: "545efb6b-8a7c-4cc2-a391-317c8a9da530photo.jpg",
    major: "글로벌소프트웨어전공",
    likeCount: 0,
    onlineOffline: true,
    state: "Recruiting",
  },
  {
    programNo: 11,
    name: "김철",
    title: "2222",
    profileImage: "c5b8a81e-c261-440c-8894-0016e12aa0f5프로필 사진.PNG",
    mainImage: "ea4b107d-330b-4f4c-b36d-a31c781bd4d1photo.jpg",
    major: "글로벌소프트웨어전공",
    likeCount: 0,
    onlineOffline: true,
    state: "Recruiting",
  },
];

function CommunityQnaProgramsPage() {
  const [sortType, setSortType] = useState("latest"); // sort by recent, likes, name || recent, unsolved, solved
  const [searchType, setSearchType] = useState("programName");
  const [searchValue, setSearchValue] = useState("");

  const [state] = useAsync(() =>
    apiGetMentoringPrograms({ major: "컴퓨터학부" })
  );
  const { loading, error, data } = state;

  if (loading) return <Loading />;
  if (error) return <Navigate to="/error" replace></Navigate>;
  if (!data) return <h1>데이터에러</h1>;

  return (
    <>
      <CommunityNavbar>커뮤니티 질의응답</CommunityNavbar>
      <S.Wrapper>
        <ControllBar
          sortType={sortType}
          sortTypeOptions={sortTypeOptions}
          onChangeSortType={setSortType}
          onChangeSearchType={setSearchType}
          searchType={searchType}
          searchValue={searchValue}
          onChangeSearchValue={setSearchValue}
          searchTypeOptions={searchTypeOptions}
        ></ControllBar>
        <Dropdown inCommunityPage />
        <ProfileList mentoData={data} />
      </S.Wrapper>
    </>
  );
}

export default CommunityQnaProgramsPage;
