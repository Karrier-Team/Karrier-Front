import React, { memo, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as S from "./Navbar.style";

import Dropdown from "./Dropdown";
import Logo from "../../images/Logo.png";

const Wrapper = styled.div`
  width: 100vw;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--line-color);

  background-color: var(--bg-color-l);

  padding: 0px 20px;
  box-sizing: border-box;

  font-weight: bold;
  font-size: 1.3em;
`;

function Header() {
  const [showDropbox, setShowDropbox] = useState(false);
  return (
    <>
      <Wrapper>
        <S.LeftSection>
          <Link to="/">
            <S.Logo src={Logo} alt="service logo"></S.Logo>
          </Link>
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
          <S.StyledLink to="/login">
            <S.Text>로그인</S.Text>
          </S.StyledLink>
          <S.StyledLink to="/signup">
            <S.Text>회원가입</S.Text>
          </S.StyledLink>
        </S.RightSection>
      </Wrapper>
      {showDropbox ? <Dropdown setShowDropbox={setShowDropbox} /> : null}
    </>
  );
}

export default memo(Header);
