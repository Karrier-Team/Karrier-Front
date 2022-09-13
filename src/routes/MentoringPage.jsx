import React from "react";

import MajorInfoBar from "../components/Major/MajorInfoBar";
import MajorInfo from "../components/Major/MajorInfo";
import ProfileList from "../organisms/ProfileList";
import Adbar from "../common/Adbar";

const dummyProps = {
  college: "IT대학",
  major: "컴퓨터학부",
};

// {
//   college: "IT대학",
//   major: "컴퓨터학부",
//   name: "이승열",
//   comment:
//     "안녕하세요 현제 네이버 재직 중인 이승열이라고 합니다 취업, 학업 다 물어보셔도 좋습니다!",
// },

const dummyMentoData = [
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
  {
    programNo: 13,
    name: "김철",
    title: "3333",
    profileImage: "c5b8a81e-c261-440c-8894-0016e12aa0f5프로필 사진.PNG",
    mainImage: "e8fd789e-7dcf-4f6b-8a27-7c8b4b808fdaphoto.jpg",
    major: "글로벌소프트웨어전공",
    likeCount: 0,
    onlineOffline: true,
    state: "Recruiting",
  },
  {
    programNo: 12,
    name: "김철",
    title: "4444",
    profileImage: "12b3f6d3-b1b8-445c-986a-2d14a0cf5c72프로필 사진.PNG",
    mainImage: "ffde341b-5005-42a4-85b1-4c9771a5c3c8photo.jpg",
    major: "글로벌소프트웨어전공",
    likeCount: 0,
    onlineOffline: true,
    state: "Recruiting",
  },
  {
    programNo: 5,
    name: "김철",
    title: "dfsfs1",
    profileImage: "c5b8a81e-c261-440c-8894-0016e12aa0f5프로필 사진.PNG",
    mainImage: "7ea77c76-0ab9-4cc5-8eb5-4510b2922eb1photo.jpg",
    major: "글로벌소프트웨어전공",
    likeCount: -1,
    onlineOffline: true,
    state: "1",
  },
  {
    programNo: 8,
    name: "고길동",
    title: "dfsfs2",
    profileImage: "e064f99f-a4d5-4348-9066-4bfbf1ab2b30멘토정보.PNG",
    mainImage: "b7cab022-c53b-4594-bf5f-d5ea91c45203photo.jpg",
    major: "글로벌소프트웨어전공",
    likeCount: -1,
    onlineOffline: true,
    state: "Recruiting",
  },
  {
    programNo: 10,
    name: "김철",
    title: "dfsfs3",
    profileImage: "c5b8a81e-c261-440c-8894-0016e12aa0f5프로필 사진.PNG",
    mainImage: "8a7fb9a0-6c00-4ada-8dcd-5bbdb2d58c26photo.jpg",
    major: "글로벌소프트웨어전공",
    likeCount: -2,
    onlineOffline: true,
    state: "Recruiting",
  },
  {
    programNo: 6,
    name: "고길동",
    title: "dfsfs7",
    profileImage: "e064f99f-a4d5-4348-9066-4bfbf1ab2b30멘토정보.PNG",
    mainImage: "fe05cad9-d170-49e5-8c3c-cf2d0dfec6e2photo.jpg",
    major: "글로벌소프트웨어전공",
    likeCount: 0,
    onlineOffline: true,
    state: "1",
  },
  {
    programNo: 7,
    name: "김철",
    title: "dfsfs8",
    profileImage: "c5b8a81e-c261-440c-8894-0016e12aa0f5프로필 사진.PNG",
    mainImage: "ef944362-23b2-422c-a52a-bb0bf7c79b9fphoto.jpg",
    major: "글로벌소프트웨어전공",
    likeCount: 0,
    onlineOffline: true,
    state: "Recruiting",
  },
  {
    programNo: 23,
    name: "김철",
    title: "ㄴ이리너ㅣㅈ",
    profileImage: "c5b8a81e-c261-440c-8894-0016e12aa0f5프로필 사진.PNG",
    mainImage: "69dbc27c-d3fb-4553-8fce-23054cf507fephoto.jpg",
    major: "글로벌소프트웨어전공",
    likeCount: 0,
    onlineOffline: true,
    state: "Recruiting",
  },
  {
    programNo: 2,
    name: "김철",
    title: "가가",
    profileImage: "c5b8a81e-c261-440c-8894-0016e12aa0f5프로필 사진.PNG",
    mainImage: "d",
    major: "글로벌소프트웨어전공",
    likeCount: 0,
    onlineOffline: true,
    state: "1",
  },
  {
    programNo: 4,
    name: "고길동",
    title: "라라",
    profileImage: "e064f99f-a4d5-4348-9066-4bfbf1ab2b30멘토정보.PNG",
    mainImage: "d",
    major: "글로벌소프트웨어전공",
    likeCount: 1,
    onlineOffline: true,
    state: "1",
  },
  {
    programNo: 24,
    name: "김철",
    title: "리ㅏㅓㅣㅈ",
    profileImage: "c5b8a81e-c261-440c-8894-0016e12aa0f5프로필 사진.PNG",
    mainImage: "7b51d5ab-d45e-4b87-94c9-b51f52cc07b2photo.jpg",
    major: "글로벌소프트웨어전공",
    likeCount: 0,
    onlineOffline: true,
    state: "Recruiting",
  },
  {
    programNo: 22,
    name: "김철",
    title: "링ㄴㄹ저닥",
    profileImage: "c5b8a81e-c261-440c-8894-0016e12aa0f5프로필 사진.PNG",
    mainImage: "727546f0-4ce3-412b-8c05-d6fc41cd9346photo.jpg",
    major: "글로벌소프트웨어전공",
    likeCount: 0,
    onlineOffline: true,
    state: "Recruiting",
  },
  {
    programNo: 1,
    name: "고길동",
    title: "컴공 맛보기",
    profileImage: "e064f99f-a4d5-4348-9066-4bfbf1ab2b30멘토정보.PNG",
    mainImage: "d",
    major: "글로벌소프트웨어전공",
    likeCount: 0,
    onlineOffline: true,
    state: "1",
  },
];

const WrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const MentoringPage = () => {
  return (
    <div style={WrapperStyle}>
      <MajorInfoBar />
      <Adbar></Adbar>
      <MajorInfo majorData={dummyProps} />
      <div style={{ width: "80%" }}>
        <ProfileList mentoData={dummyMentoData} />
      </div>
    </div>
  );
};
export default React.memo(MentoringPage);
