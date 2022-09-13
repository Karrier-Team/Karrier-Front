import React from "react";
import * as S from "./style";

function Btn({
  onHoverAnimaton,
  htmlFor,
  as,
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
  borderRadius,
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
        onHoverAnimaton={onHoverAnimaton}
        disabled={disabled}
        size={size} //width
        height={height}
        type={type}
        onClick={data ? handleClickWithData : handleClick}
        to={to}
        fontSize={fontSize}
        hide={hide}
        color={color}
        backgroundColor={backgroundColor}
      >
        {children}
      </S.StyledLink>
    );
  }

  return (
    <S.Btn
      as={as ? as : null}
      onHoverAnimaton={onHoverAnimaton} 
      htmlFor={htmlFor ? htmlFor : null}
      disabled={disabled}
      type={type}
      size={size} //width
      height={height}
      hide={hide}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      onClick={data ? handleClickWithData : handleClick}
      borderRadius={borderRadius}
    >
      {children}
    </S.Btn>
  );
}

export default Btn;
