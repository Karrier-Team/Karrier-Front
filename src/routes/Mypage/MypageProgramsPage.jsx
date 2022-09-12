import React, { useState } from "react";
import ProfileList from "../../organisms/ProfileList.jsx";
import CommunityNavbar from "../../organisms/CommunityNavbar/index.jsx";
import ControllBar from "../../organisms/ControllBar/index.jsx";
import * as S from "./style.js";

const dummyData = [
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

const sortTypeOptions = [
  { value: "all", name: "전체" },
  { value: "online", name: "온라인" },
  { value: "offline", name: "오프라인" },
];

function MypageProgramsPage() {
  const [sortType, setSortType] = useState("all"); // sort by recent, likes, name || recent, unsolved, solved

  return (
    <>
      <CommunityNavbar type="programs">마이페이지 수강목록</CommunityNavbar>
      <S.Wrapper>
        <ControllBar
          type="programs"
          lefttxt="수강목록"
          leftnum={dummyData?.length || 0}
          sortType={sortType}
          sortTypeOptions={sortTypeOptions}
          onChangeSortType={setSortType}
        ></ControllBar>
        <ProfileList mentoData={dummyData} />
      </S.Wrapper>
    </>
  );
}

export default MypageProgramsPage;
