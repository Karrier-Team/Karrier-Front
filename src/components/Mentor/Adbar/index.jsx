import React, { memo } from "react";
import styled from "styled-components";

const BarDiv = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;

  padding: 0px 30px;

  display: flex;
  align-items: center;

  background-color: #007cc6;
`;

const Text = styled.span`
  color: #f1f1f1;
  font-size: 2rem;
`;

function AdBar() {
  return (
    <BarDiv>
      <Text>상시 멘토 모집!!! 지금 Karrier와 함께하세요</Text>
    </BarDiv>
  );
}

export default memo(AdBar);
