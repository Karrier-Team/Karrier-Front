import React, { memo } from "react";
import { useLocalStorage } from "@mantine/hooks";

import * as S from "./style";
import Btn from "../../atoms/Btn";
import ApplyPageUpperDiv from "../../molecules/ApplyPageUpperDiv";
import LabeledDiv from "../../molecules/LabeledDiv";
import { Divider, Text, Space } from "@mantine/core";

// apis
import { postMentorApplyInfo } from "../../../apis/apply";

function MentorFinalConfirmation() {
  // eslint-disable-next-line no-unused-vars
  const [storage, setStorage] = useLocalStorage({ key: "mentor_apply_info" });

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
        <LabeledDiv name={"멘토 프로필"}>
          <S.FlexCol>
            <Text size="1.5em" align="center">
              {storage.name + "멘토"}
            </Text>
            <Text size="xl">{storage.university}</Text>
            <Text size="xl">{storage.college}</Text>
            <Text size="xl">{storage.major}</Text>
            <Text size="xl">{storage.student_id}</Text>
            <Text size="xl">{storage.year}</Text>
          </S.FlexCol>
          <Divider />
          <Space h="md"></Space>
          <Text size="1.5em" align="center">
            {"멘토소개"}
          </Text>
          <Text color={"var(--bg-color-d)"}>{storage.introduce}</Text>
        </LabeledDiv>
        <S.RowWrapper>
          <Btn to="../step4">이전</Btn>
          <Btn data={storage} handleClick={postMentorApplyInfo} withAlert>
            제출
          </Btn>
        </S.RowWrapper>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorFinalConfirmation);
