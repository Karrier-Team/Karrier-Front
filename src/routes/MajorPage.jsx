import React, { useState } from "react";

import MajorInfoBar from "../components/Major/MajorInfoBar";
import MajorInfo from "../components/Major/MajorInfo";
import ProfileList from "../components/Profile/ProfileList";

const dummyProps = {
  college: "IT대학",
  major: "컴퓨터학부",
};

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

const MajorPage = () => {
  // 남은 일
  // getData -> 서버에서 받아오기
  // 이때 각 객체당 이미지 파일도 저장해야 한다

  //데이터 받으면 따로 ID넣어주기
  // const dataId = useRef(0);
  return (
    <>
      {/* 일단 dummydata 넣어놨는데 새로 backend에서 받으면 객체로 데이터 넣으면 된다 */}
      <MajorInfoBar majorData={dummyProps} />
      <MajorInfo majorData={dummyProps} />
      <ProfileList mentoData={dummyMentoData} />
    </>
  );
};
export default React.memo(MajorPage);
