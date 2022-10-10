import React, { memo } from "react";
import styled from "styled-components";
import * as S from "./style";

// sub components
import ProgramIntroduction from "./ProgramIntroduction";
import Nodata from "../../../organisms/Nodata";

const Wrapper = styled.div`
  padding: 1.5rem;
`;

function LowerMainSection({ type, content }) {
  return (
    <>
      <Wrapper>
        {(() => {
          switch (type) {
            case "introduction":
              return <ProgramIntroduction content={content} />;
            case "curriculum":
              return (
                <S.Wrapper>
                  <S.StyledH1>커리큘럼</S.StyledH1>
                  <Nodata></Nodata>
                </S.Wrapper>
              );
            case "review":
              return (
                <S.Wrapper>
                  <S.StyledH1>수강후기</S.StyledH1>
                  <Nodata></Nodata>
                </S.Wrapper>
              );
            case "qna":
              return (
                <S.Wrapper>
                  <S.StyledH1>질의응답</S.StyledH1>
                  <Nodata></Nodata>
                </S.Wrapper>
              );
            case "menteeInfo":
              return (
                <S.Wrapper>
                  <S.StyledH1>멘티정보</S.StyledH1>
                  <Nodata></Nodata>
                </S.Wrapper>
              );
            default:
              <S.StyledH1>로딩중</S.StyledH1>;
          }
        })()}
      </Wrapper>
    </>
  );
}

export default memo(LowerMainSection);
