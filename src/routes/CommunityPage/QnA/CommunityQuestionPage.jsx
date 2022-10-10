import { useRef, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import * as S from "./style";
import Div from "../../../components/atoms/Div";
import { parseDate } from "../../../utils";
// import API from apis

// components
import { Text, Space } from "@mantine/core";
import DoubleTextWithProfileImg from "../../../components/molecules/DoubleTextWithProfileImg";
import InputWithProfileImg from "../../../components/molecules/InputWithProfileImg";
import { useNavigate } from "react-router-dom";
import useAsync from "../../../hooks/useAsync";
import Loading from "../../../organisms/Loading";
import { apiGetCommunityQuestionPage } from "../../../apis/community";
import useAuth from "../../../hooks/useAuth";

// /community/qna/{major}/{programId}/question/{questionId}
const CommunityQuestionPage = () => {
  const { programNo, questionNo } = useParams();
  const navigate = useNavigate();

  const { auth } = useAuth();

  const [state] = useAsync(() =>
    apiGetCommunityQuestionPage({ programNo, questionNo })
  );
  const { loading, error, data } = state;

  if (loading) return <Loading />;
  if (error) return <Navigate to="/error" replace></Navigate>;
  if (!data) return <h1>데이터에러</h1>;

  return (
    <S.Wrapper>
      <Text
        size="1.3rem"
        color="var(--primary-color)"
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer", fontWeight: "bold" }}
      >
        {"<  질의응답"}
      </Text>

      <DoubleTextWithProfileImg
        src={auth.img}
        type="upperbig"
        uppertxt={data.title}
        lowertxt={[auth.nickname, parseDate(data.modifyDate)].join(" · ")}
      />
      {/* question */}
      <Div column pd="2em 5rem" bgcolor={"var(--bg-color-ll)"}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "1.1em",
              marginBottom: "5%",
              color: "gray",
            }}
          >
            {data.content}
          </Text>
          <S.RowWrapperBtwn>
            <div style={{ display: "flex" }}>
              <Text
                color="var(--primary-color)"
                style={{
                  fontWeight: "bold",
                }}
              >
                좋아요
              </Text>
              <Space w="md"></Space>
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                {data.questionLikeNo}
              </Text>
            </div>
            <div style={{ display: "flex", visibility: "hidden" }}>
              {/* TODO: 현재 로그인한 유저인 경우에만 보이도록 수정하기. */}
              <Text
                style={{
                  fontWeight: "bold",
                }}
                color="var(--primary-color)"
              >
                수정
              </Text>
              <Space w="md"></Space>
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                삭제
              </Text>
            </div>
          </S.RowWrapperBtwn>
        </div>
      </Div>

      {/* answer */}
      <Div
        column
        pd="2em 5rem"
        centercontent={data.answer ? null : true}
        bgcolor={"var( --bg-color-ll)"}
      >
        {data.answer ? (
          <>
            <div style={{ marginBottom: "3%" }}>
              <DoubleTextWithProfileImg
                src={data.mentorProfileImage}
                type={"upperMid"}
                uppertxt={data.mentorName}
                lowertxt={
                  data.answer ? parseDate(data.answerDate) : "답변하지않음"
                }
              />
            </div>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "1.1em",
                marginBottom: "5%",
                color: "gray",
              }}
            >
              {data.answer}
            </Text>
            <S.RowWrapperBtwn>
              <div style={{ display: "flex" }}>
                <Text
                  style={{ fontWeight: "bold" }}
                  color="var(--primary-color)"
                >
                  좋아요
                </Text>
                <Space w="md"></Space>
                <Text style={{ fontWeight: "bold" }}>{data.answerLikeNo}</Text>
              </div>
              <div style={{ display: "flex", visibility: "hidden" }}>
                {/* TODO: 현재 로그인한 유저 중 멘토인 경우에만 보이도록 수정하기. */}
                <Text
                  style={{ fontWeight: "bold" }}
                  color="var(--primary-color)"
                >
                  수정
                </Text>
                <Space w="md"></Space>
                <Text style={{ fontWeight: "bold" }}>삭제</Text>
              </div>
            </S.RowWrapperBtwn>
          </>
        ) : (
          <Text
            size="1.3rem"
            weight="bold"
            color="gray"
            style={{ padding: "7rem" }}
          >
            아직 멘토의 답변이 없습니다.
          </Text>
        )}
      </Div>

      {/* comments */}
      <Div pd="2em 5rem" column bgcolor={"var(--bg-color-ll)"}>
        <S.RowWrapper>
          <Text style={{ fontWeight: "bold", fontSize: "1.5em" }}>댓글</Text>
          <Space w="xl"></Space>

          <Text
            style={{ fontWeight: "bold", color: "gray", fontSize: "1.3em" }}
          >
            {data.questionCommentListDto.length}
          </Text>
        </S.RowWrapper>
        <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <InputWithProfileImg src={auth?.img} />
          {data.questionCommentListDto.map((comment) => (
            <DoubleTextWithProfileImg
              key={comment.commentNo}
              src={comment.writerProfileImage}
              type="3.5rem"
              uppertxt={[
                comment.writerName,
                parseDate(comment.commentDate),
              ].join(" · ")}
              lowertxt={comment.content}
            />
          ))}
        </div>
      </Div>
    </S.Wrapper>
  );
};

export default CommunityQuestionPage;
