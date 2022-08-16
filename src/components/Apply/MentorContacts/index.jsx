import React, { memo, useState, useEffect } from "react";
import Btn from "../../atoms/Btn";
import ApplyPageUpperDiv from "../../molecules/ApplyPageUpperDiv";
import LabeledInput from "../../molecules/LabeledInput";
import * as S from "./style";

import { useLocalStorage } from "@mantine/hooks";

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
        <ApplyPageUpperDiv
          title={"멘토 연락처"}
          subtitle={"멘토의 개인정보 기입란입니다."}
          contents={[
            "휴대전화 번호, 이메일을 통해 멘토님에게 연락을 드릴예정입니다.",
            "국가 및 도시를 통해 오프라인 가능한 지역을 나타낼 예정입니다.",
          ]}
        />
        <LabeledInput
          storage={"phone_no"}
          value={phone_no}
          placeholder="주요 활동 국가를 입력해주세요."
          name="휴대전화 번호"
          handleChange={setPhone_no}
        ></LabeledInput>
        <LabeledInput
          placeholder="주요 활동 국가를 입력해주세요."
          name="국가"
          handleChange={setCountry}
          storage={"country"}
          value={city}
        ></LabeledInput>
        <LabeledInput
          placeholder="주요 활동 도시를 입력해주세요."
          name="도시"
          handleChange={setCity}
          storage={"city"}
          value={city}
        ></LabeledInput>
        <S.RowWrapper>
          <Btn to="../step2">이전</Btn>
          <Btn to="../step4">다음</Btn>
        </S.RowWrapper>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorContacts);
