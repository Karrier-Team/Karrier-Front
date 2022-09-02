import styled from "styled-components";
import { FlexRowCenter } from "../../../commonStyles";

export const Label = styled.label`
  ${FlexRowCenter}

  box-sizing: border-box;
  width: 100%; // width (574px)
  aspect-ratio: 7/3; // height
  padding: 25px;

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);

  font-size: 3em;
  font-weight: bold;
  text-align: center;

  cursor: pointer;
`;
