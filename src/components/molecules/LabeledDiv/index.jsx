import React from "react";
import * as S from "./style";
import Label from "../../atoms/Label";
import Div from "../../atoms/Div";

function LabeledDiv({ name, fontsize, required, children, centercontent }) {
  return (
    <>
      <S.Wrapper>
        <Label reuired={required} fontsize={fontsize} name={name}></Label>
        {children ? (
          <Div centercontent={centercontent} fontsize={fontsize}>
            {children}
          </Div>
        ) : null}
      </S.Wrapper>
    </>
  );
}

export default LabeledDiv;
