import styled from "styled-components";
import {
  FlexCol,
  FlexRow,
  FlexColCenter,
  FlexRowBtwn,
} from "../../commonStyles";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    color: var(--wishlist-color);
    font-weight: bold;
  }

  color: black;
  font-size: 1.5rem;
`;

export const LeftSideWrapper = styled.div`
  ${FlexColCenter}
  width: 20%;
  height: 100vh;

  background-color: #f0f0f0;

  top: 0;
  position: sticky;

  overflow: auto;
  padding: 0;
  padding-top: 2rem;

  gap: 3rem;
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

export const StyledText = styled.span`
  font-size: ${(props) => props.size || "1rem"};
  font-weight: ${(props) => props.bold || "normal"};
  color: ${(props) => props.color || "black"};
`;

export const WrapperSpaceBtwn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  ${FlexCol}
  box-sizing: border-box;
  width: 100%;
  padding: 0 10%;
  padding-top: 1rem;
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
