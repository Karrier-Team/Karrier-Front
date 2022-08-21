import styled from "styled-components";

export const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%; // width (574px)
  aspect-ratio: 4 / 1;
  padding: 25px;

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);
  font-size: 1.2em;
  font-weight: bold;

  resize: none;

  ::placeholder {
    opacity: 50%;
  }
`;
