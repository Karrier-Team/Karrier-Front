import React, { useState } from "react";
import CommunityNavbar from "../../organisms/CommunityNavbar/index.jsx";
import ControllBar from "../../organisms/ControllBar/index.jsx";
import Selector from "../../components/atoms/Selector";
import * as S from "./style.js";

import { Text } from "@mantine/core";

import {
  getRatingByOneDecimalPoint,
  makeProgramList,
} from "../../utils/mypage.js";
import MentorReviewsPostDiv from "../../organisms/MentorReviewsPostDiv";

const sortTypeOptions = [
  { value: "latest", name: "최신순" },
  { value: "unsolved", name: "미해결" },
  { value: "solved", name: "해결" },
];

const searchTypeOptions = [
  { value: "content", name: "질문내용" },
  { value: "title", name: "질문제목" },
  { value: "nickname", name: "닉네임" },
];

const dummyData = [
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4,
    reviewStar: 3.5,
    reviewNo: 1,
    nickname: "good",
    title: "수강후기 제목입니다",
    content: "수강후기 내용입니다 ",
    comment: true,
    registerDate: "2022-09-04T17:46:22.67473",
    reviewLikeNo: 0,
  },
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4,
    reviewStar: 3.5,
    reviewNo: 2,
    nickname: "good",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: false,
    registerDate: "2022-09-04T19:21:11.150012",
    reviewLikeNo: 0,
  },
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4,
    reviewStar: 4.5,
    reviewNo: 4,
    nickname: "good",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: false,
    registerDate: "2022-09-04T19:22:10.643497",
    reviewLikeNo: 0,
  },
];

function MentorReviewsPage() {
  const [sortType, setSortType] = useState("latest");
  const [searchType, setSearchType] = useState("content");
  const [searchValue, setSearchValue] = useState("");
  const [curProgramNo, setCurProgramNo] = useState(null);

  return (
    <>
      <CommunityNavbar type="reviews" isAdVisible={false}>
        수강후기 관리
      </CommunityNavbar>
      <S.Wrapper>
        <Text style={{ marginTop: "0.5em" }} weight={"bold"} size="2rem">
          수강후기 관리
        </Text>
        <ControllBar
          type="reviews"
          searchBarToTheRight
          withBtn={false}
          sortType={sortType}
          sortTypeOptions={sortTypeOptions}
          onChangeSortType={setSortType}
          onChangeSearchType={setSearchType}
          searchType={searchType}
          searchValue={searchValue}
          onChangeSearchValue={setSearchValue}
          searchTypeOptions={searchTypeOptions}
        ></ControllBar>
        <S.WrapperSpaceBtwn>
          <Selector
            width="30rem"
            name="프로그램"
            handleChange={setCurProgramNo}
            options={makeProgramList(dummyData)}
          ></Selector>
          <span>
            <S.StyledText bold="bold">평균평점⭐️ </S.StyledText>
            <S.StyledText bold="bold" color="var(--reviews-color)">
              {getRatingByOneDecimalPoint(dummyData[0].averageStar)}
            </S.StyledText>
          </span>
        </S.WrapperSpaceBtwn>
        {dummyData
          .filter((question) => {
            if (!curProgramNo) return true;
            else return question.programNo === curProgramNo;
          })
          // .sort() 이친구는 나중에 구현해야지!
          .map((question) => (
            <MentorReviewsPostDiv type="reviews" data={question} />
          ))}
      </S.Wrapper>
    </>
  );
}

export default MentorReviewsPage;
