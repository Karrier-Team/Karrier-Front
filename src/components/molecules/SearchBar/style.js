import styled from "styled-components";
import { FlexRow } from "../../../commonStyles";

export const Input = styled.input`
  border: 1px solid var(--bg-color-d);
  border-radius: 1em;
  padding: 0.5em;
  background-color: transparent;
  ::placeholder {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  ${FlexRow}
  width: auto;
`;
