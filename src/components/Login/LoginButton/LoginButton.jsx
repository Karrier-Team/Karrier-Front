import React, { memo } from "react";
import * as S from "./LoginButton.style";

export function LoginButton() {
  return <S.ButtonWrapper onClick={() => console.log("clicked login button")}>LOGIN</S.ButtonWrapper>;
}

export function ExportTestDiv() {
  return <div>ExportTestDiv</div>;
}

export default memo(LoginButton);
