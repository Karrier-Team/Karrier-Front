import React, { memo } from "react";
import styled from "styled-components";

import DefaultProfileImg from "../../../images/DefaultProfileImg.jpeg";

const Box = styled.div`
  width: 100%;
  height: calc(100vw * 0.3);
`;

const Img = styled.img`
  width: 80%;
  height: 80%;
  margin: 10%;

  border: 1px solid black;
  border-radius: 100%;
`;

function ProfileImg() {
  return (
    <Box>
      <Img src={DefaultProfileImg} alt="img"></Img>
    </Box>
  );
}

export default memo(ProfileImg);
