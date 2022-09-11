import styled from "styled-components";
import { FlexRow, FlexCol, FlexRowBtwn } from "../../commonStyles";

export const Wrapper = styled.div`
  ${FlexCol}
  box-sizing: border-box;
  width: 100%;
  padding: 0 10%;
  padding-top: 1rem;
`;

export const RowWrapperBtwn = styled.div`
  ${FlexRowBtwn}
`;

export const RowWrapper = styled.div`
  ${FlexRow}
`;

export const WrapperSpaceBtwn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledText = styled.span`
  font-size: ${(props) => props.size || "1rem"};
  font-weight: ${(props) => props.bold || "normal"};
  color: ${(props) => props.color || "black"};
`;
