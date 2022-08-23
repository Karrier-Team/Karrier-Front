import styled from "styled-components";
import { FlexCol, FlexColCenter, FlexRow } from "../../commonStyles";

export const Wrapper = styled.div`
  width: 100%;
  margin: 1em 0;
  box-sizing: border-box;
  background-color: var(--bg-color-l);
`;

export const RowWrapper = styled.div`
  padding: 1em 2em;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 10em;
  background-color: var(--bg-color-l);
`;

export const ColWrapper = styled.div`
  ${FlexCol};
  width: 90%;
`;

export const ColWrapperCntr = styled.div`
  ${FlexColCenter}
  justify-content: center;
  width: 10%;
`;

export const LowerRowWrapper = styled.div`
  ${FlexRow};
  height: 1.5em;
  padding: 1.5em 2em;
  box-sizing: border-box;
  background-color: var(--bg-color-ll);
`;
