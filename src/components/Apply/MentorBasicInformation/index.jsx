import React, { memo, useState, useMemo } from "react";
import * as S from "./style";
import { colleges } from "../../../common/Navbar/colleges";

// components
import LabeledInput from "../../molecules/LabeledInput";
import Btn from "../../atoms/Btn";
import LabeledSelector from "../../molecules/LabeledSelector";

// apis
import { postMentorApplyBasicInformation } from "../../../apis/apply";
import ApplyPageUpperDiv from "../../molecules/ApplyPageUpperDiv";

const converted_colleges = (colleges) => {
  return colleges.map((college) => {
    return { value: college.value, name: college.college };
  });
};

// return { itemId: item.id, itemName: item.name };
function MentorBasicInformation() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [college, setCollege] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [student_id, setStudent_id] = useState("");
  const [year, setYear] = useState("");

  const submitJson = useMemo(() => {
    return { name, university, major, student_id, year, gender, college };
  }, [name, university, major, student_id, year, gender, college]);

  return (
    <>
      <S.Wrapper>
        <ApplyPageUpperDiv
          title={"기본정보"}
          subtitle={"학과별 페이지에 나타나는 기본정보입니다."}
          contents={[
            "대학교, 단과대학, 학과 정보를 정확하게 작성해주세요.",
            "기본정보는 캐리어에서 사용하는 멘토님의 명합입니다.",
          ]}
        />
        <LabeledInput
          handleChange={setName}
          placeholder="이름을 기입해주세요."
          name="이름"
        ></LabeledInput>
        <LabeledSelector
          name={"성별"}
          handleChange={setGender}
          options={[
            { value: "male", name: "남성" },
            { value: "female", name: "여성" },
          ]}
        ></LabeledSelector>
        <LabeledInput
          handleChange={setUniversity}
          placeholder="본인의 대학교를 기입해주세요."
          name="대학교"
        ></LabeledInput>
        <LabeledSelector
          name={"단과대학"}
          handleChange={setCollege}
          options={converted_colleges(colleges)}
        ></LabeledSelector>
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
          <Btn
            data={submitJson}
            handleClick={postMentorApplyBasicInformation}
            to="../step2"
          >
            다음
          </Btn>
        </S.RowWrapper>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorBasicInformation);
