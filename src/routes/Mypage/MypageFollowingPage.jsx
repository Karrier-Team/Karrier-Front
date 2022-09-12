import React, { useState } from "react";
import CommunityNavbar from "../../organisms/CommunityNavbar/index.jsx";
import ControllBar from "../../organisms/ControllBar/index.jsx";
import * as S from "./style.js";

import { Text, Modal, Space } from "@mantine/core";
import LeftSidebar from "../../components/molecules/LeftSidebar/index.jsx";

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
    name: "나고고",
    major: "컴퓨터학부",
    profileImage: "d",
  },
  {
    name: "다고고",
    major: "컴퓨터학부",
    profileImage: "d",
  },
];

function MypageFollowingPage() {
  const [sortType, setSortType] = useState("latest");
  const [searchType, setSearchType] = useState("content");
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);

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
            hideSortingbar
            type="wishlist"
            spacebetween={true}
            withBtn={true}
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
          {dummyData.map((e) => (
            <h1>{e.name}</h1>
          ))}
        </S.RightSideWrapper>
      </S.RowWrapper>
    </>
  );
}

export default MypageFollowingPage;
