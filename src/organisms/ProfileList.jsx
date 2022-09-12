import ProfileItem from "../components/molecules/ProfileItem";
import styled from "styled-components";
import React from "react";
import Btn from "../components/atoms/Btn";

const StyledProfileList = styled.div`
  width: 100%;
  box-sizing: border-box;
  /* padding: 1.7vw; */
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.75vw;
  grid-row-gap: 1.7vw;
  /* background-color: #fbfbfb; */
`;

const ProfileList = ({
  mentoData,
  isUnsubscribeActive,
  btntxt = "취소",
  onBtnClick,
}) => {
  // 멘토별 데이터
  // 각각의 데이터 => PropfileItem으로 prop 으로 넘겨주기
  // 업데이트 시 state 로 관리 및 변경

  return (
    <StyledProfileList>
      {mentoData.map((item, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <ProfileItem key={index} {...item} />
          {isUnsubscribeActive && (
            <Btn type="wishlist" handleClick={onBtnClick}>
              {btntxt}
            </Btn>
          )}
        </div>
      ))}
    </StyledProfileList>
  );
};
export default React.memo(ProfileList);
