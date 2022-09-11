import styled from "styled-components";
import { FlexCol, FlexRow } from "../../../commonStyles";

export const Wrapper = styled.div`
  width: 100%;

  box-sizing: border-box;
  padding: 6%;
  padding-left: 9%;

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
  font-size: 2vw;
  font-weight: bold;
  margin: 0.1em;
  width: 26%;
`;

export const Subtitle = styled.span`
  font-size: 1.3vw;
  word-break: keep-all;
  font-weight: bold;

  opacity: 0.5;
`;

export const Content = styled.span`
  font-size: 1vw;
  font-weight: bold;
  opacity: 0.7;
  color: #808080;
  margin: 0.5em;
  margin-left: 3em;
`;
