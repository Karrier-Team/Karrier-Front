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
  background-color: var(--bg-color-l);
`;

export const ColWrapper = styled.div`
  ${FlexCol};
  width: 90%;
  position: relative;
  .icon {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateY(0.7rem);
  }

  .content {
    transition: height 3s;
  }

  .notClicked {
    width: 100%;
    height: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .onClicked {
    width: 100%;
    height: auto;
  }
`;

export const ColWrapperCntr = styled.div`
  ${FlexColCenter}
  justify-content: center;
  width: 10%;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.left && "flex-start"};
  justify-content: ${(props) => props.center && "center"};
  width: ${(props) => props.width || "100%"};
`;

export const LowerRowWrapper = styled.div`
  ${FlexRow};
  height: 1.5em;
  padding: 1.5em 2em;
  box-sizing: border-box;
  background-color: var(--bg-color-ll);
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CenterWrapper = styled.div`
  ${FlexColCenter}
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
