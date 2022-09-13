import React, { memo } from "react";
import * as S from "./style";

function ProgramSummarySection({ data }) {
  return (
    <S.Wrapper>
      {/* 프로그램 이름 */}
      <S.Span>{data.title}</S.Span>
      <S.Div>
        <S.Left>멘토</S.Left>
        <S.Right>{data.mentorName}</S.Right>
      </S.Div>
      <S.Div>
        <S.Left>상태</S.Left>
        <S.Right color="var(--primary-color)">{"신청완료"}</S.Right>
      </S.Div>
      <S.Div>
        <S.Left>유형</S.Left>
        <S.Right>{data.type}</S.Right>
      </S.Div>
      <S.Div>
        <S.Left>진행기간</S.Left>
        <S.Right>{data.openDate + " ~ " + data.closeDate}</S.Right>
      </S.Div>
      <S.Div>
        <S.Left>진행시간</S.Left>
        <S.Right>{data.runningTime}</S.Right>
      </S.Div>
      <S.Div>
        <S.Left>온/오프라인</S.Left>
        <S.Right>{data.onlineOffline ? "온라인" : "오프라인"}</S.Right>
      </S.Div>
    </S.Wrapper>
  );
}

export default memo(ProgramSummarySection);
