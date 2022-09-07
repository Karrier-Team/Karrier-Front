import styled from "styled-components";

export const Wrapper = styled.div`
  width: 10%;

  background-color: #f0f0f0;
  position: sticky;
  top: 0;
  padding: 1em;
`;

export const StyledNavLink = styled.div`
  text-decoration: none;
  color: black;
  margin: 3em 0;

  display: flex;
  justify-content: center;

  font-weight: bold;
  font-size: 1vw;
  cursor: pointer;

  &:hover {
    color: #007bc3;
  }

  &.active {
    color: #007bc3;
  }
`;
