import React, { useState } from "react";
import CommunityNavbar from "../../organisms/CommunityNavbar/index.jsx";
import ControllBar from "../../organisms/ControllBar/index.jsx";
import * as S from "./style.js";

import { Modal, Space, Text } from "@mantine/core";
import ProfileList from "../../organisms/ProfileList.jsx";
import LeftSidebar from "../../components/molecules/LeftSidebar/index.jsx";

const sortTypeOptions = [
  { value: "latest", name: "최신순" },
  { value: "title", name: "제목순" },
];

const searchTypeOptions = [
  { value: "programTitle", name: "프로그램제목" },
  { value: "mentorName", name: "멘토이름" },
];

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

function MypageWishlistPage() {
  const [sortType, setSortType] = useState("latest");
  const [searchType, setSearchType] = useState("content");
  const [searchValue, setSearchValue] = useState("");
  const [isUnsubscribeActive, setIsUnsubscribeActive] = useState(false);
  const [isCancelModalOpened, setIsCancelModalOpened] = useState(false);

  const handleCancelWishlist = (event) => {
    // TODO: API 연결
    alert("찜 취소 API 연결");
  };

  return (
    <>
      <CommunityNavbar isAdVisible={false} type="wishlist">
        MY 찜 프로그램
      </CommunityNavbar>
      <S.RowWrapper>
        <LeftSidebar
          color="var(--wishlist-color)"
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
                style={{ color: "var(--wishlist-color" }}
              >
                {"좋아요"}
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
                style={{ color: "var(--wishlist-color" }}
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
            btntxt={isUnsubscribeActive ? "취소" : "찜 취소"}
            onClickBtn={() => setIsUnsubscribeActive((prev) => !prev)}
            type={isUnsubscribeActive ? "cancel" : "wishlist"}
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
          <ProfileList
            mentoData={dummyData}
            btntxt="취소"
            isUnsubscribeActive={isUnsubscribeActive}
            onBtnClick={() => setIsCancelModalOpened(true)}
          />
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
          <S.H1>찜을 취소하시겠습니까?</S.H1>
          <div>
            <S.Button onClick={handleCancelWishlist} type="yes">
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

export default MypageWishlistPage;
