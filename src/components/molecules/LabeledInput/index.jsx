import React from "react";
import * as S from "./style";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";

function LabeledInput({ handleChange, name, placeholder }) {
  return (
    <>
      <S.Wrapper>
        <Label name={name}></Label>
        <Input handleChange={handleChange} placeholder={placeholder}></Input>
      </S.Wrapper>
    </>
  );
}

export default LabeledInput;
