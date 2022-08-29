import React, { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BarDiv = styled.div`
  width: 100vw;
  height: 3em;
  box-sizing: border-box;

  padding: 0px 30px;

  display: ${({ visible }) => (visible ? "flex" : "none")};
  align-items: center;

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

  opacity: 0.8;
  transition: 0.3s;

  :hover {
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Text = styled.span`
  color: #f1f1f1;
  font-size: 1.5em;
`;

function AdBar({ isAdVisible = true, type }) {
  return (
    <BarDiv type={type} visible={isAdVisible}>
      <Text>
        <StyledLink to="/apply">
          상시 멘토 모집 지금 Karrier와 함께하세요
        </StyledLink>
      </Text>
    </BarDiv>
  );
}

export default memo(AdBar);
