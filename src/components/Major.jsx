import styled from "styled-components";

const MajorStyled = styled.div`
  width: 100%;
  height: 20vw;
  margin: 84px 0 33px;
  padding: 233.2px 791.1px 213.8px 767.9px;
  opacity: 0.63;
  background-color: yellowgreen;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Major = () => {
  return (
    <MajorStyled>
      <span>IT 대학</span>
      <span>컴퓨터 학부</span>
    </MajorStyled>
  );
};

export default Major;
