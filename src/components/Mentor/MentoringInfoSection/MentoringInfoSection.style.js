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
  :hover {
    color: white;
  }
`;

const hoverStyles = css`
  :hover {
    transition: 0.3s;
    color: white;
    background-color: var(--primary-color);
  }
`;

const activeStyles = css`
  color: var(--primary-color);
`;

const boxSizeStyles = ({ size }) => {
  switch (size) {
    case "large":
      return css`
        font-size: 1.3em;
        width: 100%;
        height: 3em;
        margin-top: 1em;
        padding: 1em;
      `;
    case "small":
      return css`
        font-size: 1em;
        width: 30%;
        height: 1.5em;
        margin-top: 1.5em;
        padding: 1em;
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

  cursor: pointer;

  ${(props) => (props.hover ? hoverStyles : null)}
  ${(props) => (props.active ? activeStyles : null)}
  ${(props) =>
    props.hover && props.active
      ? css`
          color: white;
          background-color: var(--primary-color);
        `
      : null}

  box-shadow: var(--box-shadow);

  ${boxSizeStyles}
`;
