import React, { useState, useCallback } from "react";
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
  margin-bottom: 10%;
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

const OfflineComponent = ({ value, handleChange }) => {
  return (
    <OffLineWrapper>
      <div style={{ marginLeft: "9%" }}>
        <Label name={"진행장소"} />
      </div>

      <div style={{ width: "70%" }}>
        <Input
          placeholder={"예) 대구시 경북대학교"}
          height={"0.7vh"}
          value={value}
          handleChange={handleChange}
        />
      </div>
    </OffLineWrapper>
  );
};

const ProgramIntro = ({ programIntro, handleChange }) => {
  // tag input state
  const [inputValue, setInputValue] = useState("");

  // 태그 추가
  const handleInsert = useCallback(() => {
    if (programIntro.recommended_target.length < 10) {
      if (programIntro.recommended_target.find((tag) => tag === inputValue)) {
        alert("다른 추천 대상을 입력해 주세요.");
      } else {
        handleChange({
          ...programIntro,
          recommended_target: [inputValue, ...programIntro.recommended_target],
        });
      }
    } else {
      alert("최대 10개까지 작성할 수 있습니다.");
    }
    setInputValue("");
  }, [inputValue]);

  // 태그 삭제
  const handleDelete = useCallback(
    (e) => {
      const newData = programIntro.recommended_target.filter((tag) => {
        return !(tag === e.target.className);
      });
      handleChange({
        ...programIntro,
        recommended_target: [...newData],
      });
    },
    [programIntro.recommended_target]
  );

  return (
    <>
      <IntroSection>
        <LabeledTextarea
          value={programIntro.intro}
          name={"프로그램 소개"}
          placeholder={"프로그램 소개에 관한 안내"}
          handleChange={(e) => {
            handleChange({
              ...programIntro,
              intro: e,
            });
          }}
          fontsize={"big"}
        />
      </IntroSection>
      <TitleSection>
        <LabeledInput
          required
          value={programIntro.title}
          name={"프로그램 제목"}
          handleChange={(e) => {
            handleChange({
              ...programIntro,
              title: e,
            });
          }}
          placeholder={"프로그램 제목을 작성해주세요."}
          height={"0.7vh"}
        />
      </TitleSection>
      <OnelineIntroSection>
        <LabeledTextarea
          required
          value={programIntro.shortIntro}
          name={"프로그램에 대한 한 줄 소개"}
          placeholder={"프로그램에 대한 한 줄 소개를 작성해주세요."}
          handleChange={(e) => {
            handleChange({
              ...programIntro,
              shortIntro: e,
            });
          }}
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
              value={programIntro.onOff}
              onClick={() => {
                handleChange({
                  ...programIntro,
                  onOff: !programIntro.onOff,
                });
              }}
            />
            {programIntro.onOff ? null : (
              <OfflineComponent
                value={programIntro.offline_place}
                handleChange={(e) => {
                  handleChange({
                    ...programIntro,
                    offline_place: e,
                  });
                }}
              />
            )}
          </div>
        </LocationSection>
        <PeriodSection>
          <div style={{ marginRight: "15%" }}>
            <Label required name={"진행기간"} />
          </div>
          <div style={{ marginTop: "0.5%" }}>
            <DatePicker
              value={[programIntro.open_date, programIntro.close_date]}
              onChange={(e) => {
                handleChange({
                  ...programIntro,
                  open_date: e[0],
                  close_date: e[1],
                });
              }}
            />
          </div>
        </PeriodSection>
        <TimeSection>
          <Label required name={"진행시간"} />
          <div style={{ width: "63%" }}>
            <Input
              placeholder={"예) 대구시 경북대학교"}
              height={"0.7vh"}
              value={programIntro.running_time}
              handleChange={(e) => {
                handleChange({
                  ...programIntro,
                  running_time: e,
                });
              }}
            />
          </div>
        </TimeSection>
        <PaySection>
          <Label required name={"가격 설정"} />
          <div style={{ width: "63%" }}>
            <Input
              placeholder={"가격을 입력해주세요."}
              height={"0.7vh"}
              value={programIntro.price}
              handleChange={(e) => {
                handleChange({
                  ...programIntro,
                  price: e,
                });
              }}
            />
          </div>
        </PaySection>
        <MaxNumSection>
          <Label required name={"최대 수강 인원"} />
          <div style={{ width: "63%" }}>
            <Input
              placeholder={"최대 수강 인원을 입력해주세요."}
              height={"0.7vh"}
              value={programIntro.max_people}
              handleChange={(e) => {
                handleChange({
                  ...programIntro,
                  max_people: e,
                });
              }}
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
            tagPlaceholder={"추천대상을 추가해주세요."}
            btnSize={"8vw"}
            padding={"1em"}
            height={"2.25em"}
            tagList={programIntro.recommended_target}
            inputValue={inputValue}
            handleChange={setInputValue}
            handleInsert={handleInsert}
            handleDelete={handleDelete}
          />
        </RecomendationSection>
      </ProgramDetailSection>
    </>
  );
};
ProgramIntro.defaultProps = {
  programIntro: {
    intro: "",
    title: "",
    shortIntro: "",
    onOff: true,
    offline_place: "",
    open_date: new Date(),
    close_date: new Date(),
    running_time: "",
    max_people: undefined,
    price: undefined,
    recommended_target: [],
  },
};

export default ProgramIntro;
