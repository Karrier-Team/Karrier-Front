import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
//components
import Label from "../../atoms/Label";
import Btn from "../../atoms/Btn";
import Input from "../../atoms/Input/index";
import Textarea from "../../atoms/Textarea";
import Div from "../../atoms/Div";
import LectureList from "../Lecture/LectureList";
import { curriculumData } from "../hardData";

const Wrapper = styled.div`
  width: 100%;
`;

const LectureSection = styled.section`
  margin-bottom: 4%;
`;
const HeadSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
`;

const Span = styled.span`
  font-weight: bold;
  font-size: 1.1em;
  color: #acacac;
`;

const Curriculum = ({ curriculum, handleChange }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const lectureRef = useRef(0);

  const handleInsert = () => {
    handleChange([
      ...curriculum,
      {
        id: lectureRef.current,
        title: title,
        content: content,
      },
    ]);
    setTitle("");
    setContent("");
    lectureRef.current += 1;
  };

  const handleDelete = (id) => {
    handleChange(curriculum.filter((it) => it.id !== id));
  };

  return (
    <Wrapper>
      <div style={{ marginBottom: "3%" }}>
        <div style={{ marginBottom: "3%" }}>
          <Label name={"커리큘럼"} fontsize={"big"} />
        </div>
        <Div width={"100%"} height={"100%"} pd={"2em 3em"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1em",
            }}
          >
            <Label name={curriculumData.name} fontsize={"big"} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5em",
              }}
            >
              {curriculumData.data.map((it) => (
                <Span>{it}</Span>
              ))}
            </div>
          </div>
        </Div>
      </div>
      <HeadSection>
        <Label required name={"강의 구성"} />
        <div style={{ marginTop: "3%" }}>
          <Btn
            children={"새로 만들기"}
            size={"8em"}
            height={"2.5em"}
            backgroundColor={"#007bc3"}
            fontSize={".7em"}
            handleClick={handleInsert}
          />
        </div>
      </HeadSection>
      <LectureSection>
        <Input
          placeholder={"제목을 작성해주세요."}
          value={title}
          handleChange={setTitle}
          height={"5vh"}
          padding={"1.5em"}
        />
        <br />
        <br />
        <Textarea
          placeholder={"내용을 작성해주세요."}
          value={content}
          handleChange={setContent}
          height={"30vh"}
        />
      </LectureSection>
      <LectureList lectureList={curriculum} handleDelete={handleDelete} />
    </Wrapper>
  );
};

export default Curriculum;
