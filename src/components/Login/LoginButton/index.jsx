import React, { memo } from "react";
import * as S from "./LoginButton.style";

export function LoginButton({ value, handleSubmit }) {
  return (
    <S.LoginButtonInput
      onClick={handleSubmit}
      value={value}
      type="button"
    ></S.LoginButtonInput>
  );
}

export default memo(LoginButton);
