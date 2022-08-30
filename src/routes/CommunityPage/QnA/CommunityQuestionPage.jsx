import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import Div from "../../../components/atoms/Div";
// import API from apis

// components
import { Text, Space } from "@mantine/core";
import DoubleTextWithProfileImg from "../../../components/molecules/DoubleTextWithProfileImg";
import InputWithProfileImg from "../../../components/molecules/InputWithProfileImg";
import { useNavigate } from "react-router-dom";

const dummyData = {
  programNo: 1,
  programName: "컴공 맛보기",
  questionNo: 3,
  writerNickname: "행복한바지",
  writerProfileImage: null,
  mentorName: "고길동",
  mentorProfileImage:
    "https://karrier.s3.ap-northeast-2.amazonaws.com/profile_image/932ac58a-d41e-4dc8-8c4d-bc1a8761c9f2변경된 프로필 사진.PNG",
  title: "질문 제목",
  content: "질문 내용",
  answer: "질문 답변",
  modifyDate: "2022-08-20T17:01:56.707375",
  answerDate: null,
  questionLikeNo: 1,
  answerLikeNo: 0,
  writer: false,
  mentor: true,
  questionCommentListDto: [
    {
      commentNo: 1,
      content: "도움이 됐어요",
      writerName: "고길동",
      writerProfileImage:
        "https://karrier.s3.ap-northeast-2.amazonaws.com/profile_image/932ac58a-d41e-4dc8-8c4d-bc1a8761c9f2변경된 프로필 사진.PNG",
      writer: true,
      commentDate: "2022-08-21T15:07:01.894576",
    },
    {
      commentNo: 2,
      content: "저도 궁금해요",
      writerName: "Hi",
      writerProfileImage: null,
      writer: false,
      commentDate: "2022-08-21T15:07:12.315236",
    },
  ],
};

// /community/qna/{major}/{programId}/question/{questionId}
const CommunityQuestionPage = () => {
  const { programNo, questionNo } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // API 사용
    // setState 안써도될것같다.
    console.log(programNo, questionNo);
  }, []);

  return (
    <S.Wrapper>
      <Text
        size="1.3rem"
        color="var(--primary-color)"
        onClick={() => navigate("../")}
        style={{ cursor: "pointer" }}
      >
        {"< 질의응답"}
      </Text>

      <DoubleTextWithProfileImg
        src={dummyData.writerProfileImage}
        type="upperbig"
        uppertxt={dummyData.title}
        lowertxt={[dummyData.writer, dummyData.modifyDate].join(" · ")}
      />
      {/* question */}
      <Div column pd="5rem">
        <Text>{dummyData.content}</Text>
        <S.RowWrapperBtwn>
          <div style={{ display: "flex" }}>
            <Text color="var(--primary-color)">좋아요</Text>
            <Space w="md"></Space>
            <Text>{dummyData.questionLikeNo}</Text>
          </div>
          <div style={{ display: "flex" }}>
            {/* TODO: 현재 로그인한 유저인 경우에만 보이도록 수정하기. */}
            <Text color="var(--primary-color)">수정</Text>
            <Space w="md"></Space>
            <Text>삭제</Text>
          </div>
        </S.RowWrapperBtwn>
      </Div>

      {/* answer */}
      <Div column pd="5rem" centercontent={dummyData.answer ? null : true}>
        {dummyData.answer ? (
          <>
            <DoubleTextWithProfileImg
              src={dummyData.mentorProfileImage}
              type="upperbig"
              uppertxt={dummyData.mentorName}
              lowertxt={dummyData.answerDate}
            />
            <Text>{dummyData.answer}</Text>
            <S.RowWrapperBtwn>
              <div style={{ display: "flex" }}>
                <Text color="var(--primary-color)">좋아요</Text>
                <Space w="md"></Space>
                <Text>{dummyData.answerLikeNo}</Text>
              </div>
              <div style={{ display: "flex" }}>
                {/* TODO: 현재 로그인한 유저 중 멘토인 경우에만 보이도록 수정하기. */}
                <Text color="var(--primary-color)">수정</Text>
                <Space w="md"></Space>
                <Text>삭제</Text>
              </div>
            </S.RowWrapperBtwn>
          </>
        ) : (
          <Text size="1.5rem" color="gray" style={{ padding: "7rem" }}>
            아직 멘토의 답변이 없습니다.
          </Text>
        )}
      </Div>

      {/* comments */}
      <Div pd="3.5rem" column>
        <S.RowWrapper>
          <Text size="xl">댓글</Text>
          <Space w="xl"></Space>
          <Text>{dummyData.questionCommentListDto.length}</Text>
        </S.RowWrapper>
        <InputWithProfileImg src={dummyData.writerProfileImage} />
        {dummyData.questionCommentListDto.map((comment) => (
          <DoubleTextWithProfileImg
            key={comment.commentNo}
            src={comment.writerProfileImage}
            type="lowerbig"
            uppertxt={[comment.writerName, comment.commentDate].join(" · ")}
            lowertxt={comment.content}
          />
        ))}
      </Div>
    </S.Wrapper>
  );
};

export default CommunityQuestionPage;
