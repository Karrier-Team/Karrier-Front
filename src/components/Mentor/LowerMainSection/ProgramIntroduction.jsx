import React, { memo } from "react";
// import styled from "styled-components";
import * as S from "./LowerMainSection.stlye";

function ProgramIntroduction({ content }) {
  return (
    <>
      <S.StyledH1>프로그램소개</S.StyledH1>
      <p>{content}</p>
    </>
  );
}

export default memo(ProgramIntroduction);
