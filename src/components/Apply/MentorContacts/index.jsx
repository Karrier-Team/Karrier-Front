import React, { memo, useState, useEffect } from "react";
import Btn from "../../atoms/Btn";
import ApplyPageUpperDiv from "../../molecules/ApplyPageUpperDiv";
import LabeledInput from "../../molecules/LabeledInput";
import LabeledSelector from "../../molecules/LabeledSelector";
import * as S from "./style";

import { useLocalStorage } from "@mantine/hooks";

//select data
const countryData = [
  { value: "대한민국", name: "대한민국" },
  { value: "중국", name: "중국" },
  { value: "일본", name: "일본" },
  { value: "미국", name: "미국" },
];

const cityData = [
  { value: "서울 & 경기도", name: "서울 & 경기도" },
  { value: "강원도", name: "강원도" },
  { value: "충청도(대전, 세종)", name: "충청도(대전, 세종)" },
  { value: "경상도(대구, 부산, 울산)", name: "경상도(대구, 부산, 울산)" },
  { value: "전라도(광주)", name: "전라도(광주)" },
  { value: "제주도", name: "제주도" },
  { value: "해외", name: "해외" },
];

function MentorContacts() {
  // eslint-disable-next-line no-unused-vars
  const [storage, setStorage] = useLocalStorage({
    key: "mentor_apply_info",
  });
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [phone_no, setPhone_no] = useState();

  useEffect(() => {
    setStorage((prev) => ({
      ...prev,
      country,
      city,
      phone_no,
      setStorage,
    }));
  }, [country, city, phone_no, setStorage]);

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
              required={true}
              storage={"phone_no"}
              value={phone_no}
              placeholder="010-xxxx-xxxx 형식으로 기입해주세요."
              name="휴대전화 번호"
              handleChange={setPhone_no}
              fontSize={"1em"}
              height={"7vh"}
              padding={"1em 2em"}
            ></LabeledInput>
          </S.Section>
          <S.Section>
            <LabeledSelector
              required={true}
              name={"주요 국가"}
              handleChange={setCountry}
              options={countryData}
            ></LabeledSelector>
          </S.Section>
          <S.Section>
            <LabeledSelector
              required={true}
              name={"주요 도시"}
              handleChange={setCity}
              options={cityData}
            ></LabeledSelector>
          </S.Section>
          <S.RowWrapper>
            <Btn to="../step2">이전</Btn>
            <Btn to="../step4">다음</Btn>
          </S.RowWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorContacts);
