import React, { memo } from "react";
import * as S from "./style";

function MentorInfoSection({ data }) {
  return (
    <>
      <S.Wrapper>
        <S.Row>
          <S.Title>소속</S.Title>
          <S.Content>{data.university || "소속이 없습니다"}</S.Content>
        </S.Row>
        <S.Row>
          <S.Title>학번</S.Title>
          <S.Content>{data.studentId || "학번이 없습니다"}</S.Content>
        </S.Row>
        <S.Row>
          <S.Title>학과</S.Title>
          <S.Content>{data.department || "학과가 없습니다"}</S.Content>
        </S.Row>
        <S.Row className="bt">
          <S.Title>전공</S.Title>
          <S.Content>{data.major || "전공이 없습니다"}</S.Content>
        </S.Row>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorInfoSection);
