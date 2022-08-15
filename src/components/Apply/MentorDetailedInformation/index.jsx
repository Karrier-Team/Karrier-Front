import React, { memo, useState, useMemo } from "react";
import * as S from "./style";

import LabeledTextarea from "../../molecules/LabeledTextarea";
import LabeledInput from "../../molecules/LabeledInput";
import Btn from "../../atoms/Btn";
import ApplyPageUpperDiv from "../../molecules/ApplyPageUpperDiv";

// apis
import { postMentorApplyDetailedInformation } from "../../../apis/apply";

function MentorDetailedInformation() {
  const [introduce, setIntroduce] = useState("");
  const [club, setClub] = useState("");
  const [contest, setContest] = useState("");
  const [external_activity, setExternal_activity] = useState("");
  const [intern, setIntern] = useState("");

  const submitJson = useMemo(() => {
    return { introduce, club, contest, external_activity, intern };
  }, [introduce, club, contest, external_activity, intern]);

  return (
    <>
      <S.Wrapper>
        <ApplyPageUpperDiv
          title={"상세정보"}
          subtitle={"학과별 세부페이지에 나타나는 상세정보입니다."}
          contents={[
            "본인에 대한 간단한 소개를 멘토소개에 작성해주세요.",
            "공모전, 대외활동, 인턴 경험등은 기타사항에 작성해주세요.",
            "블로그, 인스타, 페이스북, 유튜브 등 소셜미디어 링크는 소셜미디어에 작성해주세요.",
          ]}
        />
        <LabeledTextarea
          placeholder="내용을 입력해주세요. (30자이상)"
          name="멘토소개"
          size="lg"
          handleChange={setIntroduce}
        ></LabeledTextarea>
        <LabeledInput
          placeholder="동아리를 기입해주세요."
          name="동아리"
          handleChange={setClub}
        ></LabeledInput>
        <LabeledInput
          placeholder="공모전 수상내역을 기입해주세요."
          name="공모전"
          handleChange={setContest}
        ></LabeledInput>
        <LabeledInput
          placeholder="대외활동을 기입해주세요."
          name="대외활동"
          handleChange={setExternal_activity}
        ></LabeledInput>
        <LabeledInput
          placeholder="인턴을 기입해주세요."
          name="인턴"
          handleChange={setIntern}
        ></LabeledInput>
        <S.RowWrapper>
          <Btn to="../step1">이전</Btn>
          <Btn
            data={submitJson}
            handleClick={postMentorApplyDetailedInformation}
            to="../step3"
          >
            다음
          </Btn>
        </S.RowWrapper>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorDetailedInformation);
