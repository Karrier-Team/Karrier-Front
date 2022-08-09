import React, { memo, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as S from "./Navbar.style";

import Dropdown from "./Dropdown";
import Logo from "../../images/Logo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid black;

  padding: 0px 20px;
  box-sizing: border-box;
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
          <S.StyledLink to="/mentoring">
            <S.Text>멘토링</S.Text>
          </S.StyledLink>
          <S.StyledLink to="/community">
            <S.Text>커뮤니티</S.Text>
          </S.StyledLink>
          <S.StyledLink to="/volunteer">
            <S.Text>자원봉사</S.Text>
          </S.StyledLink>
          <S.StyledLink to="/apply" onMouseEnter={() => setShowDropbox(true)} onMouseLeave={() => setShowDropbox(false)}>
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
