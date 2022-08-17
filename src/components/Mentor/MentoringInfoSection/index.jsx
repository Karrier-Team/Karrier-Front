import React, { memo } from "react";
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

function MentoringInfoSection({ data }) {
  return (
    <>
      <Wrapper>
        <S.Box active={data.isParticipating} hover size="large">
          프로그램 수강신청
        </S.Box>
        <SubMenuWrapper>
          <S.Box active={data.isFollowing} size="small">
            팔로잉
          </S.Box>
          <S.Box active={data.isInWishlist} size="small">
            찜
          </S.Box>
          <S.Box size="small">공유</S.Box>
        </SubMenuWrapper>
      </Wrapper>
    </>
  );
}

export default memo(MentoringInfoSection);
