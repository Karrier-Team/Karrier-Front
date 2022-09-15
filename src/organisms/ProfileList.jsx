import ProfileItem from "../components/molecules/ProfileItem";
import styled from "styled-components";
import React from "react";
import Btn from "../components/atoms/Btn";
import Nodata from "./Nodata";

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
  if (mentoData?.length <= 0) return <Nodata />;
  return (
    <StyledProfileList>
      {mentoData.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <ProfileItem {...item} />
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
