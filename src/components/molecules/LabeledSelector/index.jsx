import React from "react";
import * as S from "./style";
import Label from "../../atoms/Label";
import Selector from "../../atoms/Selector";

function LabeledSelector({
  handleChange,
  name,

  options,
  required,
}) {
  return (
    <>
      <S.Wrapper>
        <div style={{ marginBottom: "3%" }}>
          <Label required={required} name={name}></Label>
        </div>
        <Selector
          name={name}
          handleChange={handleChange}
          options={options}
        ></Selector>
      </S.Wrapper>
    </>
  );
}

export default LabeledSelector;
