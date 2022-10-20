import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SocialLoginSection.style";
// images
import IconGoogle from "../../../images/IconGoogle.png";
import IconNaver from "../../../images/IconNaver.png";
import { apiGetGoogleLoginUser } from "../../../apis/users";

function SocialLoginSection({ children }) {
  const navigate = useNavigate();
  return (
    <S.SocialLoginDiv>
      <S.SocialLoginHeader>{children}</S.SocialLoginHeader>
      <S.SocialLoginIcon src={IconNaver} alt="IconNaver"></S.SocialLoginIcon>
      <S.SocialLoginIcon
        src={IconGoogle}
        alt="IconGoogle"
        onClick={() => {
          window.location.href =
            "https://www.karrier.ml/oauth2/authorization/google";
        }}
      ></S.SocialLoginIcon>
    </S.SocialLoginDiv>
  );
}

export default memo(SocialLoginSection);
