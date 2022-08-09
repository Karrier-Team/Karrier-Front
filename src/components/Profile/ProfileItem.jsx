import React, { useState } from "react";
import styled from "styled-components";

//style component
const StyledProfileItem = styled.div`
  width: 22.0313vw;
  height: 29.5833vw;

  display: flex;
  box-shadow: 5px 5px 10px grey;
  background-color: tomato;
`;

const StyledProfileItemInfo = styled.div`
  display: flex;

  width: 100%;

  display: flex;
  justify-content: space-around;
`;

//img
const StyledImg = styled.div`
  padding-bottom: 1rem;
`;
//name
const StyledName = styled.span`
  padding-bottom: 1rem;
  font-family: S-CoreDream-6;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.48px;
  text-align: left;
  color: #c4c4c4;
`;
//major
const StyledMajor = styled.span`
  padding-bottom: 1rem;
  font-family: S-CoreDream-6;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -1.8px;
  text-align: left;
  color: #c4c4c4;
`;

//ProfileItem div
const ProfileItem = ({ name, major, comment }) => {
  const [hover, setHover] = useState(true);

  const handleMouseEnter = () => {
    setHover(false);
  };

  const handleMouseLeave = () => {
    setHover(true);
  };

  return (
    <StyledProfileItem
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        hover
          ? { alignItems: "flex-end", justifyContent: "center" }
          : { alignItems: "center", opacity: 0.7 }
      }
    >
      {hover ? (
        <StyledProfileItemInfo>
          <StyledImg>profileimg</StyledImg>
          <StyledName>{name}</StyledName>
          <StyledMajor>{major}</StyledMajor>
        </StyledProfileItemInfo>
      ) : (
        <div style={{ padding: 20 }}>
          <p>{comment}</p>
        </div>
      )}
    </StyledProfileItem>
  );
};

export default React.memo(ProfileItem);
