import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: var(--bg-color-l);
  border-bottom: 1px solid var(--line-color);
  /* border-bottom: 1px solid #e1e1e1; */
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 1;
  display: flex;
  justify-content: center;
  gap: 8em;

  opacity: 1;
`;

export const StyledNavLink = styled(NavLink)`
  margin: 1.2em 0;
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
