import styled from "styled-components";
import {
  FlexRow,
  FlexCol,
  FlexRowBtwn,
  FlexColCenter,
} from "../../commonStyles";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--primary-color);
`;

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

export const RowWrapper = styled.div`
  ${FlexRow}
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  padding-right: 10%;
  /* padding-top: 1rem; */
  height: 100%;
`;

export const SubControllBar = styled.div`
  ${FlexRowBtwn};
`;

export const RightSideWrapper = styled.div`
  ${FlexCol}
  width: 80%;
  height: auto;
  padding-left: 3rem;
`;

export const CenterWrapper = styled.div`
  ${FlexColCenter}
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
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

export const MentorListWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 8rem;
  grid-row-gap: 4rem;
`;
