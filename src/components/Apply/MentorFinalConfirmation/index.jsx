import React, { memo } from "react";
import * as S from "./style";

import Btn from "../../atoms/Btn";
import ApplyPageUpperDiv from "../../molecules/ApplyPageUpperDiv";

import { useLocalStorage } from "@mantine/hooks";

// apis
import { postMentorApplyInfo } from "../../../apis/apply";
import LabeledDiv from "../../molecules/LabeledDiv";

function MentorFinalConfirmation() {
  const [value, setValue] = useLocalStorage({ key: "detailedInfo" });

  return (
    <>
      <S.Wrapper>
        <ApplyPageUpperDiv
          title={"최종확인"}
          subtitle={
            "작성한 내용은 관리자로부터 승인 이후에 멘토 프로필로 공개됩니다."
          }
          contents={[
            "프로필에 나타나는 정보를 확인해주세요.",
            "대학교, 단과대학, 전공, 학번, 학년은 현재 기준으로 작성해주세요.",
            "재학증명서, 프로필 사진을 해상도 낮은 사진으로 등록한 경우 관리자로부터 승인이 반려될 수 있습니다.",
          ]}
        />
        <LabeledDiv name={"멘토 프로필"}>{value.introduce}</LabeledDiv>
        <S.RowWrapper>
          <Btn to="../step4">이전</Btn>
          <Btn
            data={() => console.log("최종제출")}
            handleClick={() => postMentorApplyInfo(value)}
            to="../step3"
          >
            제출
          </Btn>
        </S.RowWrapper>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorFinalConfirmation);
