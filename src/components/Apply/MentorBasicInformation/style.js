import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

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