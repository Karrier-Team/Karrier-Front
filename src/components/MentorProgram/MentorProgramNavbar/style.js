import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #f0f0f0;

  /* border-bottom: 1px solid #e1e1e1; */
  width: 13%;
  height: 100vh;
  margin-left: 8%;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  margin-top: 25%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: large;

  &:hover {
    color: #007bc3;
  }

  &.active {
    color: #007bc3;
  }
`;
