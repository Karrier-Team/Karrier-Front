import React, { memo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

import * as S from "./Navbar.style";

import { colleges } from "./colleges";

const colors = css`
  ${(props) => {
    switch (props.type) {
      case "qna":
        return "var(--primary-color)";
      case "reviews":
        return "var(--reviews-color)";
      case "notice":
        return "var(--nocie-color)";
      default:
        return "var(--primary-color)";
    }
  }}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 3em;
  background-color: var(--bg-color-l);
`;

export const StyledH1 = styled.h1`
  font-size: 1.5rem;
  box-sizing: border-box;
  color: ${colors};
  font-weight: bold;
`;

function DropdownMajorSection({ type, college: idx }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const activeDept = searchParams.get("dept");
  const collegeName = colleges.find((college) => college.id === idx).college;
  const getNavigateAddress = (dept) => {
    return () => {
      navigate(
        `/community/${type || "qna"}?college=${collegeName}&dept=${dept}`
      );
    };
  };

  return (
    <>
      <Wrapper>
        <StyledH1 type={type}>{collegeName + " >"}</StyledH1>
        {colleges
          .find((college) => college.id === idx)
          .departments.map((dept, idx) => {
            return (
              <S.MajorItems
                type={type}
                className={dept === activeDept ? "active" : null}
                onClick={getNavigateAddress(dept)}
                key={idx}
              >
                {dept}
              </S.MajorItems>
            );
          })}
      </Wrapper>
    </>
  );
}

export default memo(DropdownMajorSection);
