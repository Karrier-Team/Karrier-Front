import React, { useState, useEffect, memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as utils from "../../utils/index";
import * as S from "./style";

// hooks
import useAuth from "../../hooks/useAuth";

// components
import LoginInput from "../../components/Login/LoginInput";
import LoginButton from "../../components/Login/LoginButton";
import SocialLoginSection from "../../components/Login/SocialLoginSection";

// apis
import { apiPostLoginUser } from "../../apis/users.js";

const initialErrorInfo = {
  emailError: "",
  passwordError: "",
};

export function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorInfo, setErrorInfo] = useState(initialErrorInfo);

  const { setAuth } = useAuth();

  // Login페이지로 Redirect되었다면, 로그인 이후 다시 Redirect된 페이지로 이동.
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
      const {
        email,
        role,
        nickname,
        profileImage: { fileUrl: img },
      } = result;
      setAuth({ email, password: passwordValue, role, nickname, img });
      navigate(from, { replace: true });
    } else {
      alert(result);
      setErrorInfo(initialErrorInfo);
    }
  }

  return (
    <>
      <S.Wrapper>
        <SocialLoginSection>간편 로그인</SocialLoginSection>
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
          value={passwordValue}
          handleChange={setPasswordValue}
          name="password"
          type="password"
          caption="비밀번호"
          placeholder="비밀번호를 입력해주세요"
        ></LoginInput>
        <S.ErrorParap>{errorInfo.passwordError}</S.ErrorParap>
        <LoginButton value="LOGIN" handleSubmit={handleSubmit} />
      </S.Wrapper>
    </>
  );
}

export default memo(LoginPage);
