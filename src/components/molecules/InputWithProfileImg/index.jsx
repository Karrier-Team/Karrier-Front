import React, { useState } from "react";
import { Input, Space } from "@mantine/core";
import * as S from "./style";
import Img from "../../atoms/Img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

// type = {upperbig, lowerbig}
function InputWithProfileImg({ src }) {
  const [value, setValue] = useState("");

  return (
    <S.Wrapper>
      <Img size={"3.5rem"} src={src} />
      <Space w="lg"></Space>
      <Input
        style={{ width: "90%" }}
        placeholder="댓글 추가..."
        size="lg"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></Input>
      <FontAwesomeIcon
        style={{ marginLeft: "2rem", cursor: "pointer" }}
        onClick={() => console.log(value + " 정보를 백엔드로 보내기")}
        icon={faPaperPlane}
      />
    </S.Wrapper>
  );
}

export default InputWithProfileImg;
