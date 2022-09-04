import React, { useState, useEffect } from "react";
import * as S from "./style";

const FileInput = ({ name, file, handleChange, borderRadius, aspectRatio }) => {
  // 1. 업로드 하면 input 된 파일을 백엔드로 보내도록 준비해야함
  // 2. 라벨이 업로드라는 글씨에서 -> 파일이름으로 바뀌어야함

  // 외부에서 state 관리
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
      <S.Img
        htmlFor={name == "imgButton" ? null : name}
        borderRadius={borderRadius}
        aspectRatio={aspectRatio}
        src={file}
      ></S.Img>
      <input
        onChange={handleImg}
        type="file"
        id={name}
        accept="image/*"
        style={{ display: "none" }}
      />
    </>
  );
};
export default FileInput;
