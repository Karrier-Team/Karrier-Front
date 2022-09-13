import styled, { css } from "styled-components";
import { FlexCol } from "../../../commonStyles";

const colors = {
  point: "#007CC6",
  primary: "#262626",
};

const sizes = {
  large: {
    fontSize: "28px",
    lineHeight: "32px",
  },
  medium: {
    fontSize: "22px",
    lineHeight: "32px",
  },
  small: {
    fontSize: "16px",
    lineHeight: "32px",
  },
};

const colorStyles = ({ color }) => css`
  color: ${colors[color] || "black"};
`;

const sizeStyles = ({ size }) => css`
  font-size: ${(sizes[size] && sizes[size].fontSize) || "1rem"};
  line-height: ${(sizes[size] && sizes[size].lineHeight) || "1rem"};
`;

export const Text = styled.div`
  ${sizeStyles}
  ${colorStyles}
`;

export const Wrapper = styled.div`
  ${FlexCol}
  gap: 3rem;
`;

export const SubWrapper = styled.div`
  ${FlexCol}
  gap: 1rem;
`;

export const StyledH1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color-l);
`;

export const StyledH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: black;
  font-weight: bold;
`;

export const Parag = styled.pre`
  font-size: 1rem;
  color: var(--text-color-l);
  line-height: 1.5rem;
`;

export const Badge = styled.div`
  border-radius: 10px;
  padding: 0.4rem;
  font-size: 1rem;
  color: black;
  background-color: ${(props) => props.bgcolor || "white"};
`;
