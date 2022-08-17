import React, { memo } from "react";
import styled from "styled-components";
import * as S from "./MentorInfoSection.style";

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
  padding-left: 1.5em;
`;

function MentorInfoSection({ data }) {
  return (
    <>
      <Wrapper>
        <Row>
          <Title>소속</Title>
          <Content>{data.university}</Content>
        </Row>
        <Row>
          <Title>학번</Title>
          <Content>{data.student_id}</Content>
        </Row>
        <Row>
          <Title>학과</Title>
          <Content>{data.department}</Content>
        </Row>
        <Row className="bt">
          <Title>전공</Title>
          <Content>{data.major}</Content>
        </Row>
      </Wrapper>
    </>
  );
}

export default memo(MentorInfoSection);
