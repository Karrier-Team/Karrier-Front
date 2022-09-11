import React, { useState } from "react";
import CommunityNavbar from "../../organisms/CommunityNavbar/index.jsx";
import ControllBar from "../../organisms/ControllBar/index.jsx";
import Selector from "../../components/atoms/Selector";
import * as S from "./style.js";

import { Text, Modal } from "@mantine/core";
import CommunityQnAQuestionModalContent from "../../organisms/CommunityQnAQuestionModalContent/index.jsx";

import { apiPostNewQuestion } from "../../apis/mypage.js";
import { useNavigate } from "react-router-dom";
import { makeProgramList } from "../../utils/mypage.js";
import CommunityPostDiv from "../../organisms/MentorQnaPostDiv";

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
    programName: "1번 프로그램",
    questionNo: 3,
    nickname: "행복한바지",
    title: "1번프로그램 질문 제목",
    content: "1번프로그램 질문 내용 이거 참 이상하네요",
    answer: false,
    solve: true,
    modifyDate: "2022-08-20T17:01:56.707375",
    questionLikeNo: 1,
  },
  {
    programNo: 4,
    programName: "4번 프로그램",
    questionNo: 1,
    nickname: "행복한바지",
    title: "4번 프로그램 질문 제목",
    content: "4번 프로그램 질문 내용",
    answer: false,
    solve: false,
    modifyDate: "2022-08-24T20:59:49.82776",
    questionLikeNo: 0,
  },
];

function MentorQnaPage() {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState("latest");
  const [searchType, setSearchType] = useState("content");
  const [searchValue, setSearchValue] = useState("");
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);
  const [curProgramNo, setCurProgramNo] = useState(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleApiPostNewQuestion = async () => {
    const [result, status] = await apiPostNewQuestion({
      curProgramNo,
      title,
      content,
    });
    if (status === 200 || status === 201) {
      alert("성공");
      const { questionNo } = result;
      navigate(`/community/qna/${curProgramNo}/question/${questionNo}`);
    } else {
      alert(result);
    }
  };

  const handleMakeNewPostButton = () => {
    if (!curProgramNo) {
      alert("프로그램을 선택해주세요!");
      return;
    }
    setIsEditModalOpened(true);
  };

  return (
    <>
      <CommunityNavbar isAdVisible={false}>
        <div>
          <Text align="center" size="0.8em">
            여러분과 늘 함께하는 멘토
          </Text>
          <Text size="1em">무엇을 도와드릴까요?</Text>
        </div>
      </CommunityNavbar>
      <S.Wrapper>
        <Text style={{ marginTop: "0.5em" }} weight={"bold"} size="2rem">
          {"질의응답"}
        </Text>
        <ControllBar
          searchBarToTheRight
          withBtn={false}
          onClickBtn={handleMakeNewPostButton}
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
            name="프로그램"
            handleChange={setCurProgramNo}
            options={makeProgramList(dummyData)}
          ></Selector>
        </div>
        {dummyData
          .filter((question) => {
            if (!curProgramNo) return true;
            else return question.programNo === curProgramNo;
          })
          // .sort() 이친구는 나중에 구현해야지!
          .map((question) => (
            <CommunityPostDiv data={question} />
          ))}
      </S.Wrapper>

      {/* 모달 */}
      <Modal
        size="60%"
        centered
        opened={isEditModalOpened}
        onClose={() => setIsEditModalOpened(false)}
      >
        <CommunityQnAQuestionModalContent
          handleSubmit={handleApiPostNewQuestion}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
        />
      </Modal>
    </>
  );
}

export default MentorQnaPage;
