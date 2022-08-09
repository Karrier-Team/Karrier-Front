import styled from "styled-components";

export const Btn = styled.button`
  visibility: ${(props) => (props.hide ? "hidden" : "visible")};

  box-sizing: border-box;
  width: 5.5em; // width (574px)
  height: 2.25em;

  color: white;
  background-color: var(--primary-color);

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);

  font-size: 1em;
`;
