import ProfileItem from "../Profile/ProfileItem";
import styled from "styled-components";
import React, { useEffect } from "react";

const StyledProfileList = styled.div`
  padding: 22px;
  display: flex;
  grid-gap: 22px;
  background-color: tomato;
`;

const ProfileList = () => {
  // 멘토별 데이터
  // 각각의 데이터 => PropfileItem으로 prop 으로 넘겨주기
  // 업데이트 시 state 로 관리 및 변경


  // 처음 list 페이지 렌더링 되었을 때 data 서버에서 요청 받아 가지고 온다
  // useEffect(() => {
    
  // });

  return (
    <StyledProfileList>
      <ProfileItem />
      <ProfileItem />
      <ProfileItem />
      <ProfileItem />
    </StyledProfileList>
  );
};
export default React.memo(ProfileList);
