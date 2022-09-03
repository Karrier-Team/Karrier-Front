import React, { useState } from "react";
import CommunityPostDiv from "../../organisms/CommunityPostDiv/index.jsx";
import CommunityNavbar from "../../organisms/CommunityNavbar/index.jsx";
import ControllBar from "../../organisms/ControllBar/index.jsx";
import Selector from "../../components/atoms/Selector";
import * as S from "./style.js";

import { Text, Modal } from "@mantine/core";

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
    questionNo: 3,
    nickname: "행복한바지",
    title: "질문 제목",
    content: "질문 내용",
    answer: false,
    solve: false,
    modifyDate: "2022-08-20T17:01:56.707375",
    questionLikeNo: 1,
  },
  {
    programNo: 4,
    programName: "라라",
    questionNo: 1,
    nickname: "행복한바지",
    title: "질문 제목",
    content: "질문 내용",
    answer: false,
    solve: false,
    modifyDate: "2022-08-24T20:59:49.82776",
    questionLikeNo: 0,
  },
];

function MypageQnAPage() {
  const [sortType, setSortType] = useState("latest");
  const [searchType, setSearchType] = useState("content");
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [curProgram, setCurProgram] = useState("");

  return (
    <>
      <CommunityNavbar isAdVisible={false} type="qna">
        마이페이지 질의응답
      </CommunityNavbar>
      <S.Wrapper>
        <Text style={{ marginTop: "0.5em" }} weight={"bold"} size="2rem">
          {"MY 질의응답"}
        </Text>
        <ControllBar
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
        <div style={{ width: "30rem" }}>
          <Selector
            name={"프로그램"}
            handleChange={setCurProgram}
            options={dummyData.map((question) => {
              return { name: question.programName };
            })}
          ></Selector>
        </div>
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
        {dummyData
          .filter((question) => {
            if (curProgram === "")
              return true; // 아직 선택된 프로그램이 없을때는 모든 질의응답을 보여줌.
            else return question.programName === curProgram;
          })
          // .sort() 이친구는 나중에 구현해야지!
          .map((question) => (
            <CommunityPostDiv key={question.questionNo} data={question} />
          ))}
      </S.Wrapper>
    </>
  );
}

export default MypageQnAPage;
