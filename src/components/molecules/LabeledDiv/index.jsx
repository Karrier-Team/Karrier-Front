import React from "react";
import * as S from "./style";
import Label from "../../atoms/Label";
import Div from "../../atoms/Div";

function LabeledDiv({
  name,
  fontsize,
  required,
  children,
  centercontent,
  height,
}) {
  return (
    <>
      <S.Wrapper>
        <div style={{ marginBottom: "3%" }}>
          <Label reuired={required} fontsize={fontsize} name={name}></Label>
        </div>
        {children ? (
          <Div
            centercontent={centercontent}
            fontsize={fontsize}
            height={height}
          >
            {children}
          </Div>
        ) : null}
      </S.Wrapper>
    </>
  );
}

export default LabeledDiv;
