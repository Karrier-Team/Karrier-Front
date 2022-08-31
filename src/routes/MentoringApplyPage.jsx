import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";

// components
import Btn from "../components/atoms/Btn";
import LabeledInput from "../components/molecules/LabeledInput";
import LabeledDiv from "../components/molecules/LabeledDiv";
import LabeledTextarea from "../components/molecules/LabeledTextarea";
import LabeledSelector from "../components/molecules/LabeledSelector";
import OnOffBtn from "../components/atoms/OnOffBtn";
import Label from "../components/atoms/Label";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 3%;
`;

const GenderSection = styled.section`
  width: 100%;
  margin-bottom: 5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 6%;
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
    <Wrapper>
      <form
        action=""
        style={{
          width: "45%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* 추가정보 */}
        <Section>
          <LabeledDiv
            centercontent={true}
            fontsize="big"
            name={"추가 정보"}
            height={"14vh"}
          >
            {"해당 정보는 프로그램을 진행하는 멘토만 볼 수 있습니다."}
          </LabeledDiv>
        </Section>
        <Section>
          <LabeledInput
            required
            value={name}
            handleChange={setName}
            placeholder="이름을 입력해주세요."
            name="이름"
            fontSize={"1em"}
            height={"7vh"}
            padding={"1em 2em"}
          ></LabeledInput>
        </Section>
        <GenderSection>
          <Label required name={"성별"} />
          <div style={{ marginLeft: "15%", marginTop: "1%" }}>
            <OnOffBtn text={{ on: "남", off: "여" }} size={"sm"} />
          </div>
        </GenderSection>
        <Section>
          <LabeledInput
            value={phone_no}
            handleChange={setName}
            placeholder="휴대전화(- 없이 작성해주세요.)"
            name="연락처"
            required
            fontSize={"1em"}
            height={"7vh"}
            padding={"1em 2em"}
          ></LabeledInput>
        </Section>
        <Section>
          <LabeledInput
            value={gender}
            handleChange={setAge}
            placeholder="나이를 입력해주세요."
            name="나이"
            required
            fontSize={"1em"}
            height={"7vh"}
            padding={"1em 2em"}
          ></LabeledInput>
        </Section>
        <Section>
          <LabeledInput
            handleChange={setRegion}
            placeholder="지역 입력해주세요."
            name="지역"
            required
            fontSize={"1em"}
            height={"7vh"}
            padding={"1em 2em"}
          ></LabeledInput>
        </Section>
        <Section>
          <LabeledInput
            handleChange={setSchool}
            placeholder="학교를 입력해주세요."
            name="학교"
            required
            fontSize={"1em"}
            height={"7vh"}
            padding={"1em 2em"}
          ></LabeledInput>
        </Section>
        <Section>
          <LabeledInput
            handleChange={setApplication_route}
            placeholder="강의를 어떻게 알게되었는지 입력해주세요.."
            name="강의"
            required
            fontSize={"1em"}
            height={"7vh"}
            padding={"1em 2em"}
          ></LabeledInput>
        </Section>
        {/* 자기소개서 */}
        <br />
        <Section>
          <LabeledDiv
            centercontent={true}
            fontsize="big"
            name={"자기소개서"}
            height={"14vh"}
          >
            {"해당 정보는 프로그램을 진행하는 멘토만 볼 수 있습니다."}
          </LabeledDiv>
        </Section>
        <Section>
          <LabeledTextarea
            required
            placeholder="내용을 입력해주세요. (30자이상)"
            name="자기소개"
            size="lg"
            handleChange={setIntroduce}
          ></LabeledTextarea>
        </Section>
        <br />
        <Section>
          {/* 사전질문 */}
          <Label name={"사전 질문"} fontsize={"big"} />
        </Section>
        <Section>
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
        </Section>
        <Section>
          <LabeledTextarea
            placeholder="질문 내용을 작성해주세요"
            name="질문 내용"
            size="lg"
            handleChange={setIntroduce}
          ></LabeledTextarea>
        </Section>
        <Section>
          <Btn
            handleClick={() =>
              !hasBlankInput && window.alert("프로그램신청완료")
            }
            size="100%"
            height={"3em"}
          >
            프로그램 신청하기
          </Btn>
        </Section>
      </form>
    </Wrapper>
  );
}

export default memo(MentoringApplyPage);
