import React from "react";
import * as S from "./style";
import Label from "../../atoms/Label";
import FileInput from "../../atoms/FileInput";

function LabeledFileInput({
  imageClickable,
  handleImgClick,
  handleChange,
  name,
  borderRadius,
  aspectRatio,
  file,
  padding,
  objectFit,
}) {
  return (
    <>
      <S.Wrapper>
        <div style={{ marginBottom: "3%" }}>
          <Label name={name}></Label>
        </div>

        <FileInput
          imageClickable={imageClickable}
          name={name}
          handleChange={handleChange}
          handleImgClick={handleImgClick}
          borderRadius={borderRadius}
          aspectRatio={aspectRatio}
          file={file}
          padding={padding}
          objectFit={objectFit}
        />
      </S.Wrapper>
    </>
  );
}

export default LabeledFileInput;
