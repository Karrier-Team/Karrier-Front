import styled from "styled-components";
import { FlexColCenter } from "../../../commonStyles";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  ${FlexColCenter}
  width: 10%;
  height: 100vh;
  background-color: #f0f0f0;

  top: 0;
  position: sticky;

  padding: 1rem;
  gap: 1rem;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  margin: 1em 0;

  display: flex;
  justify-content: center;

  &.active {
    color: ${(props) => props.color || "var(--primary-color)"};
  }

  color: black;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
`;
