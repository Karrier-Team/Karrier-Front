import React from "react";
import * as S from "./style";

const NavMenus = [
  { name: "프로그램 대표 정보", link: "0" },
  { name: "프로그램 소개", link: "1" },
  { name: "커리큘럼", link: "2" },
  { name: "멘토 소개", link: "3" },
];

const MentorProgramNav = ({ onClick }) => {
  return (
    <S.Wrapper>
      {NavMenus.map((menu) => {
        return <S.StyledNavLink onClick={onClick}>{menu.name}</S.StyledNavLink>;
      })}
    </S.Wrapper>
  );
};
export default MentorProgramNav;
