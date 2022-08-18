import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%; // width (574px)
  aspect-ratio: 9.25/1; // height
  padding: 25px;

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);

  font-size: 1em;
  ::placeholder {
    color: #acacac;
  }
`;
