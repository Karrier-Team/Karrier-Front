import React from "react";
import * as S from "./style";
import Label from "../../atoms/Label";
import FileInput from "../../atoms/FileInput";

function LabeledFileInput({ handleChange, name }) {
  return (
    <>
      <S.Wrapper>
        <Label name={name}></Label>
        <FileInput name={name} handleChange={handleChange}></FileInput>
      </S.Wrapper>
    </>
  );
}

export default LabeledFileInput;
