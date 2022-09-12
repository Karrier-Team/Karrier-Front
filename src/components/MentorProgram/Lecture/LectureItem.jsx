import styled from "styled-components";
import React from "react";
//component
import Label from "../../atoms/Label";

const Wrapper = styled.div`
  background-color: ${(props) => props.color};
  padding: 1.2em;
  border-radius: 10px;
`;

const HeadSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
`;

const color = ["var( --bg-color-lll)", "var(--bg-color-l)"];

const LectureItem = ({ lecture, handleDelete }) => {
  return (
    <Wrapper color={color[lecture.id % 2]}>
      <HeadSection>
        <Label name={lecture.title} />
        <div
          style={{
            backgroundColor: "transparent",
            fontWeight: "bold",
            fontSize: "1.2em",
            opacity: "0.9",
            cursor: "pointer",
          }}
          onClick={() => handleDelete(lecture.id)}
        >
          x
        </div>
      </HeadSection>
      <p style={{ fontWeight: "bold", opacity: "0.8" }}>{lecture.content}</p>
    </Wrapper>
  );
};
export default React.memo(LectureItem);
