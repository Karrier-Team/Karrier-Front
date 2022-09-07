import styled from "styled-components";
import { FlexCol, FlexRow } from "../../../commonStyles";

export const Wrapper = styled.div`
  width: 100%;

  box-sizing: border-box;
  padding: 25px;

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);

  font-size: 1em;
  ::placeholder {
    opacity: 50%;
  }
`;

export const RowWrapper = styled.div`
  ${FlexRow}
`;

export const ColWrapper = styled.div`
  ${FlexCol}
`;

export const Title = styled.span`
  font-size: 2em;
  font-weight: bold;
  margin: 1em;
  width: 25%;
`;

export const Subtitle = styled.span`
  font-size: 1.5em;
  word-break: keep-all;
`;

export const Content = styled.span`
  font-size: 1em;
  color: #808080;
  margin: 0.5em;
  margin-left: 3em;
`;
