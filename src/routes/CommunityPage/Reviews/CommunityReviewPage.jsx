import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import Div from "../../../components/atoms/Div";
// import API from apis

// components
import { Text, Space } from "@mantine/core";
import DoubleTextWithProfileImg from "../../../components/molecules/DoubleTextWithProfileImg";
import { useNavigate } from "react-router-dom";
import StarRating from "../../../components/molecules/StarRating";
import Img from "../../../components/atoms/Img";

const dummyData = {
  programNo: 1,
  programName: "컴공 맛보기",
  reviewNo: 2,
  writerNickname: "상인동의 공부벌레",
  writerProfileImage: null,
  mentorName: "고길동",
  mentorProfileImage:
    "https://karrier.s3.ap-northeast-2.amazonaws.com/profile_image/932ac58a-d41e-4dc8-8c4d-bc1a8761c9f2변경된 프로필 사진.PNG",
  title: "멘토님 너무 감사해요",
  content: "멘토님 어쩔티브이 고마워요",
  comment: "수업 잘들었나요? 수고하세요!",
  commentLikeNo: 0,
  registerDate: "2022-08-19T19:53:57.726083",
  commentDate: "2022-08-19T19:53:57.726083",
  reviewLikeNo: 0,
  star: 4.5,
  writer: false, // ?
  mentor: true, // ?
};

// /community/reviews/{major}/{programId}/review/{reviewId}
const CommunityReviewPage = () => {
  const { programNo, questionNo } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // API 사용
    // setState 안써도될것같다.
    console.log(programNo, questionNo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Wrapper>
      <Text
        size="1.3rem"
        color="var(--review-color)"
        onClick={() => navigate("../")}
        style={{ cursor: "pointer" }}
      >
        {"< 수강후기"}
      </Text>

      {/* Header */}
      <S.RowWrapper>
        <Img src={dummyData.mentorProfileImage} size={"10rem"}></Img>
        <div style={{ marginLeft: "1.5rem" }}>
          <Text weight="bold" size="2rem">
            {dummyData.programName}
          </Text>
          <Text>{dummyData.writerNickname}</Text>
          <StarRating star={dummyData.star} />
          <Text color="gray">{dummyData.registerDate}</Text>
        </div>
      </S.RowWrapper>

      {/* review */}
      <Div column pd="5rem">
        <Text size="1.5rem" weight="bold">
          {dummyData.title}
        </Text>
        <Text>{dummyData.content}</Text>
        <S.RowWrapperBtwn>
          <div style={{ display: "flex" }}>
            <Text color="var(--review-color)">좋아요</Text>
            <Space w="md"></Space>
            <Text>{dummyData.commentLikeNo}</Text>
          </div>
          <div style={{ display: "flex" }}>
            {/* TODO: 현재 로그인한 유저인 경우에만 보이도록 수정하기. */}
            <Text color="var(--review-color)">수정</Text>
            <Space w="md"></Space>
            <Text>삭제</Text>
          </div>
        </S.RowWrapperBtwn>
      </Div>
      {/* answer */}
      <Div column pd="5rem" centercontent={dummyData.comment ? null : true}>
        {dummyData.comment ? (
          <>
            <DoubleTextWithProfileImg
              src={dummyData.mentorProfileImage}
              type="upperbig"
              uppertxt={dummyData.mentorName}
              lowertxt={dummyData.answerDate}
            />
            <Text>{dummyData.comment}</Text>
            <S.RowWrapperBtwn>
              <div style={{ display: "flex" }}>
                <Text color="var(--review-color)">좋아요</Text>
                <Space w="md"></Space>
                <Text>{dummyData.commentLikeNo}</Text>
              </div>
              <div style={{ display: "flex" }}>
                {/* TODO: 현재 로그인한 유저 중 멘토인 경우에만 보이도록 수정하기. */}
                <Text color="var(--review-color)">수정</Text>
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
    </S.Wrapper>
  );
};

export default CommunityReviewPage;
