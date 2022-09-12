import React, { useState, useEffect } from "react";
import * as S from "./style";

const FileInput = ({
  htmlfor,
  name,
  file,
  handleChange,
  imageClickable,
  borderRadius,
  aspectRatio,
  padding,
  objectFit,
}) => {
  // 1. 업로드 하면 input 된 파일을 백엔드로 보내도록 준비해야함
  // 2. 라벨이 업로드라는 글씨에서 -> 파일이름으로 바뀌어야함

  // 외부에서 state 관리 -> FileReader class 이용
  const handleImg = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    return new Promise((resolve) => {
      reader.onloadend = () => {
        const resultImage = reader.result;
        handleChange(resultImage);
      };
      resolve();
    });
  };

  return (
    <>
      <label
        htmlFor={imageClickable ? name : null}
        onClick={imageClickable ? handleChange : null}
      >
        <S.Img
          borderRadius={borderRadius}
          aspectRatio={aspectRatio}
          src={file}
          padding={padding}
          objectFit={objectFit}
        ></S.Img>
      </label>
      <input
        type="file"
        style={{ display: "none" }}
        id={name}
        accept="image/*"
        onChange={handleImg}
      />
    </>
  );
};
export default FileInput;
