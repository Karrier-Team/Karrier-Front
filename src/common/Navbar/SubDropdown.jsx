import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";

import * as S from "./Navbar.style";

import { colleges } from "./colleges";

const SubDropdownWrapper = styled(S.DropdownWrapper)`
  top: calc(80px + 70px * 3 + 1px); // (navbar + dropdown * 3 + border-bottom)
`;

export const StyledH1 = styled.h1`
  font-size: 1.5rem;
  box-sizing: border-box;
  width: calc(100% / 7);
  height: 70px;
  line-height: 70px;
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

function SubDropdown({ college: idx }) {
  return (
    <SubDropdownWrapper>
      <StyledH1>{colleges[idx].college}</StyledH1>
      <FlexWrapper
        onMouseLeave={() => {
          console.log("mouse leave");
        }}
      >
        {colleges[idx].departments.map((dept, idx) => {
          return <S.StyledDropdownLi key={idx}>{dept}</S.StyledDropdownLi>;
        })}
      </FlexWrapper>
    </SubDropdownWrapper>
  );
}

export default memo(SubDropdown);
