import styled from "styled-components";
import { FlexCol, FlexRowCenter } from "../../commonStyles";

export const ColWrapper = styled.div`
  ${FlexCol};
  padding: 0em 1.5em;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  height: 5em;
`;

export const RowWrapper = styled.div`
  ${FlexRowCenter}
`;
