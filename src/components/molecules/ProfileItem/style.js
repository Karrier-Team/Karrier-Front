import styled from "styled-components";
import { FlexRowBtwn } from "../../../commonStyles";

//images
import DefaultProgramImage1 from "../../../images/DefaultProgramImage1.png";

//style component
export const StyledProfileItem = styled.div`
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  cursor: pointer;
  aspect-ratio: 3 / 4;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 10px grey;
  background-image: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 3%,
      rgba(255, 255, 255, 0) 13%,
      rgba(255, 255, 255, 0) 87%,
      rgba(0, 0, 0, 1) 97%
    ),
    url(${(props) => props.bgimg || DefaultProgramImage1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const RowWrapper = styled.div`
  ${FlexRowBtwn};
`;

//img
export const StyledImg = styled.div`
  padding-bottom: 1rem;
`;
//name
export const Text = styled.span`
  font-size: ${(props) => props.size || "1rem"};
  font-weight: bold;
  color: white;
`;
