import React, { memo } from "react";
import * as S from "./LoginInput.style";

function LoginInput({ name, type, value, caption, placeholder, handleChange }) {
  return (
    <S.Wrapper>
      <S.LoginInputCaptionDiv>{caption}</S.LoginInputCaptionDiv>
      <S.LoginInput
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={(e) => handleChange(e.target.value)}
      ></S.LoginInput>
    </S.Wrapper>
  );
}

export default memo(LoginInput);
