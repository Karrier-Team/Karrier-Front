import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  margin: 0 10%;
`;

const LinkSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12%;
`;

const Span = styled.span`
  font-size: 1.3em;
  font-weight: bold;
`;
const SmallSpan = styled.span`
  font-size: 1em;
  font-weight: bold;
  color: var(--bg-color);
`;

const Footer = () => {
  return (
    <StyledSection>
      <div
        style={{
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
          <SmallSpan>멘토링</SmallSpan>
          <SmallSpan>멘토 모집</SmallSpan>
          <SmallSpan>마이페이지</SmallSpan>
          <SmallSpan>자원봉사</SmallSpan>
        </LinkSection>
        <LinkSection>
          <Span>둘러보기</Span>
          <SmallSpan>공지사항</SmallSpan>
          <SmallSpan>질의응답</SmallSpan>
          <SmallSpan>수강후기</SmallSpan>
        </LinkSection>
        <LinkSection>
          <Span>기업소개</Span>
          <SmallSpan>서비스 소개</SmallSpan>
          <SmallSpan>특허/인증서</SmallSpan>
        </LinkSection>
        <LinkSection>
          <Span>고객센터</Span>
          <SmallSpan>카카오톡 플러스 친구</SmallSpan>
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
    </StyledSection>
  );
};

export default React.memo(Footer);
