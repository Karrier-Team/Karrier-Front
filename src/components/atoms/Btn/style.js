import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const BtnStyle = css`
  text-decoration: none;

  visibility: ${(props) => (props.hide ? "hidden" : "visible")};

  box-sizing: border-box;
  width: ${(props) => props.size || "5.5em"};
  height: ${(props) => props.height || "2.25em"};

  color: ${(props) => (props.color ? props.color : "white")};
  background-color: var(--primary-color);
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--primary-color)"};

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);

  cursor: pointer;

  font-size: ${(props) => props.fontSize || "1em"};
  font-weight: bold;

  text-align: center;
  line-height: 2.25em;

  // center 배치
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.button`
  ${BtnStyle}
`;

export const StyledLink = styled(Link)`
  ${BtnStyle}
`;
