import React, { memo } from "react";
import * as S from "./style";

function Img({ src, size }) {
  return (
    <S.Box size={size}>
      <S.Img src={src} alt="img"></S.Img>
    </S.Box>
  );
}

export default memo(Img);
