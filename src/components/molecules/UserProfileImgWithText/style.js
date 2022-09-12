import styled from "styled-components";
import { FlexColCenter, FlexRowCenter } from "../../../commonStyles";

export const Wrapper = styled.div`
  ${FlexColCenter};
  width: 100%;
  height: 100%;
`;

export const RowWrapper = styled.div`
  ${FlexRowCenter};
`;

export const Maintxt = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 1rem;
`;

export const Subtxt = styled.span`
  vertical-align: baseline;
  font-size: 1rem;
  color: var(--followers-color);
`;
