import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import * as S from "./MentorInfoSection";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Row = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;

  display: flex;
  align-items: center;
  border-top: 1px solid #e1e1e1;

  &.bt {
    border-bottom: 1px solid #e1e1e1;
  }
`;

const Title = styled(S.Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  text-align: center;
  box-sizing: border-box;
  border-right: 1px solid #e1e1e1;
  background-color: #f3f3f3;
`;

const Content = styled(S.Text)`
  display: flex;
  align-items: center;
  width: 75%;
  height: 100%;
  padding-left: 10%;
`;

function MentorInfoSection() {
  return (
    <>
      <Wrapper>
        <Row>
          <Title>소속</Title>
          <Content>경북대학교</Content>
        </Row>
        <Row>
          <Title>학번</Title>
          <Content>18학번</Content>
        </Row>
        <Row>
          <Title>학과</Title>
          <Content>IT대학 컴퓨터학부</Content>
        </Row>
        <Row className="bt">
          <Title>전공</Title>
          <Content>글로벌 소프트웨어 융합 전공</Content>
        </Row>
      </Wrapper>
    </>
  );
}

export default memo(MentorInfoSection);
