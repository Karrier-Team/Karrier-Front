import React, { memo } from "react";
import * as S from "./style";

import LabeledInput from "../../molecules/LabeledInput";

function MentorBasicInformation() {
  return (
    <>
      <S.Wrapper>
        <LabeledInput placeholder="이메일을 입력하세요." name="이메일"></LabeledInput>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorBasicInformation);
