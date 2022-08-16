import React from "react";
import * as S from "./style";
import Label from "../../atoms/Label";
import Div from "../../atoms/Div";

function LabeledDiv({ name, children }) {
  return (
    <>
      <S.Wrapper>
        <Label name={name}></Label>
        <Div>{children}</Div>
      </S.Wrapper>
    </>
  );
}

export default LabeledDiv;
