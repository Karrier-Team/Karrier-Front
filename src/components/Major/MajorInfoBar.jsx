import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledMajorInfoBar = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  box-sizing: border-box;
  height: 3vw;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  margin: 0px 10px;
`;
const StyledCollege = styled.div`
  margin-right: 5px;
  font-family: S-CoreDream-6;
  font-size: 1.3rem;
  font-weight: bold;
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
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.56px;
  text-align: left;
  color: #333;
`;

const MajorInfoBar = () => {
  const [searchParams] = useSearchParams();
  return (
    <StyledMajorInfoBar>
      <StyledCollege>{"멘토링 >"}</StyledCollege>
      <StyledCollege>
        {searchParams.get("college") && searchParams.get("college") + " > "}
      </StyledCollege>
      <StyledMajor>{searchParams.get("dept")}</StyledMajor>
    </StyledMajorInfoBar>
  );
};

export default React.memo(MajorInfoBar);
