import React, { useState, memo } from "react";

import * as S from "./Navbar.style";

import { colleges } from "./colleges";

import SubDropdown from "./SubDropdown";

function Dropdown({ setShowDropbox }) {
  const [collegeIdx, setCollegeIdx] = useState(-1);
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div
        onMouseOver={() => setShowDropbox(true)}
        onMouseLeave={() => setShowDropbox(false)}
      >
        <S.DropdownWrapper>
          {colleges.map((e) => {
            return (
              <S.StyledDropdownLi
                key={e.id}
                id={e.id}
                onMouseOver={(e) => {
                  !clicked && setCollegeIdx(e.target.getAttribute("id"));
                }}
                onClick={(e) => {
                  setClicked((prev) => !prev);
                  setCollegeIdx(e.target.getAttribute("id"));
                }}
              >
                {e.college}
              </S.StyledDropdownLi>
            );
          })}
        </S.DropdownWrapper>
        {collegeIdx >= 0 ? <SubDropdown college={collegeIdx} /> : null}
      </div>
    </>
  );
}

export default memo(Dropdown);
