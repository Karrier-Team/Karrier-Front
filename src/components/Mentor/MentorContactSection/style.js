import styled, { css } from "styled-components";

const colors = {
  point: "#007CC6",
  primary: "#262626",
};

const sizes = {
  large: {
    fontSize: "28px",
  },
  medium: {
    fontSize: "22px",
  },
  small: {
    fontSize: "16px",
  },
};

const colorStyles = ({ color }) => css`
  color: ${colors[color] || "black"};
`;

const sizeStyles = ({ size }) => css`
  font-size: ${(sizes[size] && sizes[size].fontSize) || "1rem"};
  /* line-height: ${(sizes[size] && sizes[size].lineHeight) || "1rem"}; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 5rem;
  padding: 0 10%;
  background-color: #f0f0f0;
  border-top: 1px solid #e1e1e1;
`;

export const Text = styled.span`
  ${sizeStyles}
  ${colorStyles}
  font-weight: bold;
  vertical-align: baseline;
`;

export const SNSImg = styled.img`
  width: ${sizes.large.fontSize};
  height: ${sizes.large.fontSize};
  :hover {
    cursor: pointer;
  }
`;
