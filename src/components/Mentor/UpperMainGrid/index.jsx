/* eslint-disable react-hooks/exhaustive-deps */
import { Text } from "@mantine/core";
import React, { memo, useCallback } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
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

  * {
    border: 1px solid #dadada;
    margin-top: -1px;
    margin-left: -1px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    grid-row: auto / span 1;
    grid-column: auto / span 1;

    :last-child {
      grid-column: span 2;
      cursor: default;
    }
    :not(:last-child):hover {
      background-color: #f0f0f0;
    }

    text-decoration: none;
    color: black;
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
      background-color: var(--primary-color);
      transition: 0.3s;
      color: white;
      cursor: pointer;
    }
  }

  .program {
    :hover {
      transition: 0.3s;
    }
  }

  .onemore {
    grid-row: 8 / -2;
  }

  .sub-content {
    grid-column: 2 / -1;
    grid-row: 1 / 2;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    color: var(--primary-color-l);
  }

  .main-content {
    padding: 1.5rem;
    line-height: 1.5rem;
    color: var(--text-color-l);
    grid-column: 2 / -1;
    grid-row: 2 / -2;
  }
`;

function UpperMainGrid({
  sub_content,
  main_content,
  mentorCarrierMenu,
  setMentorCarrierMenu,
}) {
  const handleOnClick = useCallback((e) => {
    setMentorCarrierMenu(e.target.getAttribute("value"));
  });

  const activeProgramStyle = {
    backgroundColor: "var(--bg-color-l)",
    fontWeight: "bold",
    fontSize: "1.1rem",
  };

  const activeLeftStyle = {
    backgroundColor: "var(--primary-color-l)",
    fontWeight: "bold",
    color: "white",
    fontSize: "1.1rem",
  };

  const basicStyle = {
    fontWeight: "bold",
    fontSize: "1.1rem",
  };

  const [searchParams] = useSearchParams();
  const activeLink = searchParams.get("program");

  return (
    <>
      <Wrapper>
        <div className="left" value="tags_info">
          #태그
        </div>
        <div
          className="left"
          style={
            mentorCarrierMenu === "mentorIntroduce"
              ? activeLeftStyle
              : basicStyle
          }
          value="mentorIntroduce"
          onClick={handleOnClick}
        >
          멘토 소개
        </div>
        <div
          className="left"
          style={mentorCarrierMenu === "club" ? activeLeftStyle : basicStyle}
          value="club"
          onClick={handleOnClick}
        >
          동아리
        </div>
        <div
          className="left"
          style={mentorCarrierMenu === "contest" ? activeLeftStyle : basicStyle}
          value="contest"
          onClick={handleOnClick}
        >
          공모전
        </div>
        <div
          className="left"
          style={
            mentorCarrierMenu === "externalActivity"
              ? activeLeftStyle
              : basicStyle
          }
          value="externalActivity"
          onClick={handleOnClick}
        >
          대외활동
        </div>
        <div
          className="left"
          style={mentorCarrierMenu === "intern" ? activeLeftStyle : basicStyle}
          value="intern"
          onClick={handleOnClick}
        >
          인턴
        </div>
        <div
          className="left"
          style={mentorCarrierMenu === "blog" ? activeLeftStyle : basicStyle}
          value="blog"
          onClick={handleOnClick}
        >
          블로그
        </div>
        <div className="onemore"></div>

        <div className="sub-content">{sub_content}</div>
        <pre className="main-content">{main_content}</pre>

        <NavLink
          className="program"
          to="?program=introduction"
          style={
            activeLink === "introduction" ? activeProgramStyle : basicStyle
          }
        >
          프로그램소개
        </NavLink>
        <NavLink
          className="program"
          to="?program=curriculum"
          style={activeLink === "curriculum" ? activeProgramStyle : basicStyle}
        >
          커리큘럼
        </NavLink>
        <NavLink
          className="program"
          to="?program=qna"
          style={activeLink === "qna" ? activeProgramStyle : basicStyle}
        >
          질의응답
        </NavLink>
        <NavLink
          className="program"
          to="?program=review"
          style={activeLink === "review" ? activeProgramStyle : basicStyle}
        >
          수강후기
        </NavLink>
        <NavLink to="#"></NavLink>
      </Wrapper>
    </>
  );
}

export default memo(UpperMainGrid);
