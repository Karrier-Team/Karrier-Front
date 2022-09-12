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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Row = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;

  display: flex;
  align-items: center;
  border-top: 1px solid #e1e1e1;

  &.bt {
    border-bottom: 1px solid #e1e1e1;
  }
`;

export const Title = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  text-align: center;
  box-sizing: border-box;
  border-right: 1px solid #e1e1e1;
  background-color: #f3f3f3;
  font-weight: bold;
`;

export const Content = styled(Text)`
  display: flex;
  align-items: center;
  width: 75%;
  height: 100%;
  padding-left: 1.5em;
`;
