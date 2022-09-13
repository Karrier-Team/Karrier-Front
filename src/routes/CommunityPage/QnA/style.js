import styled from "styled-components";
import { FlexRow, FlexCol, FlexRowBtwn } from "../../../commonStyles";

export const Wrapper = styled.div`
  ${FlexCol}
  box-sizing: border-box;
  width: 100%;
  padding: 0 15%;
  padding-top: 1.5rem;
  gap: 1.5rem;
`;

export const WrapperNarrow = styled.div`
  ${FlexCol}
  box-sizing: border-box;
  width: 100%;
  padding: 0 15%;
  padding-top: 0.5rem;
  gap: 0.5rem;
`;

export const RowWrapperBtwn = styled.div`
  ${FlexRowBtwn}
`;

export const RowWrapper = styled.div`
  ${FlexRow}
`;
