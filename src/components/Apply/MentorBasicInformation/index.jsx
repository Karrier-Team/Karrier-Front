import React, { memo } from "react";
import styled from "styled-components";
import * as S from "./MentorBasicInformation.style";

const Wrapper = styled.div``;

function MentorBasicInformation() {
  console.log("step1");
  return (
    <>
      <Wrapper>
        <h1>step1</h1>
      </Wrapper>
    </>
  );
}

export default memo(MentorBasicInformation);
