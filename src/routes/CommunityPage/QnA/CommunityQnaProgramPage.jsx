import React, { useState } from "react";
import CommunityNavbar from "../../../organisms/CommunityNavbar";
import ControllBar from "../../../organisms/ControllBar";
import CommunityPostDiv from "../../../organisms/CommunityPostDiv";
import { Modal, Text } from "@mantine/core";
import * as S from "./style.js";
import CommunityQnAQuestionModalContent from "../../../organisms/CommunityQnAQuestionModalContent";
import useAsync from "../../../hooks/useAsync";
import Loading from "../../../organisms/Loading";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { apiGetCommunityQnaProgramPage } from "../../../apis/community";
import { apiPostNewQuestion } from "../../../apis/community";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import Nodata from "../../../organisms/Nodata";
import useAuth from "../../../hooks/useAuth";

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

const dummydata = {
  program_no: "1",
  title: "고3 대비 컴퓨터 공학과의 진실",
  questions: [
    {
      question_no: "1",
      nickname: "소식돼지",
      title: "경북대학교 컴퓨터 공학과 세부 학과는 뭐가있나요?",
      content:
        "안녕하세요 현재 컴퓨터공학과에 진학하고 싶어하는 고3입니다. 안녕하세요 현재 컴퓨터공학과에 진학하고 싶어하는 고3입니다. 안녕하세요 현재 컴퓨터공학과에 진학하고 싶어하는 고3입니다. 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라",
      modify_date: new Date().toLocaleDateString() + "",
      question_like_no: "10",
      solve: "true",
    },
    {
      question_no: "2",
      nickname: "소식돼지",
      title: "경북대학교 컴퓨터 공학과 세부 학과는 뭐가있나요?",
      content:
        "안녕하세요 현재 컴퓨터공학과에 진학하고 싶어하는 고3입니다. 저는 평소에 컴퓨터에 대해 좋아하고 관심이 참 많은데요..",
      modify_date: new Date().toLocaleDateString() + "",
      question_like_no: "9",
      solve: "false",
    },
  ],
};

function CommunityQnaProgramPage() {
  const [sortType, setSortType] = useState("latest");
  const [searchType, setSearchType] = useState("content");
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);

  const navigate = useNavigate();
  const { programNo } = useParams();

  const { auth } = useAuth();

  const handleApiPostNewQuestion = async () => {
    if (!auth?.email) {
      alert("로그인이 필요합니다!");
      navigate("/login");
      return;
    }
    const [result, status] = await apiPostNewQuestion({
      programNo,
      title,
      content,
    });
    if (status === 200 || status === 201) {
      alert("성공");
      const { questionNo } = result;
      navigate(`/community/qna/${programNo}/question/${questionNo}`);
    } else {
      alert(result);
    }
  };

  // states for Modal content
  const { state: locationState } = useLocation();
  const programTitle = useRef(
    (locationState && locationState["title"]) || "프로그램명"
  );

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [state] = useAsync(() => apiGetCommunityQnaProgramPage({ programNo }));
  const { loading, error, data } = state;

  if (loading) return <Loading />;
  if (error) return <Navigate to="/error" replace></Navigate>;
  if (!data) return <h1>데이터에러</h1>;

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
      <S.WrapperNarrow>
        <Text style={{ marginTop: "0.5em" }} weight={"bold"} size="2rem">
          {"질의응답"}
        </Text>
        <ControllBar
          searchBarToTheRight
          withBtn
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
          size="50%"
          centered
          opened={isModalOpened}
          onClose={() => setIsModalOpened(false)}
        >
          <CommunityQnAQuestionModalContent
            handleSubmit={handleApiPostNewQuestion}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
          />
        </Modal>
        <Text weight={"bold"} color="var(--primary-color)" size="2.5rem">
          {programTitle.current}
        </Text>
        {data.length <= 0 ? (
          <Nodata contentType="질문" />
        ) : (
          data.map((question) => <CommunityPostDiv data={question} />).reverse()
        )}
      </S.WrapperNarrow>
    </>
  );
}

export default CommunityQnaProgramPage;
