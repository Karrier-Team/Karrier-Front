import React, { memo } from "react";
import * as S from "./style";

const NavMenus = [
  { name: "기본정보", link: "step1" },
  { name: "상세정보", link: "step2" },
  { name: "멘토 연락처", link: "step3" },
  { name: "멘토확인", link: "step4" },
  { name: "최종확인", link: "step5" },
];

function MentorApplyNavbar() {
  return (
    <>
      <S.Wrapper>
        {NavMenus.map((menu, idx) => {
          return (
            <S.StyledNavLink key={idx} to={menu.link}>
              {menu.name}
            </S.StyledNavLink>
          );
        })}
      </S.Wrapper>
    </>
  );
}

export default memo(MentorApplyNavbar);
