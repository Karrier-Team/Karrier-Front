import React from "react";
import * as S from "./style";
import Label from "../../atoms/Label";
import Textarea from "../../atoms/Textarea";

function LabeledTextarea({ handleChange, size, name, placeholder }) {
  return (
    <>
      <S.Wrapper>
        <Label name={name}></Label>
        <Textarea
          size={size}
          handleChange={handleChange}
          placeholder={placeholder}
        ></Textarea>
      </S.Wrapper>
    </>
  );
}

export default LabeledTextarea;
