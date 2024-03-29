import ProfileItem from "../components/molecules/ProfileItem";
import { Link } from "react-router-dom";
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
  sortType,
  searchType,
  searchValue,
}) => {
  const filterFunc = (e) => {
    if (searchType === "programName") {
      return e.title.includes(searchValue);
    } else if (searchType === "mentorName") {
      return e.name.includes(searchValue);
    } else {
      return true;
    }
  };

  const sortFunc = (a, b) => {
    if (sortType === "latest") {
      return b.programNo - a.programNo;
    } else if (sortType === "likes") {
      return b.likeCount - a.likeCount;
    } else if (sortType === "alphanumeric") {
      return a.title.localeCompare(b.title);
    } else {
      return b.programNo - a.programNo;
    }
  };

  if (mentoData?.length <= 0)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Nodata />
        <Link
          to="/mentoring?college=IT대학&dept=컴퓨터공학과"
          style={{ margin: "-5rem" }}
        >
          가장 활발한 컴퓨터공학과로 이동하기
        </Link>
      </div>
    );
  return (
    <StyledProfileList>
      {mentoData
        .filter(filterFunc)
        .sort(sortFunc)
        .map((item, index) => (
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
