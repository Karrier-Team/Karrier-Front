import React, { useState, useEffect, memo } from "react";

// components
import LoginInput from "../components/Login/LoginInput";
import LoginButton from "../components/Login/LoginButton";

// styled-components
// TODO: 1. 로그인 페이지 전체적으로 중심으로 옮기기 위해 wrapper 만들기

export function LoginPage() {
  return (
    <>
      <LoginInput caption="이메일" placeholder="이메일을 입력해주세요"></LoginInput>
      <LoginInput caption="비밀번호" placeholder="비밀번호를 입력해주세요"></LoginInput>
      <LoginButton>LOGIN</LoginButton>
    </>
  );
}

export default memo(LoginPage);
