import React, { memo } from "react";
import * as S from "./style";

function Img({ src, width }) {
  return (
    <S.Box width={width}>
      <S.Img src={src} alt="img"></S.Img>
    </S.Box>
  );
}

export default memo(Img);
