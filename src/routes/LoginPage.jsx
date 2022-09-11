import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as utils from "../utils/index";

// components
import LoginInput from "../components/Login/LoginInput";
import LoginButton from "../components/Login/LoginButton";
import SocialLoginSection from "../components/Login/SocialLoginSection";

// apis
import { apiPostLoginUser } from "../apis/users.js";

// styled-components
const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorParap = styled.div`
  color: red;
  font-size: 0.8rem;
`;

const initialErrorInfo = {
  emailError: "",
  passwordError: "",
};

export function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorInfo, setErrorInfo] = useState(initialErrorInfo);

  const navigate = useNavigate();

  useEffect(() => {
    if (emailValue === "" && passwordValue === "") return;
    setErrorInfo(utils.validate(emailValue, passwordValue));
  }, [emailValue, passwordValue]);

  async function handleSubmit() {
    const errorInfo = utils.validate(emailValue, passwordValue);
    if (errorInfo.emailError || errorInfo.passwordError) {
      setErrorInfo(errorInfo);
      return;
    }

    // 이메일, 비밀번호 형식이 올바르면
    const [result, status] = await apiPostLoginUser({
      email: emailValue,
      password: passwordValue,
    });
    if (status === 200) {
      alert("로그인 성공");
      // 유저정보를 Context에 저장하기
      // 특정 주소로 navigate() 하기
    } else {
      alert(result);
      setErrorInfo(initialErrorInfo);
    }
  }

  return (
    <>
      <Wrapper>
        <SocialLoginSection></SocialLoginSection>
        <LoginInput
          handleChange={setEmailValue}
          name="email"
          type="email"
          caption="이메일"
          placeholder="이메일을 입력해주세요"
        ></LoginInput>
        <ErrorParap>{errorInfo.emailError}</ErrorParap>
        <LoginInput
          handleChange={setPasswordValue}
          name="password"
          type="password"
          caption="비밀번호"
          placeholder="비밀번호를 입력해주세요"
        ></LoginInput>
        <ErrorParap>{errorInfo.passwordError}</ErrorParap>
        <LoginButton handleSubmit={handleSubmit} />
      </Wrapper>
    </>
  );
}

export default memo(LoginPage);
