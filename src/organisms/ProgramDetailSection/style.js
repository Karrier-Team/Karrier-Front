import styled, { css } from "styled-components";
import { FlexRowBtwn, FlexRowCenter } from "../../commonStyles";

const colorStyles = ({ color }) => css`
  color: ${colors[color] || "black"};
`;

const sizeStyles = ({ size }) => css`
  font-size: ${(sizes[size] && sizes[size].fontSize) || "1rem"};
  line-height: ${(sizes[size] && sizes[size].lineHeight) || "1rem"};
`;

export const Span = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  background-color: red;
  margin-top: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

export const Div = styled.div`
  ${FlexRowBtwn};
  width: 100%;
  height: 4rem;
  margin: 0.5% 0;
  box-sizing: border-box;
`;

export const Left = styled.div`
  ${FlexRowCenter};
  width: 19.5%;
  height: 100%;
  font-weight: bold;
  background-color: var(--bg-color-l);
`;

export const Right = styled.div`
  ${FlexRowCenter};
  width: 80%;
  height: 100%;
  background-color: var(--bg-color-l);
  font-weight: bold;
  color: ${(props) => props.color || "black"};
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

export const Text = styled.div`
  ${sizeStyles}
  ${colorStyles}
`;

export const SubWrapper = styled.div`
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
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e1e1e1;

  &.bt {
    border-bottom: 1px solid #e1e1e1;
  }

  &.lg {
    height: 70px;
    background-color: var(--bg-color-l);
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export const Title = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
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
  width: 60%;
  height: 100%;
  padding: 0 1.5em;
`;
