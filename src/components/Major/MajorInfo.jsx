import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import DefaultProgramImage1 from "../../images/DefaultProgramImage1.png";

const StyledMajorInfo = styled.div`
  width: 100%;
  height: 40vh;
  background: url(${DefaultProgramImage1}) no-repeat center 30%/100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledCollege = styled.div`
  margin-bottom: 5px;
  font-family: S-CoreDream-6;
  font-size: 3.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -1.3px;
  text-align: left;
  color: #f3f3f3;
  text-shadow: 2px 4px 2px gray;
`;

const StyledMajor = styled.div`
  font-family: S-CoreDream-6;
  font-size: 5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -1.7px;
  text-align: left;
  color: #f3f3f3;
  text-shadow: 2px 4px 2px gray;
`;

const MajorInfo = () => {
  const [searchParams] = useSearchParams();
  return (
    <StyledMajorInfo>
      <StyledCollege>{searchParams.get("college")}</StyledCollege>
      <StyledMajor>{searchParams.get("dept")}</StyledMajor>
    </StyledMajorInfo>
  );
};

export default MajorInfo;
