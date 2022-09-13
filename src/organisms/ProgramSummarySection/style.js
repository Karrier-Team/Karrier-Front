import styled from "styled-components";
import { FlexRowBtwn, FlexRowCenter } from "../../commonStyles";

export const Span = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: var(--box-shadow-d);
  padding: 3rem;
`;

export const Div = styled.div`
  ${FlexRowBtwn};
  width: 100%;
  height: 4rem;
  margin: 0.5% 0;
  box-sizing: border-box;
`;

export const Left = styled.div`
  ${FlexRowCenter};
  width: 19.5%;
  height: 100%;
  font-weight: bold;
  background-color: var(--bg-color-l);
`;

export const Right = styled.div`
  ${FlexRowCenter};
  width: 80%;
  height: 100%;
  background-color: var(--bg-color-l);
  font-weight: bold;
  color: ${(props) => props.color || "black"};
`;
