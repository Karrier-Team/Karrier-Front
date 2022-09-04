import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const colors = css`
  ${(props) => {
    switch (props.type) {
      case "qna":
        return "var(--primary-color)";
      case "reviews":
        return "var(--reviews-color)";
      case "notice":
        return "var(--nocie-color)";
      default:
        return "var(--primary-color)";
    }
  }}
`;

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
  cursor: pointer;
  font-size: 1rem;
  margin: auto 1rem;
  text-align: center;
`;

export const Searchbar = styled.input`
  margin-right: 1rem;
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
    color: ${colors};
  }

  &.active {
    color: ${colors};
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
    color: ${colors};
  }

  &.active {
    color: ${colors};
  }
`;

export const DropdownWrapper = styled.div`
  position: ${(props) => (props.inCommunityPage ? "relative" : "absolute")};

  width: 100%;
  height: auto;

  box-sizing: border-box;
  background-color: ${(props) =>
    props.inCommunityPage ? "var(--bg-color-l)" : "white"};
  z-index: 1;
  border-bottom: 1px solid var(--line-color);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

export const MajorItems = styled.li`
  list-style: none;
  margin: 0.7em 1em;
  cursor: pointer;
  :hover {
    color: ${colors};
  }

  &.active {
    color: ${colors};
  }
`;
