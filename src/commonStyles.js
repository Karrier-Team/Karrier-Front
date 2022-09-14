import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import "../src/font.css";

// 기본 여백 삭제
export const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    --primary-color: #257ABF; // 짙은파랑
    --primary-color-l: #2191d2; // 짙은파랑 light
    --bg-color-ll: #F6F6F6; // 밝은 회색
    --bg-color-l: #F0F0F0;
    --bg-color-lll: #d3d3d3;
    --bg-color: #ACACAC;
    --bg-color-d: gray;
    --text-color-l: #353535;
    --reviews-color: #19A96A;
    --programs-color: #E19200;
    --followers-color: #00BA8B;
    --wishlist-color: #F84971;
    --notice-color: #3929CF;
    --line-color: #E1E1E1;
    --navbar-zindex: 10;
    --disabled-color: #6A6A6A;
    --box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    --box-shadow-strong: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    --box-shadow-d: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    --box-shadow-sexy: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;;
  }

  *, body, button, input{
    font-family: "SCoreDream";
    font-weight: 500;
    font-style: normal;
  } 
`;

export const FlexRow = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: 100%;
`;

export const FlexRowBtwn = css`
  ${FlexRow};
  justify-content: space-between;
`;

export const FlexRowArnd = css`
  ${FlexRow};
  justify-content: space-around;
`;

export const FlexRowCenter = css`
  ${FlexRow};
  justify-content: center;
`;

export const FlexCol = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: 100%;
`;

export const FlexColCenter = css`
  ${FlexCol};
  align-items: center;
`;
