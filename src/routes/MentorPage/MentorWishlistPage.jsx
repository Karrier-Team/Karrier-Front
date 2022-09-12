import React, { useState } from "react";
import CommunityNavbar from "../../organisms/CommunityNavbar/index.jsx";
import ControllBar from "../../organisms/ControllBar/index.jsx";
import * as S from "./style.js";

import { Modal, Space, Text } from "@mantine/core";
import ProfileList from "../../components/Profile/ProfileList.jsx";
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

function MypageQnAPage() {
  const [sortType, setSortType] = useState("latest");
  const [searchType, setSearchType] = useState("content");
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <>
      <CommunityNavbar isAdVisible={false} type="wishlist">
        MY 찜 프로그램
      </CommunityNavbar>
      <S.RowWrapper>
        <LeftSidebar
          color="var(--wishlist-color)"
          items={[
            { link: "/mentor/wishlist", name: "MY 찜" },
            { link: "/mentor/followers", name: "MY 팔로우" },
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
            type="wishlist"
            spacebetween={true}
            withBtn={false}
            onClickBtn={setIsModalOpened}
            sortType={sortType}
            sortTypeOptions={sortTypeOptions}
            onChangeSortType={setSortType}
            onChangeSearchType={setSearchType}
            searchType={searchType}
            searchValue={searchValue}
            onChangeSearchValue={setSearchValue}
            searchTypeOptions={searchTypeOptions}
          ></ControllBar>
          <Modal
            size="60%"
            centered
            opened={isModalOpened}
            onClose={() => setIsModalOpened(false)}
          >
            <S.CenterWrapper>
              <S.H1>질문이 해결되셨습니까?</S.H1>
              <div>
                <S.Button
                  onClick={() => {
                    console.log("API");
                    alert("질문해결완료");
                  }}
                  type="yes"
                >
                  예
                </S.Button>
                <S.Button onClick={() => setIsModalOpened(false)} type="no">
                  아니오
                </S.Button>
              </div>
            </S.CenterWrapper>
          </Modal>
          <ProfileList mentoData={dummyData} />
        </S.RightSideWrapper>
      </S.RowWrapper>
    </>
  );
}

export default MypageQnAPage;
