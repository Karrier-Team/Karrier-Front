import React, { memo, useState, useEffect } from "react";
import * as S from "./style";

import LabeledTextarea from "../../molecules/LabeledTextarea";
import LabeledInput from "../../molecules/LabeledInput";
import Btn from "../../atoms/Btn";
import ApplyPageUpperDiv from "../../molecules/ApplyPageUpperDiv";

import { useLocalStorage } from "@mantine/hooks";

// apis
// import { postMentorApplyDetailedInformation } from "../../../apis/apply";

// 데이터 플로우
// 0. usef로 데이터 먼저 받아옴 -> 지금 생각해보니, 이건 딱히 저장을 해두진 않을것같다.
// 1. 먼저 localstorage에서 값을 받아옴. 없으면 기존 정보 렌더링

function MentorDetailedInformation() {
  // eslint-disable-next-line no-unused-vars
  const [storage, setStorage] = useLocalStorage({
    key: "mentor_apply_info",
  });

  const [introduce, setIntroduce] = useState("");
  const [club, setClub] = useState("");
  const [contest, setContest] = useState("");
  const [external_activity, setExternal_activity] = useState("");
  const [intern, setIntern] = useState("");

  useEffect(() => {
    setStorage((prev) => ({
      ...prev,
      introduce,
      club,
      contest,
      external_activity,
      intern,
    }));
  }, [introduce, club, contest, external_activity, intern, setStorage]);

  // 연산량이 많은 그런 코드도 아니고,
  // "관련없는 data의 변경(state, props등)이 영향을 끼치는것도 아니다."
  // 그렇기 때문에, 단순히 useEffect를 이용하는게 맞는것같다.
  // const submitJson = useMemo(() => {
  //   return { introduce, club, contest, external_activity, intern };
  // }, [introduce, club, contest, external_activity, intern]);

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
          storage={"introduce"}
          value={introduce}
          placeholder="내용을 입력해주세요. (30자이상)"
          name="멘토소개"
          size="lg"
          handleChange={setIntroduce}
        ></LabeledTextarea>
        <LabeledInput
          storage={"club"}
          value={club}
          handleChange={setClub}
          placeholder="동아리를 기입해주세요."
          name="동아리"
        ></LabeledInput>
        <LabeledInput
          storage={"contest"}
          value={contest}
          placeholder="공모전 수상내역을 기입해주세요."
          name="공모전"
          handleChange={setContest}
        ></LabeledInput>
        <LabeledInput
          storage={"external_activity"}
          value={external_activity}
          placeholder="대외활동을 기입해주세요."
          name="대외활동"
          handleChange={setExternal_activity}
        ></LabeledInput>
        <LabeledInput
          storage={"intern"}
          value={intern}
          placeholder="인턴을 기입해주세요."
          name="인턴"
          handleChange={setIntern}
        ></LabeledInput>
        <S.RowWrapper>
          <Btn to="../step1">이전</Btn>
          <Btn to="../step3">다음</Btn>
        </S.RowWrapper>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorDetailedInformation);
