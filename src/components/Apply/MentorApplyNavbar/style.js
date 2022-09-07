import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #f0f0f0;
  border-bottom: 1px solid var(--line-color);
  /* border-bottom: 1px solid #e1e1e1; */
  width: 100vw;
  height: 7vh;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 9%;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 1rem;
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    color: #007bc3;
  }

  &.active {
    color: #007bc3;
    font-weight: bold;
  }
`;
