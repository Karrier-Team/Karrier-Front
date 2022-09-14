import React, { memo } from "react";
import * as S from "./style";

import DefaultProfileImg from "../../../images/DefaultProfileImg.png";

function Img({ src, size }) {
  return (
    <S.Box size={size}>
      <S.Img src={src || DefaultProfileImg} alt="img"></S.Img>
    </S.Box>
  );
}

export default memo(Img);
