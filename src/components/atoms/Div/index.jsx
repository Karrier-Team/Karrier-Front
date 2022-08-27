import React from "react";
import * as S from "./style";

function Div({ children, centercontent, fontsize, padding }) {
  return (
    <S.Div fontsize={fontsize} centercontent={centercontent} padding={padding}>
      {children}
    </S.Div>
  );
}

export default Div;
