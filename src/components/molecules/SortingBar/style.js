import styled from "styled-components";
import { Text } from "@mantine/core";

const getColorByType = () => {
  return (props) => {
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
      case "follow":
        return "var(--follow-color)";
      default:
        return "var(--primary-color)";
    }
  };
};

export const StyledText = styled(Text)`
  color: gray;
  vertical-align: baseline;
  margin-left: 0.5rem;
  line-height: 1rem;
  &.active {
    color: ${getColorByType()};
    opacity: 0.8;
    font-weight: bold;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  border: 1px solid gray;
  &.active {
    background-color: ${getColorByType()};
    border-color: ${getColorByType()};
    opacity: 0.8;
  }
`;
