import React, { memo, useState, useMemo } from "react";
import Btn from "../../atoms/Btn";
import ApplyPageUpperDiv from "../../molecules/ApplyPageUpperDiv";
import LabeledInput from "../../molecules/LabeledInput";
import * as S from "./style";

// apis
import { postMentorApplyContactsInformation } from "../../../apis/apply";

function MentorContacts() {
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [phone_no, setPhone_no] = useState();

  const submitJson = useMemo(() => {
    return { country, city, phone_no };
  }, [country, city, phone_no]);

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
          placeholder="주요 활동 국가를 입력해주세요."
          name="휴대전화 번호"
          handleChange={setPhone_no}
        ></LabeledInput>
        <LabeledInput
          placeholder="주요 활동 국가를 입력해주세요."
          name="국가"
          handleChange={setCountry}
        ></LabeledInput>
        <LabeledInput
          placeholder="주요 활동 도시를 입력해주세요."
          name="도시"
          handleChange={setCity}
        ></LabeledInput>
        <S.RowWrapper>
          <Btn to="../step2">이전</Btn>
          <Btn
            data={submitJson}
            handleClick={postMentorApplyContactsInformation}
            to="../step4"
          >
            다음
          </Btn>
        </S.RowWrapper>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorContacts);
