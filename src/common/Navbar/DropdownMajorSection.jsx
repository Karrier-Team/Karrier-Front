import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import * as S from "./Navbar.style";

import { colleges } from "./colleges";

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
  color: var(--primary-color);
  font-weight: bold;
`;

function DropdownMajorSection({ college: idx }) {
  const navigate = useNavigate();
  const { major } = useParams();

  return (
    <>
      <Wrapper>
        <StyledH1>{colleges[idx].college + " >"}</StyledH1>
        {colleges[idx].departments.map((dept, idx) => {
          return (
            <S.MajorItems
              className={dept === major ? "active" : null}
              onClick={() => navigate(`../qna/${dept}`)}
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
