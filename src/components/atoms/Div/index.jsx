import React from "react";
import * as S from "./style";

function Div({ children, width, height, centercontent, bgcolor, fontsize }) {
  return (
    <S.Div
      width={width}
      height={height}
      fontsize={fontsize}
      bgcolor={bgcolor}
      centercontent={centercontent}
    >
      {children}
    </S.Div>
  );
}

export default Div;
