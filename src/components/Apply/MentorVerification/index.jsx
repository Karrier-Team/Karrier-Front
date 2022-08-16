import React, { memo, useState, useMemo } from "react";
import Btn from "../../atoms/Btn";
import ApplyPageUpperDiv from "../../molecules/ApplyPageUpperDiv";
import LabeledFileInput from "../../molecules/LabeledFileInput";
import { postMentorVerificationInformation } from "../../../apis/apply";
import * as S from "./style";

function MentorVerification() {
  const [profileImg, setProfileImg] = useState();
  const [studentInfoImg, setStudentInfoImg] = useState();

  const submitJson = useMemo(() => {
    const formData = new FormData();
    formData.append("profileImg", profileImg);
    formData.append("studentInfoImg", studentInfoImg);
    return formData;
  }, [profileImg, studentInfoImg]);

  return (
    <>
      <S.Wrapper>
        <ApplyPageUpperDiv
          title={"멘토 확인"}
          subtitle={"멘토 가능 여부를 위한 정보 기입란입니다."}
          contents={[]}
        />
        <LabeledFileInput
          name={"재학증명서"}
          handleChange={setProfileImg}
        ></LabeledFileInput>
        <LabeledFileInput
          name={"프로필사진"}
          handleChange={setStudentInfoImg}
        ></LabeledFileInput>
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
      </S.Wrapper>
    </>
  );
}

export default memo(MentorVerification);
