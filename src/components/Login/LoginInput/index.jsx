import React, { memo } from "react";
import * as S from "./LoginInput.style";

function LoginInput({ caption, placeholder }) {
  return (
    <S.Wrapper>
      <S.LoginInputCaptionDiv>{caption}</S.LoginInputCaptionDiv>
      <S.LoginInput placeholder={placeholder}></S.LoginInput>
    </S.Wrapper>
  );
}

export default memo(LoginInput);
