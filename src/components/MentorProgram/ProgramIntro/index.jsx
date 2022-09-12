import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
//components
import Label from "../../atoms/Label/index";
import Input from "../../atoms/Input/index";
import Div from "../../atoms/Div";
import LabeledInput from "../../molecules/LabeledInput";
import LabeledTextarea from "../../molecules/LabeledTextarea";
import OnOffBtn from "../../atoms/OnOffBtn";

import InputTag from "../../molecules/InputTag/index";
import Selector from "../../atoms/Selector/index";

import { programOption } from "../hardData";
import MentorIntro from "../MentorIntro";

//styled-component
const Wrapper = styled.div`
  margin-bottom: 10%;
`;
const IntroSection = styled.section`
  margin-bottom: 5%;
`;

const OptionSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;
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
  height: 18vh;
`;

const PeriodSection = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;
`;

const TimeSection = styled.section`
  width: 80%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
`;
const PaySection = styled.section`
  width: 80%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
`;
const MaxNumSection = styled.section`
  width: 80%;
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

const Span = styled.span`
  font-weight: bold;
  font-size: 1.1em;
  color: gray;
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
          padding={"1.5em"}
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

  const tagRef = useRef(0);

  // 태그 추가
  const handleInsert = () => {
    if (programIntro.recommended_target.length < 10) {
      if (programIntro.recommended_target.find((tag) => tag === inputValue)) {
        alert("다른 추천 대상을 입력해 주세요.");
      } else {
        handleChange({
          ...programIntro,
          recommended_target: [
            {
              id: tagRef.current,
              data: inputValue,
            },
            ...programIntro.recommended_target,
          ],
        });
      }
    } else {
      alert("최대 10개까지 작성할 수 있습니다.");
    }
    console.log(programIntro.recommended_target);
    setInputValue("");
    tagRef.current += 1;
  };

  // 태그 삭제
  const handleDelete = (id) => {
    handleChange({
      ...programIntro,
      recommended_target: programIntro.recommended_target.filter(
        (item) => item.id !== id
      ),
    });
  };

  return (
    <Wrapper>
      <IntroSection>
        <div style={{ marginBottom: "3%" }}>
          <Label name={"프로그램 소개에 관한 안내"} fontsize={"big"} />
        </div>

        <Div width={"100%"} height={"100%"} pd={"2em 3em"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2em",
            }}
          >
            <Label name={"프로그램 소개에 관한 안내"} fontsize={"big"} />
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Label name={"프로그램 유형"} />
              <Span>- 본인이 하고자 하는 프로그램의 유형을 선택해주세요.</Span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Label name={"프로그램 제목"} />
              <Span>- 제목은 15자이내로 간결하게 작성해주세요.</Span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Label name={"프로그램 소개"} />
              <Span>
                - 프로그램에 대한 목적과 멘티들에게 전하고 싶은 내용을
                작성해주세요.
                <br />- 글자수는 최소 150자 이상으로 작성해주세요
              </Span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Label name={"온/오프라인여부"} />
              <Span>
                - 온라인/오프라인 둘 중에 하나를 선택해주세요.
                <br />- 오프라인인 경우, 진행장소까지 입력해주세요.
              </Span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Label name={"진행 기간"} />
              <Span>- 해당 프로그램 전체 기간에 대해 표시해주세요.</Span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Label name={"진행 시간"} />
              <Span>
                - 해당 프로그램 전체 시간에 대해 작성해주세요.
                <br />- 예) 화, 목 오전 10시 - 12시 / 금 오후 2시 - 4시
              </Span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Label name={"가격설정"} />
              <Span>
                - 해당 프로그램에 대한 멘티 1인당 가격입니다.
                <br />- 최대 10만원까지이니, 양심껏 입력해주세요.
              </Span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Label name={"최대수강인원"} />
              <Span>- 해당 프로그램에 대한 최대수강인원은 6명입니다.</Span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Label name={"추천대상"} />
              <Span>
                - 해당 프로그램에 대해 본인이 생각했을 때, 들었으면 하는 대상을
                입력해주세요.
              </Span>
            </div>
          </div>
        </Div>
      </IntroSection>
      <OptionSection>
        <Label name={"프로그램 유형"} required />
        <Selector
          width={"80%"}
          name={"프로그램 유형"}
          options={programOption.options}
        />
      </OptionSection>
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
          height={"50vh"}
          value={programIntro.shortIntro}
          name={"프로그램 소개"}
          placeholder={"프로그램 소개를 작성해주세요."}
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
          <Label required name={"진행기간"} />
          <div
            style={{
              width: "63%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* <DatePicker
              value={[programIntro.open_date, programIntro.close_date]}
              onChange={(e) => {
                handleChange({
                  ...programIntro,
                  open_date: e[0],
                  close_date: e[1],
                });
              }}
            /> */}
            <div style={{ width: "45%" }}>
              <Input
                type={"date"}
                height={"6.2vh"}
                padding={"1.5em"}
                color={" #acacac"}
                value={programIntro.open_date}
                handleChange={(e) => {
                  handleChange({
                    ...programIntro,
                    open_date: e,
                  });
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textWeight: "bold",
                fontSize: "2em",
              }}
            >
              ~
            </div>
            <div style={{ width: "45%" }}>
              <Input
                type={"date"}
                color={" #acacac"}
                width={"80%"}
                height={"6vh"}
                padding={"1.5em"}
                value={programIntro.close_date}
                handleChange={(e) => {
                  handleChange({
                    ...programIntro,
                    close_date: e,
                  });
                }}
              />
            </div>
          </div>
        </PeriodSection>
        <TimeSection>
          <Label required name={"진행시간"} />
          <div style={{ width: "63%" }}>
            <Input
              placeholder={
                "예) 화, 목 - 오전 10시 ~ 12시 / 금 - 오후 2시 ~ 4시"
              }
              height={"0.7vh"}
              padding={"1.5em"}
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
              padding={"1.5em"}
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
              padding={"1.5em"}
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
    </Wrapper>
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
