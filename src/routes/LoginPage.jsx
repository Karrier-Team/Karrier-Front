import React, { useState, memo } from "react";
import styled from "styled-components";
import * as utils from "../utils/index";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../apis/login";

// components
import LoginInput from "../components/Login/LoginInput";
import LoginButton from "../components/Login/LoginButton";
import SocialLoginSection from "../components/Login/SocialLoginSection";

// styled-components
const Wrapper = styled.div`
  height: 100%;
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

export function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorInfo, setErrorInfo] = useState({
    emailError: "",
    passwordError: "",
  });

  const navigate = useNavigate();

  async function handleSubmit() {
    const error = utils.validate(emailValue, passwordValue);
    setErrorInfo(error);
    if (error.emailError || error.passwordError) {
      console.log("hi");
      return;
    } else {
      console.log(errorInfo);
    }

    const [result, status] = await userLogin(emailValue, passwordValue);

    if (status === 200) {
      // 성공 이후 로직
      // role: [USER, ADMIN, MENTOR_APPROVE, MENTOR_WAIT]
      // 로그인 성공시 context에다가 {username, password, role} 3개 저장해두면될듯.
      navigate("/");
    } else if (status === 401) {
      window.alert("비밀번호오류");
      window.location.reload();
    }

    // if (status === 200 || status === 409) {
    //   setUserInfo({
    //     id: result.userId,
    //     email: result.email,
    //   });

    //   if (status === 200) {
    //     setSignUp({ signUpLevel: 0 });
    //     history.push("/signup");
    //   } else history.push("/find");
    // } else {
    //   alert("서버 문제로 로그인에 실패했어요 🤕");
    // }
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
