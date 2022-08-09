import styled from "styled-components";
const StyledMajorInfo = styled.div`
  height: 33.9583vw;
  background-color: yellowgreen;
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
`;

const MajorInfo = ({ majorData }) => {
  return (
    <StyledMajorInfo>
      {/* props 로 받기 */}
      <StyledCollege>{majorData.college}</StyledCollege>
      <StyledMajor>{majorData.major}</StyledMajor>
    </StyledMajorInfo>
  );
};

export default MajorInfo;
