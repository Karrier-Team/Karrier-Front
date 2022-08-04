import styled, { css } from "styled-components";

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

const boxSizeStyles = ({ size }) => {
  switch (size) {
    case "large":
      return css`
        width: 100%;
        height: 50px;
        margin-top: 30px;
        padding: 7%;
      `;
    case "small":
      return css`
        width: 30%;
        height: 25px;
        margin-top: 25px;
        padding: 5%;
      `;
    default:
      return css`
        width: 100%;
        height: 30px;
        margin-top: 30px;
        padding: 7px;
      `;
  }
};

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  border: 1px solid #e1e1e1;
  border-radius: 5px;

  ${boxSizeStyles}
`;
