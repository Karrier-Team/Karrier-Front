import React from "react";
import * as S from "./style";

const NavMenus = [
  { name: "프로그램 대표 정보", link: "1" },
  { name: "프로그램 소개", link: "2" },
  { name: "커리큘럼", link: "3" },
  { name: "멘토 소개", link: "4" },
];

const MentorProgramNav = () => {
  return (
    <S.Wrapper>
      {NavMenus.map((menu, idx) => {
        return (
          <S.StyledNavLink key={idx} to={menu.link} spy={true} smooth={true}>
            {menu.name}
          </S.StyledNavLink>
        );
      })}
    </S.Wrapper>
  );
};
export default MentorProgramNav;
