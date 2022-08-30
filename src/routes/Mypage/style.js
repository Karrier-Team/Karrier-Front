import styled from "styled-components";
import { FlexCol, FlexColCenter } from "../../commonStyles";

export const Wrapper = styled.div`
  ${FlexCol}
  box-sizing: border-box;
  width: 100%;
  padding: 0 10%;
  padding-top: 1rem;
`;

export const Button = styled.button`
  cursor: pointer;

  margin: 1rem;

  font-size: 1.5rem;

  width: 6.5rem;
  height: 3rem;

  text-align: center;
  line-height: 3rem;

  border: none;
  border-radius: 10px;

  box-shadow: var(--box-shadow-d);

  transition: 0.3s;
  background-color: ${(props) => (props.type === "yes" ? "white" : "black")};
  opacity: 0.7;
  color: ${(props) => (props.type === "yes" ? "black" : "white")};

  :hover {
    opacity: 1;
  }
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CenterWrapper = styled.div`
  ${FlexColCenter}
`;
