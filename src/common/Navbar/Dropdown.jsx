import React, { useState, memo } from "react";

import * as S from "./Navbar.style";
import SubDropdown from "./SubDropdown";
import DropdownMajorSection from "./DropdownMajorSection";

import { colleges } from "./colleges";
import { useSearchParams } from "react-router-dom";

function Dropdown({ inCommunityPage, type, setShowDropbox }) {
  const [collegeIdx, setCollegeIdx] = useState("-1");
  const [searchParams] = useSearchParams();

  return (
    <>
      <div
        style={{ width: "100%" }}
        onMouseOver={() => !inCommunityPage && setShowDropbox(true)}
        onMouseLeave={() => !inCommunityPage && setShowDropbox(false)}
      >
        <S.DropdownWrapper type={type} inCommunityPage={inCommunityPage}>
          {colleges.map((e) => {
            return (
              <S.StyledDropdownLi
                className={
                  e.college === searchParams.get("college") ? "active" : null
                }
                type={type}
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
        {!inCommunityPage && collegeIdx >= 0 ? (
          <SubDropdown college={collegeIdx} />
        ) : null}
        {inCommunityPage && collegeIdx >= 0 && (
          <DropdownMajorSection type={type} college={collegeIdx} />
        )}
      </div>
    </>
  );
}

export default memo(Dropdown);
