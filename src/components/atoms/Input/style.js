import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  width: 30%; // width (574px)
  aspect-ratio: 9.25/1; // height
  padding: 25px;

  border: none;
  border-radius: 9px;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  font-size: 1em;
  ::placeholder {
    opacity: 50%;
  }
`;
