import styled from "styled-components";

export const Box = styled.div`
  width: ${(props) => props.size || "100%"};
  aspect-ratio: 1 / 1;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

  border: none;
  box-shadow: var(--box-shadow);
  border-radius: 100%;

  object-position: 50% 50%;
  object-fit: contain;

  background-color: white;
`;
