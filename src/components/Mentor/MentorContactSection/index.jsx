import React, { memo } from "react";
import styled from "styled-components";
import * as S from "./MentorContactSection.style";

import IconMiniFacebook from "../../../images/IconMiniFacebook.svg";
import IconMiniInstagram from "../../../images/IconMiniInstagram.svg";
import IconMiniNaver from "../../../images/IconMiniNaver.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 13%;
  padding: 0 10%;
  background-color: #f0f0f0;
  border-top: 1px solid #e1e1e1;
`;

function MentorContactSection() {
  return (
    <>
      <Wrapper>
        <S.Text size="large">문준용</S.Text>
        <S.Text size="small">멘토</S.Text>
        <S.SNSImg src={IconMiniNaver} />
        <S.SNSImg src={IconMiniInstagram} />
        <S.SNSImg src={IconMiniFacebook} />
      </Wrapper>
    </>
  );
}

export default memo(MentorContactSection);
