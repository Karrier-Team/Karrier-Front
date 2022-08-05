import React, { useState, useEffect, memo, useCallback } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(9, 1fr) 1.5fr;
  grid-auto-flow: column;

  padding-top: 1px;
  padding-left: 1px;

  div {
    border: 1px solid #dadada;
    margin-top: -1px;
    margin-left: -1px;
  }

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: auto / span 1;

    :first-child {
      font-size: 20px;
      font-weight: bold;
    }

    ~ .left:hover {
      background-color: #0078be;
      color: white;
    }
  }

  .activatedLeft {
    background-color: #0078be;
    color: white;
  }

  .onemore {
    grid-row: auto / span 2;
  }

  .sub-content {
    grid-column: 2 / -1;
    grid-row: 1 / 2;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    color: #007cc6;
  }

  .main-content {
    padding: 10px;
    grid-column: 2 / -1;
    grid-row: 2 / -2;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: auto / span 1;
    grid-column: auto / span 1;
    :last-child {
      grid-column: 5 / -1;
    }
    :not(:last-child):hover {
      background-color: #f0f0f0;
    }
  }
`;

function UpperMainGrid({ sub_content, main_content, mentorCarrierMenu, setMentorCarrierMenu }) {
  const handleOnClick = useCallback((e) => {
    setMentorCarrierMenu(e.target.getAttribute("value"));
  }, []);
  return (
    <>
      <Wrapper>
        <div className="left">멘토 소개</div>
        <div className={`left ${mentorCarrierMenu === "regular_info" ? "activatedLeft" : ""}`} value="regular_info" onClick={handleOnClick}>
          기본 소개
        </div>
        <div className={`left ${mentorCarrierMenu === "university_info" ? "activatedLeft" : ""}`} value="university_info" onClick={handleOnClick}>
          대학 소개
        </div>
        <div className={`left ${mentorCarrierMenu === "club_info" ? "activatedLeft" : ""}`} value="club_info" onClick={handleOnClick}>
          동아리
        </div>
        <div className={`left ${mentorCarrierMenu === "offline_info" ? "activatedLeft" : ""}`} value="offline_info" onClick={handleOnClick}>
          오프라인
        </div>
        <div className={`left ${mentorCarrierMenu === "competition_info" ? "activatedLeft" : ""}`} value="competition_info" onClick={handleOnClick}>
          공모전
        </div>
        <div className={`left ${mentorCarrierMenu === "blog_info" ? "activatedLeft" : ""}`} value="blog_info" onClick={handleOnClick}>
          블로그
        </div>
        <div className="left onemore">+</div>

        <div className="sub-content">{sub_content}</div>
        <div className="main-content">{main_content}</div>

        <div className="footer">프로그램소개</div>
        <div className="footer">커리큘럼</div>
        <div className="footer">수강후기</div>
        <div className="footer">질의응답</div>
        <div className="footer"></div>
      </Wrapper>
    </>
  );
}

export default memo(UpperMainGrid);
