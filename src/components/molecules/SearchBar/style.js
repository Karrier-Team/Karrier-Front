import styled from "styled-components";
import { FlexRow } from "../../../commonStyles";

export const Input = styled.input`
  height: 2.25em;
  border: none;
`;

export const Wrapper = styled.div`
  ${FlexRow}
  width: auto;
`;

export const Div = styled.div`
  /* border: 1px solid black; */
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
`;
