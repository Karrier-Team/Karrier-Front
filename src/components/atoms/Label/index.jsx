import React from "react";
import * as S from "./style";

function Label({ required, name, fontsize }) {
  return (
    <S.Label required={required} fontsize={fontsize}>
      {name}
    </S.Label>
  );
}

export default Label;
