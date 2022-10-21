import React, { useState, useEffect } from "react";
import * as S from "./style";
import * as utils from "../..//utils/index";

// components
import LoginInput from "../../components/Login/LoginInput";
import LoginButton from "../..//components/Login/LoginButton";
import SocialLoginSection from "../../components/Login/SocialLoginSection";

// apis
import { apiPostSignupUser } from "../../apis/users";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const initialErrorInfo = {
  emailError: "실제로 사용 가능한 이메일을 입력해주세요",
  passwordError: "",
  repasswordError: "",
  nicknameError: "",
};

export function SignupPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [repasswordValue, setRepasswordValue] = useState("");
  const [nicknameValue, setNicknameValue] = useState("");
  const [errorInfo, setErrorInfo] = useState(initialErrorInfo);

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!emailValue && !passwordValue && !repasswordValue && !nicknameValue)
      return;
    setErrorInfo(
      utils.validate(emailValue, passwordValue, repasswordValue, nicknameValue)
    );
  }, [emailValue, passwordValue, repasswordValue, nicknameValue]);

  async function handleSubmit() {
    const errorInfo = utils.validate(
      emailValue,
      passwordValue,
      repasswordValue,
      nicknameValue
    );
    if (
      errorInfo.emailError ||
      errorInfo.passwordError ||
      errorInfo.repasswordError ||
      errorInfo.nicknameError
    ) {
      setErrorInfo(initialErrorInfo);
      return;
    }

    // 이메일, 비밀번호, 비밀번호확인 형식이 올바르면
    const [result, status] = await apiPostSignupUser({
      email: emailValue,
      password: passwordValue,
      passwordCheck: repasswordValue,
      nickname: nicknameValue,
    });
    if (status === 200) {
      alert("회원가입 성공");
      const { email, role, nickname } = result;
      setAuth({ email, password: passwordValue, role, nickname, img: "" });
      navigate("/");
    } else {
      setEmailValue("");
      setPasswordValue("");
      setRepasswordValue("");
      setNicknameValue("");
      setErrorInfo(initialErrorInfo);
      alert(result);
    }
  }

  return (
    <>
      <S.Wrapper>
        {/* <SocialLoginSection>간편 회원가입</SocialLoginSection> */}
        <LoginInput
          value={emailValue}
          handleChange={setEmailValue}
          name="email"
          type="email"
          caption="이메일"
          placeholder="이메일을 입력해주세요"
        ></LoginInput>
        <S.ErrorParap>{errorInfo.emailError}</S.ErrorParap>
        <LoginInput
          value={nicknameValue}
          handleChange={setNicknameValue}
          name="nicknameValue"
          type="nicknameValue"
          caption="닉네임"
          placeholder="닉네임을 입력해주세요"
        ></LoginInput>
        <S.ErrorParap>{errorInfo.nicknameError}</S.ErrorParap>
        <LoginInput
          value={passwordValue}
          handleChange={setPasswordValue}
          name="password"
          type="password"
          caption="비밀번호"
          placeholder="비밀번호를 입력해주세요"
        ></LoginInput>
        <S.ErrorParap>{errorInfo.passwordError}</S.ErrorParap>
        <LoginInput
          value={repasswordValue}
          handleChange={setRepasswordValue}
          name="repassword"
          type="password"
          caption="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요"
        ></LoginInput>
        <S.ErrorParap>{errorInfo.repasswordError}</S.ErrorParap>
        <LoginButton value="회원가입 하기" handleSubmit={handleSubmit} />
      </S.Wrapper>
    </>
  );
}

export default SignupPage;
