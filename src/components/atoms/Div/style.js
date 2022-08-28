import styled, { css } from "styled-components";

export const Div = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || null};
  padding: ${(props) => props.pd || "1.5rem"};
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);
  background-color: ${(props) => props.bgcolor || null};

  font-size: ${(props) => props.fontsize || "1em"};
  font-weight: ${(props) => (props.fontsize ? "bold" : "")};

  text-align: ${(props) => (props.centercontent ? "center" : null)};

  ${(props) =>
    props.column &&
    css`
      display: flex;
      flex-direction: column;
    `}

  ${(props) =>
    props.centercontent &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
