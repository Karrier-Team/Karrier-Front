import styled from "styled-components";

export const Selector = styled.select`
  box-sizing: border-box;
  width: 100%; // width (574px)
  aspect-ratio: 9.25/1; // height
  padding: 25px;

  color: ${(props) => (props.selected ? "" : "var(--bg-color)")};

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);

  font-size: 1em;
  ::placeholder {
    opacity: 50%;
  }
`;
