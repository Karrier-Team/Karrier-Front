import React from "react";
import * as S from "./style";

function Div({ children, centercontent, fontsize }) {
  return (
    <S.Div fontsize={fontsize} centercontent={centercontent}>
      {children}
    </S.Div>
  );
}

export default Div;
