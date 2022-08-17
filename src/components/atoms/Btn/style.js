import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const BtnStyle = css`
  text-decoration: none;

  visibility: ${(props) => (props.hide ? "hidden" : "visible")};

  box-sizing: border-box;
  width: 5.5em; // width (574px)
  height: 2.25em;

  color: white;
  background-color: var(--primary-color);

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);

  cursor: pointer;

  font-size: 1em;

  text-align: center;
  line-height: 2.25em;
`;

export const Btn = styled.button`
  ${BtnStyle}
`;

export const StyledLink = styled(Link)`
  ${BtnStyle}
`;
