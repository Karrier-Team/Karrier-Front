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

  const handleSubmit = () => {
    postMentorApplyInfo(storage);
    // localStorage.clear();
  };

  return (
    <>
      <S.Wrapper>
        <S.Section>
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
        </S.Section>
        <S.ContentWrapper>
          <S.Section>
            <LabeledDiv name={"멘토 프로필"} labelFontSize={"big"}>
              <S.ProfileSection>
                <S.ProfileImg
                  borderRadius={"50%"}
                  aspectRatio={"1 /1"}
                  src={
                    storage.ProfileImg
                      ? storage.ProfileImg
                      : require("../../../images/defaultFileImage.png")
                  }
                />
                <S.ProfileInfo>
                  {/* <Text size="1.5em" align="start">
                    {storage.name + " 멘토"}
                  </Text>
                  <Text size="xl">{storage.university}</Text>
                  <Text size="xl">{storage.college}</Text>
                  <Text size="xl">{storage.major}</Text>
                  <Text size="xl">{storage.student_id}</Text>
                  <Text size="xl">{storage.year}</Text> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.7em",
                    }}
                  >
                    <div style={{ marginBottom: "10%" }}>
                      <S.NameSpan>{storage.name}</S.NameSpan>
                      <S.Span>멘토</S.Span>
                    </div>
                    <div>
                      <S.Span>{storage.university}</S.Span>
                    </div>
                    <div>
                      <S.Span>{storage.college}</S.Span>
                      <S.SmSpan>{storage.major}</S.SmSpan>
                    </div>
                    <div>
                      <S.Span>{storage.student_id.slice(2, 4) + "학번"}</S.Span>
                      <S.SmSpan>{storage.year + "학년"}</S.SmSpan>
                    </div>
                  </div>
                </S.ProfileInfo>
              </S.ProfileSection>
              <Divider />
              <Space h="md"></Space>
              <S.Span>멘토 소개</S.Span>
              <Space h="md"></Space>
              <Text color={"var(--bg-color-d)"}>{storage.introduce}</Text>
            </LabeledDiv>
          </S.Section>
          <S.RowWrapper>
            <Btn to="../step4" type={"qna"}>
              이전
            </Btn>
            <Btn
              data={storage}
              handleClick={handleSubmit}
              withAlert
              type={"qna"}
            >
              제출
            </Btn>
          </S.RowWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorFinalConfirmation);
