import React, { useState } from "react";
import * as S from "./style";

function FileInput({ name, handleChange }) {
  // 1. 업로드 하면 input 된 파일을 백엔드로 보내도록 준비해야함
  // 2. 라벨이 업로드라는 글씨에서 -> 파일이름으로 바뀌어야함

  const [file, setFile] = useState();

  return (
    <>
      <S.Label htmlFor={name}>
        {file === undefined ? "업로드" : file.name}
      </S.Label>
      <input
        onChange={(e) => {
          setFile(e.target.files[0]);
          handleChange(e.target.files[0]);
        }}
        type="file"
        id={name}
        accept="image/*"
        style={{ display: "none" }}
      />
    </>
  );
}

export default FileInput;
