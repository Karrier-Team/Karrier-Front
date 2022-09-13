import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const BtnStyle = css`
  text-decoration: none;

  visibility: ${(props) => (props.hide ? "hidden" : "visible")};

  box-sizing: border-box;
  width: ${(props) => props.size || "5.5em"};
  height: ${(props) => props.height || "2.25em"};

  color: ${(props) => (props.color ? props.color : "white")};

  background-color: ${(props) => {
    switch (props.type) {
      case "qna":
        return "var(--primary-color)";
      case "reviews":
        return "var(--reviews-color)";
      case "notice":
        return "var(--nocie-color)";
      case "wishlist":
        return "var(--wishlist-color)";
      case "programs":
        return "var(--programs-color)";
      case "followers":
        return "var(--followers-color)";
      case "cancel":
        return "white";
      default:
        return props.backgroundColor || "var(--primary-color)";
    }
  }};

  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--disabled-color);
      pointer-events: none;
    `}

  ${(props) =>
    props.type === "cancel" &&
    css`
      color: black;
    `}

  border: none;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "9px"};
  box-shadow: var(--box-shadow);

  cursor: pointer;

  font-size: ${(props) => props.fontSize || "1em"};
  font-weight: bold;

  text-align: center;
  line-height: 2.25em;

  // center 배치
  display: flex;
  align-items: center;
  justify-content: center;

  /* onHoverAnimation */
  transition: 0.15s;
  ${(props) =>
    props.onHoverAnimaton &&
    css`
      :hover {
        color: white;
        background-color: var(--primary-color);
      }
    `}
`;

export const Btn = styled.button`
  ${BtnStyle}
`;

export const StyledLink = styled(Link)`
  ${BtnStyle}
`;
