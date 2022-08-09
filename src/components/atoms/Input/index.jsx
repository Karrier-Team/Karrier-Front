import React from "react";
import * as S from "./style";

function Input({ handleChange, placeholder }) {
  return (
    <S.Input
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      placeholder={placeholder}
    />
  );
}

export default Input;
