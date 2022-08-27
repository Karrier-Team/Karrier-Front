import React, { useState } from "react";
import styled from "styled-components";
//components
import Label from "../../atoms/Label/index";
import Input from "../../atoms/Input/index";

import LabeledInput from "../../molecules/LabeledInput";
import LabeledTextarea from "../../molecules/LabeledTextarea";
import OnOffBtn from "../../atoms/OnOffBtn";
import DatePicker from "../../molecules/DatePicker/ index";
import InputTag from "../../molecules/InputTag/index";

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
const ProgramDetailSection = styled.section`
  width: 100%;
  margin-bottom: 5%;
`;
const LocationSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  height: 20vh;
`;

const PeriodSection = styled.section`
  display: flex;
  margin-bottom: 2%;
`;

const TimeSection = styled.section`
  width: 64%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
`;
const PaySection = styled.section`
  width: 64%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
`;
const MaxNumSection = styled.section`
  width: 64%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
`;
const RecomendationSection = styled.section``;

const OffLineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OfflineComponent = () => {
  return (
    <OffLineWrapper>
      <div style={{ marginLeft: "9%" }}>
        <Label name={"진행장소"} />
      </div>

      <div style={{ width: "70%" }}>
        <Input
          placeholder={"예) 대구시 경북대학교"}
          height={"0.7vh"}
          handleChange={() => {}}
        />
      </div>
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

      <TitleSection>
        <LabeledInput
          required
          name={"프로그램 제목"}
          handleChange={() => {}}
          placeholder={"프로그램 제목을 작성해주세요."}
          height={"0.7vh"}
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
          <div style={{ marginRight: "9%" }}>
            <Label required name={"온라인/오프라인"} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "1.5%",
              width: "76%",
            }}
          >
            <OnOffBtn
              text={{ on: "온라인", off: "오프라인" }}
              size={"xs"}
              onClick={handleOnOff}
              value={onOff}
            />
            {onOff ? null : <OfflineComponent />}
          </div>
        </LocationSection>
        <PeriodSection>
          <div style={{ marginRight: "15%" }}>
            <Label required name={"진행기간"} />
          </div>
          <div style={{ marginTop: "0.5%" }}>
            <DatePicker />
          </div>
        </PeriodSection>
        <TimeSection>
          <Label required name={"진행시간"} />
          <div style={{ width: "63%" }}>
            <Input
              placeholder={"예) 대구시 경북대학교"}
              height={"0.7vh"}
              handleChange={() => {}}
            />
          </div>
        </TimeSection>
        <PaySection>
          <Label required name={"가격 설정"} />
          <div style={{ width: "63%" }}>
            <Input
              placeholder={"예) 대구시 경북대학교"}
              height={"0.7vh"}
              handleChange={() => {}}
            />
          </div>
        </PaySection>
        <MaxNumSection>
          <Label required name={"최대 수강 인원"} />
          <div style={{ width: "63%" }}>
            <Input
              placeholder={"예) 대구시 경북대학교"}
              height={"0.7vh"}
              handleChange={() => {}}
            />
          </div>
        </MaxNumSection>
        <RecomendationSection>
          <div style={{ marginBottom: "3%" }}>
            <Label required name={"추천대상"} fontsize={"big"} />
          </div>
          <InputTag
            placeholder={
              "대상을 작성해주세요. 예) 컴퓨터에 관심이 있는데, 진로에 고민이 많은 이공계 학생"
            }
            btnSize={"8vw"}
            padding={"1em"}
            height={"2.25em"}
            handleInsert={() => {}}
            handleDelete={() => {}}
          />
        </RecomendationSection>
      </ProgramDetailSection>
    </>
  );
};
export default ProgramIntro;
