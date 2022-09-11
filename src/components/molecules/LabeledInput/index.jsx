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
  height,
  fontSize,
  padding,
}) {
  return (
    <>
      <S.Wrapper>
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Label required={required} name={name}></Label>
        </div>
        <Input
          required={required}
          storage={storage}
          value={value}
          handleChange={handleChange}
          placeholder={placeholder}
          height={height}
          fontSize={fontSize}
          padding={padding}
        ></Input>
      </S.Wrapper>
    </>
  );
}

export default LabeledInput;
