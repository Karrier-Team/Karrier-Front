import styled from "styled-components";
import { FlexRowCenter } from "../../../commonStyles";

export const Img = styled.img`
  ${FlexRowCenter}

  box-sizing: border-box;
  width: 100%; // width (574px)
  aspect-ratio: ${(props) => (props.aspectRatio ? props.aspectRatio : 7 / 3)};
  padding: 0;

  border: none;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "9px"};
  box-shadow: var(--box-shadow);

  font-size: 3em;
  font-weight: bold;
  text-align: center;

  cursor: pointer;
`;
