import React, { useState } from "react";
import CommunityNavbar from "../../../organisms/CommunityNavbar";
import ControllBar from "../../../organisms/ControllBar";
import ProfileList from "../../../organisms/ProfileList";
import * as S from "./style.js";
import Dropdown from "../../../common/Navbar/Dropdown";

const sortTypeOptions = [
  { value: "latest", name: "최신순" },
  { value: "likes", name: "찜갯수" },
  { value: "alphanumeric", name: "이름순" },
];

const searchTypeOptions = [
  { value: "programName", name: "프로그램 제목" },
  { value: "mentorName", name: "멘토 이름" },
];

const dummyMentoData = [
  {
    college: "IT대학",
    major: "컴퓨터학부",
    name: "이승열",
    comment:
      "안녕하세요 현제 네이버 재직 중인 이승열이라고 합니다 취업, 학업 다 물어보셔도 좋습니다!",
  },
  {
    college: "IT대학",
    major: "컴퓨터통신공학부",
    name: "홍희림",
    comment:
      "안녕하세요 현제 네이버 재직 중인 이승열이라고 합니다 취업, 학업 다 물어보셔도 좋습니다!",
  },
  {
    college: "IT대학",
    major: "글로벌SW융합전공",
    name: "이승열",
    comment:
      "안녕하세요 현제 네이버 재직 중인 이승열이라고 합니다 취업, 학업 다 물어보셔도 좋습니다!",
  },
  {
    college: "IT대학",
    major: "컴퓨터학부",
    name: "이승열",
    comment:
      "안녕하세요 현재 네이버 재직 중인 이승열이라고 합니다 취업, 학업 다 물어보셔도 좋습니다!",
  },
  {
    college: "IT대학",
    major: "컴퓨터통신공학부",
    name: "홍희림",
    comment: "동해물과 백두산이 마르고 닳도록",
  },
  {
    college: "IT대학",
    major: "글로벌SW융합전공",
    name: "서영균",
    comment: "DB warrier가 되어봅시다 ",
  },
];

function CommunityReviewsProgramsPage() {
  const [sortType, setSortType] = useState("latest"); // sort by recent, likes, name || recent, unsolved, solved
  const [searchType, setSearchType] = useState("programName");
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <CommunityNavbar type={"reviews"}>커뮤니티 수강후기</CommunityNavbar>
      <S.Wrapper>
        <ControllBar
          type={"reviews"}
          sortType={sortType}
          sortTypeOptions={sortTypeOptions}
          onChangeSortType={setSortType}
          onChangeSearchType={setSearchType}
          searchType={searchType}
          searchValue={searchValue}
          onChangeSearchValue={setSearchValue}
          searchTypeOptions={searchTypeOptions}
        ></ControllBar>
        <Dropdown type={"reviews"} inCommunityPage />
        <ProfileList mentoData={dummyMentoData} />
      </S.Wrapper>
    </>
  );
}

export default CommunityReviewsProgramsPage;
