import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  margin: 0 10%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13%;
`;

const Span = styled.span`
  font-size: 1.3em;
  font-weight: bold;
`;
const SmallSpan = styled.span`
  font-size: 1em;
  font-weight: bold;
  color: var(--bg-color);

  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const Footer = () => {
  const navigate = useNavigate();
  return (
    <StyledSection>
      <div style={{ width: "100%" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src={require("../images/footerLogo.png")}
            style={{ width: "17%", objectFit: "scale-down" }}
          />
          <LinkSection>
            <Span>주요기능</Span>
            <SmallSpan
              onClick={() => {
                navigate("/mentoring?college=IT대학&dept=컴퓨터공학과");
              }}
            >
              멘토링
            </SmallSpan>
            <SmallSpan
              onClick={() => {
                navigate("/apply");
              }}
            >
              멘토 모집
            </SmallSpan>
            <SmallSpan
              onClick={() => {
                navigate("/mypage");
              }}
            >
              마이페이지
            </SmallSpan>
            <SmallSpan
              onClick={(e) => {
                e.preventDefault();
                alert("서비스 준비중입니다!");
              }}
            >
              자원봉사
            </SmallSpan>
          </LinkSection>
          <LinkSection>
            <Span>둘러보기</Span>
            <SmallSpan
              onClick={(e) => {
                e.preventDefault();
                alert("서비스 준비중입니다!");
              }}
            >
              공지사항
            </SmallSpan>
            <SmallSpan
              onClick={() => {
                navigate("/community/qna");
              }}
            >
              질의응답
            </SmallSpan>
            <SmallSpan
              onClick={() => {
                navigate("/community/reviews");
              }}
            >
              수강후기
            </SmallSpan>
          </LinkSection>
          <LinkSection>
            <Span>기업소개</Span>
            <SmallSpan
              onClick={(e) => {
                e.preventDefault();
                alert("서비스 준비중입니다!");
              }}
            >
              서비스 소개
            </SmallSpan>
            <SmallSpan
              onClick={(e) => {
                e.preventDefault();
                alert("서비스 준비중입니다!");
              }}
            >
              특허/인증서
            </SmallSpan>
          </LinkSection>
          <LinkSection>
            <Span>고객센터</Span>
            <SmallSpan
              onClick={(e) => {
                e.preventDefault();
                alert("서비스 준비중입니다!");
              }}
            >
              카카오톡 플러스 친구
            </SmallSpan>
          </LinkSection>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5%",
          }}
        >
          <span
            style={{
              color: "var(--bg-color)",
              marginBottom: "1%",
              fontSize: "0.5em",
            }}
          >
            사업가: 김준용
          </span>
          <span style={{ color: "var(--bg-color)", fontSize: "0.7em" }}>
            사업자 등록번호: 31111582210
          </span>
        </div>
      </div>
    </StyledSection>
  );
};

export default React.memo(Footer);
