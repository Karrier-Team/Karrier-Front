import React, { useState } from "react";
import styled from "styled-components";
//components
import Label from "../../atoms/Label/index";
import Input from "../../atoms/Input/index";
import Textarea from "../../atoms/Textarea/index";
import FileInput from "../../atoms/FileInput/index";
import SelectInput from "../../molecules/SelectInput";
import LabeledInput from "../../molecules/LabeledInput";
import LabeledTextarea from "../../molecules/LabeledTextarea";
import OnOffBtn from "../../atoms/OnOffBtn";
//styled-component
const IntroSection = styled.section`
  margin-bottom: 5%;
`;

const CategorySection = styled.section`
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
`;

const TitleSection = styled.section`
  margin-bottom: 5%;
`;
const OnelineIntroSection = styled.section`
  margin-bottom: 5%;
`;
const ProgramDetailSection = styled.section``;
const LocationSection = styled.section`
  margin-top: 3%;
  margin-bottom: 5%;
  display: flex;
`;

const PeriodSection = styled.section``;
const TimeSection = styled.section``;
const PaySection = styled.section``;
const MaxNumSection = styled.section``;
const RecomendationSection = styled.section``;

const OffLineWrapper = styled.div``;

const OfflineComponent = () => {
  return (
    <OffLineWrapper>
      <Label name={"진행장소"} />
      <Input />
    </OffLineWrapper>
  );
};

const ProgramIntro = () => {
  const [onOff, setOnOff] = useState([true, "default"]);

  const handleOnOff = (e) => {
    console.log(e);
    setOnOff(!onOff);
  };
  return (
    <>
      <IntroSection>
        <LabeledTextarea
          name={"프로그램 소개"}
          placeholder={"프로그램 소개에 관한 안내"}
          handleChange={() => {}}
          fontsize={"big"}
        />
      </IntroSection>
      <CategorySection>
        <Label required name={"프로그램 유형"} />
        <SelectInput
          placeholder={"프로그램 유형을 선택해주세요."}
          option={["안녕하세요", "hello"]}
          width={"80%"}
        />
      </CategorySection>
      <TitleSection>
        <LabeledInput
          required
          name={"프로그램 제목"}
          handleChange={() => {}}
          placeholder={"프로그램 제목을 작성해주세요."}
        />
      </TitleSection>
      <OnelineIntroSection>
        <LabeledTextarea
          required
          name={"프로그램에 대한 한 줄 소개"}
          placeholder={"프로그램에 대한 한 줄 소개를 작성해주세요."}
          handleChange={() => {}}
        />
      </OnelineIntroSection>
      <div>
        <Label required name={"프로그램 상세 정보"} fontsize={"big"} />
      </div>
      <ProgramDetailSection>
        <LocationSection>
          <div style={{ marginRight: "5%" }}>
            <Label required name={"온라인/오프라인"} />
          </div>
          <div style={{ marginTop: "1.3%", display: "flex" }}>
            <OnOffBtn
              text={{ on: "온라인", off: "오프라인" }}
              size={"xs"}
              onClick={handleOnOff}
              value={onOff}
            />
            {onOff ? null : <OfflineComponent />}
          </div>
        </LocationSection>
      </ProgramDetailSection>
    </>
  );
};
export default ProgramIntro;
