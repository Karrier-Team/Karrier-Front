import React, { useState } from "react";
import CommunityNavbar from "../../organisms/CommunityNavbar/index.jsx";
import ControllBar from "../../organisms/ControllBar/index.jsx";
import Selector from "../../components/atoms/Selector";
import * as S from "./style.js";
import Loading from "react-loading";

import { Text, Modal } from "@mantine/core";
import MypageQnaPostDiv from "../../organisms/MypageQnaPostDiv";
import CommunityQnAQuestionModalContent from "../../organisms/CommunityQnAQuestionModalContent/index.jsx";

import { apiGetMypageQnaPage, apiPostNewQuestion } from "../../apis/mypage.js";
import { Navigate, useNavigate } from "react-router-dom";
import { makeProgramList } from "../../utils/mypage.js";
import useAsync from "../../hooks/useAsync.js";

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

function MypageQnAPage() {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState("latest");
  const [searchType, setSearchType] = useState("content");
  const [searchValue, setSearchValue] = useState("");
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);
  const [curProgramNo, setCurProgramNo] = useState(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [state] = useAsync(apiGetMypageQnaPage);
  const { loading, error, data } = state;

  if (loading) return <Loading />;
  if (error) return <Navigate to="/error" replace></Navigate>;
  if (!data) return <h1>데이터에러</h1>;

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
      <CommunityNavbar isAdVisible={false} type="qna">
        마이페이지 질의응답
      </CommunityNavbar>
      <S.Wrapper>
        <Text style={{ marginTop: "0.5em" }} weight={"bold"} size="2rem">
          {"MY 질의응답"}
        </Text>
        <ControllBar
          searchBarToTheRight
          withBtn={true}
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
            type="mypage"
            name="프로그램"
            handleChange={setCurProgramNo}
            options={makeProgramList(data)}
          ></Selector>
        </div>
        {data
          .filter((question) => {
            if (!curProgramNo) return true;
            else return question.programNo === curProgramNo;
          })
          // .sort() 이친구는 나중에 구현해야지!
          .map((question) => (
            <MypageQnaPostDiv
              setTitle={setTitle}
              setContent={setContent}
              key={question.questionNo}
              data={question}
            />
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

export default MypageQnAPage;
