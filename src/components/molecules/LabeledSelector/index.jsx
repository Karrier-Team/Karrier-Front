import React from "react";
import * as S from "./style";
import Label from "../../atoms/Label";
import Selector from "../../atoms/Selector";

function LabeledSelector({ placeholder, handleChange, name, options }) {
  return (
    <>
      <S.Wrapper>
        <Label name={name}></Label>
        <Selector
          name={name}
          placeholder={placeholder}
          handleChange={handleChange}
          options={options}
        ></Selector>
      </S.Wrapper>
    </>
  );
}

export default LabeledSelector;
