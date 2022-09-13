import styled from "styled-components";
import React from "react";
import LectureItem from "../Lecture/LectureItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const LectureList = ({ lectureList, handleDelete }) => {
  return (
    <Wrapper>
      {lectureList.map((it) => {
        return <LectureItem lecture={it} handleDelete={handleDelete} />;
      })}
    </Wrapper>
  );
};
export default React.memo(LectureList);
