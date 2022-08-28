import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import Div from "../../../components/atoms/Div";
// import API from apis

// components
import { Text } from "@mantine/core";

// /community/qna/{major}/{programId}/question/{questionId}
const CommunityQuestionPage = () => {
  const { programNo, questionNo } = useParams();

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
    answer: null,
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

  useEffect(() => {
    // API 사용
    // setState 안써도될것같다.
    console.log(programNo, questionNo);
  }, []);

  return (
    <S.Wrapper>
      <Div height="15rem" centercontent>
        {dummyData.answer ? (
          <div>멘토 답변</div>
        ) : (
          <Text size="1.5rem" color="gray">
            아직 멘토의 답변이 없습니다.
          </Text>
        )}
      </Div>
    </S.Wrapper>
  );
};

export default CommunityQuestionPage;
