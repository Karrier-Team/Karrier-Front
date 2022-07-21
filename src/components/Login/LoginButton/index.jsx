import React, { memo } from "react";
import * as S from "./LoginButton.style";

export function LoginButton() {
  return <S.LoginButtonDiv onClick={() => console.log("clicked login button")}>LOGIN</S.LoginButtonDiv>;
}

export default memo(LoginButton);
