import React, { useState, memo } from "react";

import * as S from "./Navbar.style";
import SubDropdown from "./SubDropdown";

import { colleges } from "./colleges";

function Dropdown({ setShowDropbox }) {
  const [collegeIdx, setCollegeIdx] = useState("-1");

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
                className={e.id === collegeIdx ? "active" : null}
                key={e.id}
                id={e.id}
                onClick={(e) =>
                  setCollegeIdx(
                    collegeIdx === e.target.getAttribute("id")
                      ? "-1"
                      : e.target.getAttribute("id")
                  )
                }
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
