import React, { useState } from "react";
import CommunityNavbar from "../../organisms/CommunityNavbar";
import ControllBar from "../../organisms/ControllBar";
import CollegeNavBar from "../../organisms/CollegeNavBar";
import ProfileList from "../../components/Profile/ProfileList";
import * as S from "./style.js";

const sortTypeOptions = [
  { value: "latest", name: "최신순" },
  { value: "likes", name: "찜갯수" },
  { value: "alphanumeric", name: "이름순" },
];

const searchTypeOptions = [
  { value: "program_title", name: "프로그램 제목" },
  { value: "mentor_name", name: "멘토 이름" },
];

function CommunityQnAPage() {
  const [sortType, setSortType] = useState("latest"); // sort by recent, likes, name || recent, unsolved, solved
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <CommunityNavbar>커뮤니티 질의응답</CommunityNavbar>
      <S.Wrapper>
        <ControllBar
          sortTypeOptions={sortTypeOptions}
          onChangeSortType={setSortType}
          searchValue={searchValue}
          onChangeSearchValue={setSearchValue}
          searchTypeOptions={searchTypeOptions}
        ></ControllBar>
        {/* <CollegeNavBar></CollegeNavBar> */}
        {/* <ProfileList mentoData={dummyMentoData} /> */}
      </S.Wrapper>
    </>
  );
}

export default CommunityQnAPage;
