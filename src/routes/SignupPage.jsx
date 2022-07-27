import React, { useState, useEffect, memo, useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as utils from "../utils/index";

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

const ErrorParap = styled.div`
  color: red;
  font-size: 0.8rem;
`;

export function SignupPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [repasswordValue, setRepasswordValue] = useState("");
  const [errorInfo, setErrorInfo] = useState({ emailError: "", passwordError: "", repasswordError: "" });

  function handleSubmit() {
    setErrorInfo(utils.validate(emailValue, passwordValue, repasswordValue));
    //TODO: 이메일과 비밀번호 값을 백엔드로 전달 후 회원가입 진행
  }

  return (
    <>
      <Wrapper>
        <SocialLoginSection></SocialLoginSection>
        <LoginInput handleChange={setEmailValue} name="email" type="email" caption="이메일" placeholder="이메일을 입력해주세요"></LoginInput>
        <ErrorParap>{errorInfo.emailError}</ErrorParap>
        <LoginInput handleChange={setPasswordValue} name="password" type="password" caption="비밀번호" placeholder="비밀번호를 입력해주세요"></LoginInput>
        <ErrorParap>{errorInfo.passwordError}</ErrorParap>
        <LoginInput handleChange={setRepasswordValue} name="repassword" type="password" caption="비밀번호 확인" placeholder="비밀번호를 입력해주세요"></LoginInput>
        <ErrorParap>{errorInfo.repasswordError}</ErrorParap>
        <LoginButton handleSubmit={handleSubmit} />
      </Wrapper>
    </>
  );
}

export default SignupPage;
