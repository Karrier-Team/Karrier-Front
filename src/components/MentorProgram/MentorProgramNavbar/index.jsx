import React from "react";
import * as S from "./style";

const NavMenus = [
  { name: "프로그램 대표 정보", link: "info" },
  { name: "프로그램 소개", link: "intro" },
  { name: "커리큘럼", link: "curriculum" },
  { name: "멘토 소개", link: "mentor" },
];

const MentorProgramNav = () => {
  return (
    <S.Wrapper>
      {NavMenus.map((menu, idx) => {
        return (
          <S.StyledNavLink key={idx} to={menu.link}>
            {menu.name}
          </S.StyledNavLink>
        );
      })}
    </S.Wrapper>
  );
};
export default React.memo(MentorProgramNav);
