import styled from "styled-components";
import { FlexRowBtwn } from "../../commonStyles";

export const Wrapper = styled.div`
  ${FlexRowBtwn}
  width: 100%;
`;

export const Text = styled.span`
  color: ${(props) => {
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
      default:
        return "var(--primary-color)";
    }
  }};
  font-weight: bold;
`;
