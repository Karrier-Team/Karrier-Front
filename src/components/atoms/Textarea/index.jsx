import React from "react";
import * as S from "./style";

function Textarea({ size, handleChange, placeholder }) {
  return (
    <S.Textarea
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      placeholder={placeholder}
    />
  );
}

export default Textarea;
