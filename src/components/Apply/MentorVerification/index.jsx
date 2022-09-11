import React, { memo, useState, useMemo, useEffect } from "react";
import Btn from "../../atoms/Btn";
import ApplyPageUpperDiv from "../../molecules/ApplyPageUpperDiv";
import LabeledFileInput from "../../molecules/LabeledFileInput";
import { postMentorVerificationInformation } from "../../../apis/apply";
import * as S from "./style";
import { Input } from "@mantine/core";

function MentorVerification() {
  const [studentInfoImg, setStudentInfoImg] = useState();
  const [profileImg, setProfileImg] = useState();

  const submitJson = useMemo(() => {
    const formData = new FormData();
    formData.append("profileImg", profileImg);
    formData.append("studentInfoImg", studentInfoImg);
    return formData;
  }, [profileImg, studentInfoImg]);

  return (
    <>
      <S.Wrapper>
        <S.Section>
          <ApplyPageUpperDiv
            title={"멘토 확인"}
            subtitle={"멘토 가능 여부를 위한 정보 기입란입니다."}
            contents={[]}
          />
        </S.Section>

        <S.ContentWrapper>
          <S.Section>
            <div style={{ width: "100%" }}>
              <LabeledFileInput
                name={"재학증명서"}
                handleChange={setStudentInfoImg}
                file={
                  studentInfoImg
                    ? studentInfoImg
                    : require("../../../images/defaultFileImage.png")
                }
                padding={"0 3.5em"}
                imageClickable={true}
              ></LabeledFileInput>
              <br />
            </div>
          </S.Section>
          <S.Section>
            <div style={{ width: "100%" }}>
              <LabeledFileInput
                name={"프로필사진"}
                handleChange={setProfileImg}
                file={
                  profileImg
                    ? profileImg
                    : require("../../../images/defaultFileImage.png")
                }
                padding={"0 3.5em"}
                imageClickable={true}
              ></LabeledFileInput>
            </div>
          </S.Section>
          <S.RowWrapper>
            <Btn
              data={submitJson}
              handleClick={postMentorVerificationInformation}
              to="../step3"
            >
              이전
            </Btn>
            <Btn
              data={submitJson}
              handleClick={postMentorVerificationInformation}
              to="../step5"
            >
              다음
            </Btn>
          </S.RowWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorVerification);
