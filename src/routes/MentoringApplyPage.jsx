import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";

// components
import Btn from "../components/atoms/Btn";
import LabeledInput from "../components/molecules/LabeledInput";
import LabeledDiv from "../components/molecules/LabeledDiv";
import LabeledTextarea from "../components/molecules/LabeledTextarea";
import LabeledSelector from "../components/molecules/LabeledSelector";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.2em 0;
`;

function MentoringApplyPage() {
  const [name, setName] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [region, setRegion] = useState("");
  const [school_name, setSchool] = useState("");
  const [application_route, setApplication_route] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [questionCategory, setQuestionCategory] = useState("");

  const [hasBlankInput, setHasBlankInput] = useState(true);

  return (
    <>
      <Wrapper>
        <form
          action=""
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* 추가정보 */}
          <LabeledDiv centercontent={true} fontsize="big" name={"추가 정보"}>
            {"해당 정보는 프로그램을 진행하는 멘토만 볼 수 있습니다."}
          </LabeledDiv>
          <LabeledInput
            handleChange={setName}
            placeholder="이름을 입력해주세요."
            name="이름"
            required
          ></LabeledInput>
          <LabeledSelector
            name={"성별"}
            handleChange={setGender}
            options={[
              { value: "-", name: "남성" },
              { value: "-", name: "여성" },
            ]}
          ></LabeledSelector>
          <LabeledInput
            handleChange={setPhone_no}
            placeholder="휴대전화(- 없이 작성해주세요.)"
            name="연락처"
            required
          ></LabeledInput>
          <LabeledInput
            handleChange={setAge}
            placeholder="나이를 입력해주세요."
            name="나이"
            required
          ></LabeledInput>
          <LabeledInput
            handleChange={setRegion}
            placeholder="지역 입력해주세요."
            name="지역"
            required
          ></LabeledInput>
          <LabeledInput
            handleChange={setSchool}
            placeholder="학교를 입력해주세요."
            name="학교"
            required
          ></LabeledInput>
          <LabeledInput
            handleChange={setApplication_route}
            placeholder="강의를 어떻게 알게되었는지 입력해주세요.."
            name="강의"
            required
          ></LabeledInput>
          {/* 자기소개서 */}
          <LabeledDiv centercontent={true} fontsize="big" name={"자기소개서"}>
            {"해당 정보는 프로그램을 진행하는 멘토만 볼 수 있습니다."}
          </LabeledDiv>
          <LabeledTextarea
            placeholder="내용을 입력해주세요. (30자이상)"
            name="자기소개"
            size="lg"
            handleChange={setIntroduce}
          ></LabeledTextarea>
          {/* 사전질문 */}
          <LabeledDiv centercontent={true} fontsize="big" name={"사전질문"}>
            {"해당 정보는 프로그램을 진행하는 멘토만 볼 수 있습니다."}
          </LabeledDiv>
          <LabeledSelector
            name={"질문 카테고리"}
            handleChange={setQuestionCategory}
            options={[
              { value: "-", name: "진로" },
              { value: "-", name: "학과" },
              { value: "-", name: "공모전" },
              { value: "-", name: "대외활동" },
              { value: "-", name: "인턴" },
              { value: "-", name: "직무" },
              { value: "-", name: "기타" },
            ]}
          ></LabeledSelector>
          <LabeledTextarea
            placeholder="질문 내용을 작성해주세요"
            name="질문 내용"
            size="lg"
            handleChange={setIntroduce}
          ></LabeledTextarea>
          <Btn
            handleClick={() =>
              !hasBlankInput && window.alert("프로그램신청완료")
            }
            size="30%"
          >
            프로그램 신청하기
          </Btn>
        </form>
      </Wrapper>
    </>
  );
}

export default memo(MentoringApplyPage);
