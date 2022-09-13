import React, { memo } from "react";
import styled from "styled-components";

import * as S from "./Navbar.style";

import { colleges } from "./colleges";
import { useNavigate, useSearchParams } from "react-router-dom";

const SubDropdownWrapper = styled(S.DropdownWrapper)`
  top: calc(10vh + 70px * 3 + 1px); // (navbar + dropdown * 3 + border-bottom)
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

function SubDropdown({ type, college: idx }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const collegeName = colleges.find((college) => college.id === idx).college;

  return (
    <SubDropdownWrapper>
      <StyledH1>
        {colleges.find((college) => college.id === idx).college}
      </StyledH1>
      <FlexWrapper>
        {colleges
          .find((college) => college.id === idx)
          .departments.map((dept, idx) => {
            return (
              <S.StyledDropdownLi
                className={dept === searchParams.get("dept") ? "active" : null}
                type={type}
                key={idx}
                onClick={() =>
                  navigate(`/mentoring?college=${collegeName}&dept=${dept}`)
                }
              >
                {dept}
              </S.StyledDropdownLi>
            );
          })}
      </FlexWrapper>
    </SubDropdownWrapper>
  );
}

export default memo(SubDropdown);
