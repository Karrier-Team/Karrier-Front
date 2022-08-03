import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import * as S from "./MentoringInfoSection.style";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const SubMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

function MentoringInfoSection() {
  return (
    <>
      <Wrapper>
        <S.Box size="large">
          <S.Text size="medium">프로그램 수강신청</S.Text>
        </S.Box>
        <SubMenuWrapper>
          <S.Box size="small">
            <S.Text size="small">팔로잉</S.Text>
          </S.Box>
          <S.Box size="small">
            <S.Text size="small">찜</S.Text>
          </S.Box>
          <S.Box size="small">
            <S.Text size="small">공유</S.Text>
          </S.Box>
        </SubMenuWrapper>
      </Wrapper>
    </>
  );
}

export default memo(MentoringInfoSection);
