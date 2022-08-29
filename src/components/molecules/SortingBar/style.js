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
        default:
          return "var(--primary-color)";
      }
    }};
    font-size: bold;
  }
`;
