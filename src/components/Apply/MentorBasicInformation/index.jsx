import React, { memo, useState } from "react";
import * as S from "./style";

import LabeledInput from "../../molecules/LabeledInput";
import Btn from "../../atoms/Btn";

function MentorBasicInformation() {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [student_id, setStudent_id] = useState("");
  const [year, setYear] = useState("");

  return (
    <>
      <S.Wrapper>
        <LabeledInput
          handleChange={setName}
          placeholder="이름을 기입해주세요."
          name="이름"
        ></LabeledInput>
        <LabeledInput
          handleChange={setUniversity}
          placeholder="본인의 대학교를 기입해주세요."
          name="대학교"
        ></LabeledInput>
        <LabeledInput
          handleChange={setMajor}
          placeholder="본인의 전공을 기입해주세요."
          name="전공"
        ></LabeledInput>
        <LabeledInput
          handleChange={setStudent_id}
          placeholder="본인의 학번을 기입해주세요."
          name="학번"
        ></LabeledInput>
        <LabeledInput
          handleChange={setYear}
          placeholder="본인의 학년을 기입해주세요."
          name="학년"
        ></LabeledInput>
        <S.RowWrapper>
          <Btn hide={true}>이전</Btn>
          <Btn to="../step2">다음</Btn>
        </S.RowWrapper>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorBasicInformation);
