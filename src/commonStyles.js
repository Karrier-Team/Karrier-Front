import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

// 기본 여백 삭제
export const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    --primary-color: #2566B8;
    --bg-color: #ACACAC;
    --bg-color-d: gray;
    --box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
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
