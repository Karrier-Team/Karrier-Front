import React, { memo } from "react";
import * as S from "./LoginButton.style";

export function LoginButton({ handleSubmit }) {
  return <S.LoginButtonInput onClick={handleSubmit} value="LOGIN" type="button"></S.LoginButtonInput>;
}

export default memo(LoginButton);
