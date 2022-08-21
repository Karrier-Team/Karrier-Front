import React from "react";
import * as S from "./style";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";

function LabeledInput({
  required,
  storage,
  value,
  handleChange,
  name,
  placeholder,
}) {
  return (
    <>
      <S.Wrapper>
        <div style={{ marginBottom: "1rem" }}>
          <Label required={required} name={name}></Label>
        </div>
        <Input
          storage={storage}
          value={value}
          handleChange={handleChange}
          placeholder={placeholder}
          required={required}
        ></Input>
      </S.Wrapper>
    </>
  );
}

export default LabeledInput;
