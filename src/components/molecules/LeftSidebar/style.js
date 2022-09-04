import styled from "styled-components";
import { FlexColCenter } from "../../../commonStyles";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
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

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    color: ${(props) => props.color || "var(--primary-color)"};
    font-weight: bold;
  }

  color: black;
  font-size: 1.5rem;
`;
