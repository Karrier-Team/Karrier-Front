import React, { useState } from "react";
import styled from "styled-components";

//style component
const StyledProfileItem = styled.div`
  width: 22.0313vw;
  height: 29.5833vw;
  border: solid 1px black;
  background-color: aliceblue;
  box-shadow: 5px 5px 10px grey;
  display: flex;
  background-color: aqua;
`;

const StyledProfileItemInfo = styled.div`
  background-color: black;
  display: flex;
  border: 1px solid black;
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
const ProfileItem = ({ name, major }) => {
  // state
  const [state, setState] = useState({
    name: "이승열",
    major: "컴퓨터통신공학과",
    comment:
      "안녕하세요 컴퓨터 공학을 전공하여 멘토를 맡게 된 이승열 입니다 잘 부탁 드립니다",
  });

  const [hover, setHover] = useState(true);

  const handleMouseEnter = (e) => {
    //e.target.style.background = "grey";
    setHover(false);
  };

  const handleMouseLeave = (e) => {
    //e.target.style.background = "yellowgreen";
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
          <StyledImg>img</StyledImg>
          <StyledName>{state.name}</StyledName>
          <StyledMajor>{state.major}</StyledMajor>
        </StyledProfileItemInfo>
      ) : (
        <div style={{ padding: 20 }}>
          <p>{state.comment}</p>
        </div>
      )}
    </StyledProfileItem>
  );
};

export default React.memo(ProfileItem);
