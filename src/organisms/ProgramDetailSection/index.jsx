import React, { memo } from "react";
import * as S from "./style";

function ProgramDetailSection({ data }) {
  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.Row className="lg">
          <div>프로그램 상세정보</div>
        </S.Row>
        <S.Row>
          <S.Title>온/오프라인</S.Title>
          <S.Content>{data.onlineOffline ? "온라인" : "오프라인"}</S.Content>
        </S.Row>
        <S.Row>
          <S.Title>진행장소</S.Title>
          <S.Content>{}</S.Content>
        </S.Row>
        <S.Row>
          <S.Title>진행기간</S.Title>
          <S.Content>{data.openDate + " ~ " + data.closeDate}</S.Content>
        </S.Row>
        <S.Row>
          <S.Title>진행시간</S.Title>
          <S.Content>{data.runningTime}</S.Content>
        </S.Row>
        <S.Row>
          <S.Title>최대수강인원</S.Title>
          <S.Content>{}</S.Content>
        </S.Row>
        <S.Row className="bt">
          <S.Title>가격</S.Title>
          <S.Content>{}</S.Content>
        </S.Row>
      </S.SubWrapper>
    </S.Wrapper>
  );
}

export default memo(ProgramDetailSection);
