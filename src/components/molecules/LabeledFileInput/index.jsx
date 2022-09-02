import React from "react";
import * as S from "./style";
import Label from "../../atoms/Label";
import FileInput from "../../atoms/FileInput";

function LabeledFileInput({ handleChange, name }) {
  return (
    <>
      <S.Wrapper>
        <div style={{ marginBottom: "3%" }}>
          <Label name={name}></Label>
        </div>
        <FileInput name={name} handleChange={handleChange}></FileInput>
      </S.Wrapper>
    </>
  );
}

export default LabeledFileInput;
