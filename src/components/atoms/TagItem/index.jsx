import React, { useEffect } from "react";
import styled from "styled-components";

const StyledTagWrapper = styled.div`
  margin: 0 0.4em;
  padding: 0.4em;

  border-radius: 9px;

  font-weight: bold;

  color: darkslategray;
  background-color: ${(props) => props.backgroundColor};

  text-align: center;
`;

const randomColor = [
  "#f6c9cc",
  "#a8c0c0",
  "#FEBF36",
  "#FF7238",
  "#acc7bf",
  "#c37070",
  "#eae160",
  "#bf7aa3",
  "#d7d967",
  "#ccccee",
  "#e5ddff",
  "#ffddf6",
  "#eeccd4",
  "#FC9EBD",
  "#CCD1FF",
  "#FFDDA6",
  "#B8F3B8",
];

const TagItem = ({ value, onClick }) => {
  useEffect(() => {
    console.log("render");
  }, [onClick]);

  return (
    <StyledTagWrapper
      backgroundColor={
        randomColor[Math.floor(Math.random() * randomColor.length)]
      }
    >
      {value}
      <span
        onClick={onClick}
        className={value}
        style={{
          color: "gray",
          marginLeft: "1em",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        X
      </span>
    </StyledTagWrapper>
  );
};

export default React.memo(TagItem);
