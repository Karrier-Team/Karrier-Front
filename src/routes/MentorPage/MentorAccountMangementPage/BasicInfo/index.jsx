import { useState } from "react";
import * as S from "./style";
import { colleges } from "../../../../common/Navbar/colleges";

// components
import LabeledInput from "../../../../components/molecules/LabeledInput";
import Btn from "../../../../components/atoms/Btn";
import LabeledSelector from "../../../../components/molecules/LabeledSelector";
import ApplyPageUpperDiv from "../../../../components/molecules/ApplyPageUpperDiv";

const converted_colleges = (colleges) => {
  return colleges.map((college) => {
    return { value: college.value, name: college.college };
  });
};

const BasicInfo = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [college, setCollege] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [detailedMajor, setDetailedMajor] = useState("");
  const [student_id, setStudent_id] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = () => {
    console.log(name);
  };

  return (
    <S.Wrapper>
      <S.Section>
        <ApplyPageUpperDiv
          title={"기본정보"}
          subtitle={"학과별 페이지에 나타나는 기본정보입니다."}
          contents={[
            "대학교, 단과대학, 학과 정보를 정확하게 작성해주세요.",
            "기본정보는 캐리어에서 사용하는 멘토님의 명합입니다.",
          ]}
        />
      </S.Section>
      <S.ContentWrapper>
        <S.Section>
          <LabeledInput
            required
            storage={"name"}
            value={name}
            handleChange={setName}
            placeholder="이름을 기입해주세요."
            name="이름"
            fontSize={"1em"}
            height={"7vh"}
            padding={"1em 2em"}
          ></LabeledInput>
        </S.Section>
        <S.Section>
          <LabeledSelector
            name={"성별"}
            required
            handleChange={setGender}
            options={[
              { value: "male", name: "남성" },
              { value: "female", name: "여성" },
            ]}
          ></LabeledSelector>
        </S.Section>
        <S.Section>
          <LabeledInput
            required
            storage={"university"}
            value={university}
            handleChange={setUniversity}
            placeholder="본인의 대학교를 기입해주세요."
            name="대학교"
            fontSize={"1em"}
            height={"7vh"}
            padding={"1em 2em"}
          ></LabeledInput>
        </S.Section>
        <S.Section>
          <LabeledSelector
            required
            name={"단과대학"}
            handleChange={setCollege}
            options={converted_colleges(colleges)}
          ></LabeledSelector>
        </S.Section>
        <S.Section>
          <LabeledInput
            required
            storage={"major"}
            value={major}
            handleChange={setMajor}
            placeholder="본인의 학과를 기입해주세요."
            name="학과"
            fontSize={"1em"}
            height={"7vh"}
            padding={"1em 2em"}
          ></LabeledInput>
        </S.Section>
        <S.Section>
          <LabeledInput
            storage={"detailedMajor"}
            value={detailedMajor}
            handleChange={setDetailedMajor}
            placeholder="본인의 세부 전공을 기입해주세요."
            name="세부 전공"
            fontSize={"1em"}
            height={"7vh"}
            padding={"1em 2em"}
          ></LabeledInput>
        </S.Section>
        <S.Section>
          <LabeledInput
            required
            storage={"student_id"}
            value={student_id}
            handleChange={setStudent_id}
            placeholder="본인의 학번을 기입해주세요."
            name="학번"
            fontSize={"1em"}
            height={"7vh"}
            padding={"1em 2em"}
          ></LabeledInput>
        </S.Section>
        <S.Section>
          <LabeledInput
            required
            storage={"year"}
            value={year}
            handleChange={setYear}
            placeholder="본인의 학년을 기입해주세요."
            name="학년"
            fontSize={"1em"}
            height={"7vh"}
            padding={"1em 2em"}
          ></LabeledInput>
        </S.Section>
        <S.RowWrapper>
          <Btn children={"저장"} handleClick={handleSubmit} size={"80%"} />
        </S.RowWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default BasicInfo;
