import React, { memo } from "react";
import * as S from "./style";

function MentorInfoSection({ data }) {
  return (
    <>
      <S.Wrapper>
        <S.Row>
          <S.Title>소속</S.Title>
          <S.Content>{data.university}</S.Content>
        </S.Row>
        <S.Row>
          <S.Title>학번</S.Title>
          <S.Content>{data.student_id}</S.Content>
        </S.Row>
        <S.Row>
          <S.Title>학과</S.Title>
          <S.Content>{data.department}</S.Content>
        </S.Row>
        <S.Row className="bt">
          <S.Title>전공</S.Title>
          <S.Content>{data.major}</S.Content>
        </S.Row>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorInfoSection);
