import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";

// components
import LoginInput from "../components/Login/LoginInput";
import LoginButton from "../components/Login/LoginButton";
import SocialLoginSection from "../components/Login/SocialLoginSection";

// styled-components
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function LoginPage() {
  return (
    <>
      <Wrapper>
        <SocialLoginSection></SocialLoginSection>
        <LoginInput caption="이메일" placeholder="이메일을 입력해주세요"></LoginInput>
        <LoginInput caption="비밀번호" placeholder="비밀번호를 입력해주세요"></LoginInput>
        <LoginButton>LOGIN</LoginButton>
      </Wrapper>
    </>
  );
}

export default memo(LoginPage);
