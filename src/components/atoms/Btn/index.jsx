import React from "react";
import * as S from "./style";

function Btn({
  type,
  data,
  size,
  handleClick,
  to,
  hide,
  children,
  withAlert,
  color,
  backgroundColor,
  fontSize,
  height,
  disabled,
}) {
  const handleClickWithData = (event) => {
    if (handleClick === undefined) return null;
    if (withAlert) alert("제출완료!");
    return handleClick(data);
  };

  if (to) {
    return (
      <S.StyledLink
        disabled={disabled}
        type={type}
        onClick={data ? handleClickWithData : handleClick}
        to={to}
        hide={hide}
      >
        {children}
      </S.StyledLink>
    );
  }

  return (
    <S.Btn
      disabled={disabled}
      type={type}
      size={size} //width
      height={height}
      hide={hide}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      onClick={data ? handleClickWithData : handleClick}
    >
      {children}
    </S.Btn>
  );
}

export default Btn;
