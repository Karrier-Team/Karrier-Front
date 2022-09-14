import React from "react";
import { Text, Space } from "@mantine/core";
import * as S from "./style";
import Img from "../../atoms/Img";

// type = {upperbig, lowerbig}
function DoubleTextWithProfileImg({ src, type, uppertxt, lowertxt }) {
  return (
    <S.Wrapper>
      <Img
        size={
          type === "upperbig"
            ? "6rem"
            : type === "upperMid"
            ? "4.5rem"
            : "3.5rem"
        }
        src={src}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-between",
        }}
      >
        <Text
          color={
            type === "upperbig"
              ? "black"
              : type === "upperMid"
              ? "black"
              : "gray"
          }
          size={
            type === "upperbig"
              ? "1.3rem"
              : type === "upperMid"
              ? "1.2rem"
              : "1rem"
          }
          style={{ width: "100%", marginBottom: "5%", fontWeight: "bold" }}
        >
          {uppertxt}
        </Text>
        <Text
          color={
            type === "upperbig"
              ? "gray"
              : type === "upperMid"
              ? "gray"
              : "black"
          }
          size={
            type === "upperbig"
              ? "1.1rem"
              : type === "upperMid"
              ? "1.0rem"
              : "1.1rem"
          }
          style={{ width: "100%", fontWeight: "bold" }}
        >
          {lowertxt}
        </Text>
      </div>
    </S.Wrapper>
  );
}

export default DoubleTextWithProfileImg;
