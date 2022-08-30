import styled, { css } from "styled-components";

export const TagDiv = styled.div`
  box-sizing: border-box;
  width: 100%; // width (574px)
  padding: ${(props) => (props.padding ? props.padding : "25px")};

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);

  font-size: ${(props) => (props.fontsize ? "1.3em" : "1em")};
  font-weight: ${(props) => (props.fontsize ? "bold" : "")};
  text-align: ${(props) => (props.centercontent ? "center" : null)};
  ${(props) =>
    props.contentEditable
      ? null
      : css`
          :empty:before {
            content: attr(placeholder);
            opacity: 0.35;
            font-weight: bold;
            padding: 0.3em 1em;
          }
        `};

  // 가로 스크롤
  display: flex;
  overflow: auto;
  white-space: nowrap;
`;
