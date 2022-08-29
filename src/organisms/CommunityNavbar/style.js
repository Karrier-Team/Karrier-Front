import styled from "styled-components";

export const SubHeader = styled.div`
  width: 100vw;
  height: 18rem;
  box-sizing: border-box;

  padding: 0px 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid white;

  background-color: ${(props) => {
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

  color: white;
  font-size: 3.5em;
  font-weight: bold;
  box-sizing: border-box;
  opacity: 0.8;
`;
