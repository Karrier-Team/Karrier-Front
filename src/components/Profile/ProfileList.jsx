import ProfileItem from "../Profile/ProfileItem";
import styled from "styled-components";

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

  return (
    <StyledProfileList>
      <ProfileItem />
      <ProfileItem />
      <ProfileItem />
      <ProfileItem />
    </StyledProfileList>
  );
};
export default ProfileList;
