import React, { memo, useState } from "react";
import * as S from "./Navbar.style";

import Dropdown from "./Dropdown";
import Logo from "../../images/Logo.png";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import BasicNavbar from "./BasicNavbar";
import UserNavbar from "./UserNavbar";
import MentorNavbar from "./MentorNavbar";

const ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
  MENTOR_X: "MENTOR_WAIT",
  MENTOR_O: "MENTOR_APPROVE",
};

function Header() {
  const [showDropbox, setShowDropbox] = useState(false);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <S.Wrapper>
        <S.LeftSection>
          <S.Logo onClick={() => navigate("/")} src={Logo} alt="service logo" />
          <S.StyledLink
            to="/mentoring"
            onMouseEnter={() => setShowDropbox(true)}
            onMouseLeave={() => setShowDropbox(false)}
          >
            <S.Text>멘토링</S.Text>
          </S.StyledLink>
          <S.StyledLink to="/community">
            <S.Text>커뮤니티</S.Text>
          </S.StyledLink>
          <S.StyledLink to="/volunteer">
            <S.Text>자원봉사</S.Text>
          </S.StyledLink>
          <S.StyledLink to="/apply">
            <S.Text>멘토모집</S.Text>
          </S.StyledLink>
        </S.LeftSection>
        <S.RightSection>
          <S.Searchbar placeholder="지금 검색하세요"></S.Searchbar>
          {[ROLES.USER, ROLES.MENTOR_X].includes(auth.role) ? (
            <UserNavbar auth={auth} setAuth={setAuth} />
          ) : [ROLES.ADMIN, ROLES.MENTOR_O].includes(auth.role) ? (
            <MentorNavbar auth={auth} setAuth={setAuth} />
          ) : (
            <BasicNavbar />
          )}
        </S.RightSection>
      </S.Wrapper>
      {showDropbox ? <Dropdown setShowDropbox={setShowDropbox} /> : null}
    </>
  );
}

export default memo(Header);
