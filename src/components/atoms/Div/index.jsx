import React from "react";
import * as S from "./style";

function Div({
  children,
  column,
  width,
  height,
  centercontent,
  bgcolor,
  fontsize,
  pd, //padding
}) {
  return (
    <S.Div
      pd={pd}
      column={column}
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
