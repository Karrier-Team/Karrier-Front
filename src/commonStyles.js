import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// 기본 여백 삭제
export const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    --primary-color: #2566B8;
    --box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  }
`;

// export const lightTheme = {
//   fontColor: "#2c2c2c",
//   bgColor: "white",
// };

// export const darkTheme = {
//   fontColor: "white",
//   bgColor: "#2c2c2c",
// };
