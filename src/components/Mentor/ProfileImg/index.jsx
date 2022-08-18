import React, { memo } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;

  border: none;
  box-shadow: var(--box-shadow);
  border-radius: 100%;
`;

function ProfileImg({ data }) {
  return (
    <Box>
      <Img src={data.img} alt="img"></Img>
    </Box>
  );
}

export default memo(ProfileImg);
