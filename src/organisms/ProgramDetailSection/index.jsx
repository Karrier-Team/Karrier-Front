import React, { memo } from "react";
import * as S from "./style";

function ProgramDetailSection({ data }) {
  const NOTEXIST = "정보가 없습니다";

  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.Row className="lg">
          <div>프로그램 상세정보</div>
        </S.Row>
        <S.Row>
          <S.Title>온/오프라인</S.Title>
          <S.Content>
            {data.onlineOffline ? "온라인" : "오프라인" || NOTEXIST}
          </S.Content>
        </S.Row>
        <S.Row>
          <S.Title>진행장소</S.Title>
          <S.Content>{data.offlinePlace || NOTEXIST}</S.Content>
        </S.Row>
        <S.Row>
          <S.Title>진행기간</S.Title>
          <S.Content fit>
            {data.openDate && data.closeDate
              ? data.openDate + " ~ " + data.closeDate
              : NOTEXIST}
          </S.Content>
        </S.Row>
        <S.Row>
          <S.Title>진행시간</S.Title>
          <S.Content fit>{data.runningTime || NOTEXIST}</S.Content>
        </S.Row>
        <S.Row>
          <S.Title>최대수강인원</S.Title>
          <S.Content>{data.maxPeople || NOTEXIST}</S.Content>
        </S.Row>
        <S.Row className="bt">
          <S.Title>가격</S.Title>
          <S.Content>{data.price || NOTEXIST}</S.Content>
        </S.Row>
      </S.SubWrapper>
    </S.Wrapper>
  );
}

export default memo(ProgramDetailSection);
