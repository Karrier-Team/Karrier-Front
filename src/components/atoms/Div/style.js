import styled, { css } from "styled-components";

export const Div = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || null};
  padding: 25px;

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);
  background-color: ${(props) => props.bgcolor || null};

  font-size: ${(props) => props.fontsize || "1em"};
  font-weight: ${(props) => (props.fontsize ? "bold" : "")};

  text-align: ${(props) => (props.centercontent ? "center" : null)};

  ${(props) =>
    props.centercontent &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
