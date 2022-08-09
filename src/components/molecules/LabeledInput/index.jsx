import React from "react";
import * as S from "./style";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";

function LabeledInput({ name, placeholder }) {
  return (
    <>
      <Label name={name}></Label>
      <Input placeholder={placeholder}></Input>
    </>
  );
}

export default LabeledInput;
