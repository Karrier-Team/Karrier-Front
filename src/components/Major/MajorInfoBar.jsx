import React from "react";
import styled from "styled-components";

const StyledMajorInfoBar = styled.div`
  height: 5.5vh;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  margin: 0px 10px;
`;
const StyledCollege = styled.div`
  margin-right: 5px;
  font-family: S-CoreDream-6;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.56px;
  text-align: left;
  color: #333;
`;

const StyledMajor = styled.div`
  font-family: S-CoreDream-6;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.56px;
  text-align: left;
  color: #333;
`;

const MajorInfoBar = ({ college, major }) => {
  return (
    <StyledMajorInfoBar>
      <StyledCollege>{college}</StyledCollege>
      <span style={{ fontWeight: "normal", marginRight: 5 }}>&#62;</span>
      <StyledMajor>{major}</StyledMajor>
    </StyledMajorInfoBar>
  );
};

export default React.memo(MajorInfoBar);