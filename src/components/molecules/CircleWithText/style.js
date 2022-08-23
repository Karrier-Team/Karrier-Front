import styled from "styled-components";

export const Round = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 4em;
  height: 4em;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.type) {
      case "qna":
        return "var(--primary-color)";
      case "review":
        return "var(--review-color)";
      case "notice":
        return "var(--nocie-color)";
      default:
        return "var(--primary-color)";
    }
  }};
`;
