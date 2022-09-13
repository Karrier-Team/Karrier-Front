import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  position: sticky;
  top: 0px;
  z-index: 1;
  display: flex;
  justify-content: center;
  gap: 8em;
  background-color: var(--bg-color-l);
`;

export const StyledNavLink = styled.div`
  text-decoration: none;
  color: black;
  margin: 1.2em 0;

  display: flex;
  justify-content: center;

  font-weight: bold;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    color: #007bc3;
  }

  &.active {
    color: #007bc3;
  }
`;
