import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <S.Box
          active={data.isMyParticipate}
          hover
          size="large"
          onClick={() => {
            if (!data.isMyParticipate) navigate("./apply");
            else alert("이미 신청하셨습니다!");
          }}
        >
          프로그램 수강신청
        </S.Box>
        <SubMenuWrapper>
          <S.Box active={data.isMyFollowList} size="small">
            팔로잉
          </S.Box>
          <S.Box active={data.isMyWishList} size="small">
            찜
          </S.Box>
          <S.Box size="small">공유</S.Box>
        </SubMenuWrapper>
      </Wrapper>
    </>
  );
}

export default memo(MentoringInfoSection);
