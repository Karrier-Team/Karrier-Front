import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.2em 0;
`;

export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2em 0;
`;

export const ContentWrapper = styled.div`
  width: 90%;
`;

export const Section = styled.section`
  margin-bottom: 5%;
  width: 100%;
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
