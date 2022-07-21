import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// 기본 여백 삭제
export const GlobalStyles = createGlobalStyle`
  ${reset}
`;

// export const lightTheme = {
//   fontColor: "#2c2c2c",
//   bgColor: "white",
// };

// export const darkTheme = {
//   fontColor: "white",
//   bgColor: "#2c2c2c",
// };
