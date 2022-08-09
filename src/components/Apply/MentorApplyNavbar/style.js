import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #f0f0f0;
  border-bottom: 1px solid #000;
  /* border-bottom: 1px solid #e1e1e1; */
  width: 100%;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 5%;

  &:hover {
    color: skyblue;
  }

  &.active {
    color: #007bc3;
  }
`;