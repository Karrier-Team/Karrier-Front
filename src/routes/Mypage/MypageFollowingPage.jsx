import React, { useState } from "react";
import CommunityNavbar from "../../organisms/CommunityNavbar/index.jsx";
import ControllBar from "../../organisms/ControllBar/index.jsx";
import * as S from "./style.js";

import { Text, Modal, Space } from "@mantine/core";
import LeftSidebar from "../../components/molecules/LeftSidebar/index.jsx";
import UserProfileWithText from "../../components/molecules/UserProfileImgWithText/index.jsx";

const sortTypeOptions = [
  { value: "latest", name: "최신순" },
  { value: "title", name: "제목순" },
];

const searchTypeOptions = [
  { value: "all", name: "전체" },
  { value: "menteeName", name: "멘티이름" },
  { value: "major", name: "학과" },
];

const dummyData = [
  {
    email: "test5@test.com",
    name: "Hello",
    major: null,
    profileImage: "d3444294-e1d2-44b6-9d88-0ae2779feede프로필 사진.PNG",
  },
  {
    email: "test@test.com",
    name: "hi!",
    major: null,
    profileImage: "2e5308f3-522c-4ff1-90b1-67fdf8f32a64변경된 프로필 사진.PNG",
  },
];

function MypageFollowingPage() {
  const [sortType, setSortType] = useState("latest");
  const [searchType, setSearchType] = useState("content");
  const [searchValue, setSearchValue] = useState("");
  const [isUnsubscribeActive, setIsUnsubscribeActive] = useState(false);
  const [isCancelModalOpened, setIsCancelModalOpened] = useState(false);

  const handleCancelFollowing = (event) => {
    // TODO: API 연결
    alert("팔로잉 취소API 연결");
  };

  return (
    <>
      <CommunityNavbar isAdVisible={false} type="followers">
        MY 팔로잉 멘토
      </CommunityNavbar>
      <S.RowWrapper>
        <LeftSidebar
          color="var(--followers-color)"
          items={[
            { link: "/mypage/wishlist", name: "MY 찜" },
            { link: "/mypage/following", name: "MY 팔로잉" },
          ]}
        ></LeftSidebar>
        <S.RightSideWrapper>
          <S.SubControllBar>
            <div style={{ display: "flex" }}>
              <Text
                size="1.5rem"
                weight="bold"
                style={{ color: "var(--followers-color)" }}
              >
                {"팔로우"}
              </Text>
              <Space w="xs"></Space>
              <Text size="1.5rem" weight="bold">
                {dummyData.length || 0}
              </Text>
            </div>
            <div style={{ display: "flex" }}>
              <Text
                size="1.5rem"
                weight="bold"
                style={{ color: "var(--followers-color)" }}
              >
                {"개인"}
              </Text>
              <Space w="xs"></Space>
              <Text
                size="1.5rem"
                weight="bold"
                style={{ color: "", cursor: "pointer" }}
                onClick={() => alert("서비스 준비중입니다.")}
              >
                {"팀"}
              </Text>
            </div>
          </S.SubControllBar>
          <ControllBar
            btntxt={isUnsubscribeActive ? "취소" : "삭제"}
            onClickBtn={() => setIsUnsubscribeActive((prev) => !prev)}
            hideSortingbar
            type={isUnsubscribeActive ? "follow-cancel" : "followers"}
            spacebetween={true}
            withBtn={true}
            sortType={sortType}
            sortTypeOptions={sortTypeOptions}
            onChangeSortType={setSortType}
            onChangeSearchType={setSearchType}
            searchType={searchType}
            searchValue={searchValue}
            onChangeSearchValue={setSearchValue}
            searchTypeOptions={searchTypeOptions}
          ></ControllBar>
          <S.MentorListWrapper>
            {dummyData.map((mentor) => (
              <UserProfileWithText
                src={mentor.profileImage}
                maintxt={mentor.name}
                isUnsubscribeActive={isUnsubscribeActive}
                subtxt="멘토"
                btntxt="팔로우 취소"
                btnOnclick={() => setIsCancelModalOpened(true)}
              ></UserProfileWithText>
            ))}
          </S.MentorListWrapper>
        </S.RightSideWrapper>
      </S.RowWrapper>

      {/* 모달1. 팔로우 취소  */}
      <Modal
        size="40%"
        centered
        opened={isCancelModalOpened}
        onClose={() => setIsCancelModalOpened(false)}
      >
        <S.CenterWrapper>
          <S.H1>팔로우를 취소하시겠습니까?</S.H1>
          <div>
            <S.Button onClick={handleCancelFollowing} type="yes">
              예
            </S.Button>
            <S.Button onClick={() => setIsCancelModalOpened(false)} type="no">
              아니오
            </S.Button>
          </div>
        </S.CenterWrapper>
      </Modal>
    </>
  );
}

export default MypageFollowingPage;
