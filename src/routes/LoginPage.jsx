import React, { useState, useEffect, memo } from "react";

// components
import LoginButton, { ExportTestDiv } from "../components/Login/LoginButton/LoginButton";

export function LoginPage() {
  return (
    <>
      <LoginButton>LOGIN</LoginButton>
      <ExportTestDiv></ExportTestDiv>
    </>
  );
}

export default memo(LoginPage);
