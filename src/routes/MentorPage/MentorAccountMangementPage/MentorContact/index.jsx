import React, { memo, useState, useEffect } from "react";
import Btn from "../../../../components/atoms/Btn";
import ApplyPageUpperDiv from "../../../../components/molecules/ApplyPageUpperDiv";
import LabeledInput from "../../../../components/molecules/LabeledInput";
import * as S from "./style";

const MentorContact = () => {
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [phone_no, setPhone_no] = useState();

  const handleSubmit = () => {
    console.log("data");
  };

  return (
    <>
      <S.Wrapper>
        <S.Section>
          <ApplyPageUpperDiv
            title={"멘토 연락처"}
            subtitle={"멘토의 개인정보 기입란입니다."}
            contents={[
              "휴대전화 번호, 이메일을 통해 멘토님에게 연락을 드릴예정입니다.",
              "국가 및 도시를 통해 오프라인 가능한 지역을 나타낼 예정입니다.",
            ]}
          />
        </S.Section>
        <S.ContentWrapper>
          <S.Section>
            <LabeledInput
              storage={"phone_no"}
              value={phone_no}
              placeholder="휴대전화 번호를 입력해주세요."
              name="휴대전화 번호"
              handleChange={setPhone_no}
              fontSize={"1em"}
              height={"7vh"}
              padding={"1em 2em"}
            ></LabeledInput>
          </S.Section>
          <S.Section>
            <LabeledInput
              placeholder="주요 활동 국가를 입력해주세요."
              name="국가"
              handleChange={setCountry}
              storage={"country"}
              value={country}
              fontSize={"1em"}
              height={"7vh"}
              padding={"1em 2em"}
            ></LabeledInput>
          </S.Section>
          <S.Section>
            <LabeledInput
              placeholder="주요 활동 도시를 입력해주세요."
              name="도시"
              handleChange={setCity}
              storage={"city"}
              value={city}
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
    </>
  );
};

export default MentorContact;
