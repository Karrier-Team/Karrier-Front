import React, { memo } from "react";
import * as S from "./SocialLoginSection.style";

// images
import IconGoogle from "../../../images/IconGoogle.png";
import IconNaver from "../../../images/IconNaver.png";

function SocialLoginSection({ caption, placeholder }) {
  return (
    <S.SocialLoginDiv>
      <S.SocialLoginHeader>간편 회원가입</S.SocialLoginHeader>
      <S.SocialLoginIcon src={IconNaver} alt="IconNaver"></S.SocialLoginIcon>
      <S.SocialLoginIcon src={IconGoogle} alt="IconGoogle"></S.SocialLoginIcon>
    </S.SocialLoginDiv>
  );
}

export default memo(SocialLoginSection);
