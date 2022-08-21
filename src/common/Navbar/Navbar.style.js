import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LeftSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 1vw;
`;

export const RightSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 1rem;
  margin-right: 2rem;
`;

export const Text = styled.span`
  font-size: 1rem;
  margin: auto 2rem;
  text-align: center;
`;

export const Searchbar = styled.input`
  border: 1px solid var(--bg-color-d);
  border-radius: 1em;
  padding: 0.5em;
  background-color: transparent;
  ::placeholder {
    text-align: center;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  box-sizing: border-box;
  height: 100%;

  display: flex;
  align-items: center;

  &:hover {
    color: var(--primary-color);
  }

  &.active {
    color: var(--primary-color);
  }
`;

export const StyledDropdownLi = styled.li`
  list-style: none;
  box-sizing: border-box;
  padding: 30px 0px;
  width: calc(100% / 7);
  height: 70px;
  cursor: pointer;

  :hover {
    color: var(--primary-color);
  }

  &.active {
    color: var(--primary-color);
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;

  width: 100vw;
  height: auto;

  box-sizing: border-box;
  background-color: white;
  z-index: 1;
  border-bottom: 1px solid var(--line-color);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;
