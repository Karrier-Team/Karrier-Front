import React from "react";
import * as S from "./style";
import Label from "../../atoms/Label";
import Textarea from "../../atoms/Textarea";

function LabeledTextarea({
  storage,
  value,
  handleChange,
  size,
  fontsize,
  name,
  placeholder,
  required,
  height,
}) {
  return (
    <>
      <S.Wrapper>
        <div style={{ marginBottom: "1em" }}>
          <Label required={required} name={name} fontsize={fontsize}></Label>
        </div>
        <Textarea
          storage={storage}
          value={value}
          size={size}
          handleChange={handleChange}
          placeholder={placeholder}
          height={height}
        ></Textarea>
      </S.Wrapper>
    </>
  );
}

export default LabeledTextarea;
