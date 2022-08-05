import React, { useState, useEffect, useCallback, memo } from "react";
import styled from "styled-components";
import * as S from "./LowerMainSection.stlye";

// sub components
import ProgramIntroduction from "./ProgramIntroduction";

const Wrapper = styled.div`
  padding: 20px;
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
              return <S.StyledH1>커리큘럼</S.StyledH1>;
            case "review":
              return <S.StyledH1>수강후기</S.StyledH1>;
            case "qna":
              return <S.StyledH1>질의응답</S.StyledH1>;
            default:
              <S.StyledH1>로딩중</S.StyledH1>;
          }
        })()}
      </Wrapper>
    </>
  );
}

export default memo(LowerMainSection);
