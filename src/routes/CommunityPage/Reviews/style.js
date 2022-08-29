import styled from "styled-components";
import { FlexRow, FlexCol, FlexRowBtwn } from "../../../commonStyles";

export const Wrapper = styled.div`
  ${FlexCol}
  box-sizing: border-box;
  width: 100%;
  padding: 0 10%;
  padding-top: 1rem;
  gap: 2.5rem;
`;

export const RowWrapperBtwn = styled.div`
  ${FlexRowBtwn}
`;

export const RowWrapper = styled.div`
  ${FlexRow}
`;
