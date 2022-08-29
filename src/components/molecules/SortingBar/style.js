import styled from "styled-components";

export const Div = styled.div`
  &.active {
    color: ${(props) => {
      switch (props.type) {
        case "qna":
          return "var(--primary-color)";
        case "reviews":
          return "var(--review-color)";
        case "notice":
          return "var(--nocie-color)";
        case "wishlist":
          return "var(--wishlist-color)";
        case "programs":
          return "var(--programs-color)";
        case "follow":
          return "var(--follow-color)";
        default:
          return "var(--primary-color)";
      }
    }}};
    font-size: bold;
  }
`;
