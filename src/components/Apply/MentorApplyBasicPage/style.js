import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${(props) => props.bgimg});
  background-position: center;
  position: relative;
`;

export const Div = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  width: 30rem;
  transform: translate(-50%, -50%); //absolute 가로, 세로 가운데 정렬
`;
