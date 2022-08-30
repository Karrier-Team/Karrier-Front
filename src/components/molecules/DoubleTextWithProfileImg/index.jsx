import React from "react";
import { Text, Space } from "@mantine/core";
import * as S from "./style";
import Img from "../../atoms/Img";

// type = {upperbig, lowerbig}
function DoubleTextWithProfileImg({ src, type, uppertxt, lowertxt }) {
  return (
    <S.Wrapper>
      <Img size={type === "upperbig" ? "4rem" : "3.5rem"} src={src} />
      <Space w="lg"></Space>
      <div>
        <Text
          color={type === "upperbig" ? "black" : "gray"}
          size={type === "upperbig" ? "1.3rem" : "1rem"}
        >
          {uppertxt}
        </Text>
        <Text
          color={type === "upperbig" ? "gray" : "black"}
          size={type === "upperbig" ? "1rem" : "1.2rem"}
        >
          {lowertxt}
        </Text>
      </div>
    </S.Wrapper>
  );
}

export default DoubleTextWithProfileImg;
