import React, { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as S from "./Navbar.style";

import Logo from "../../images/Logo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 20px;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Header() {
  return (
    <Wrapper>
      <S.LeftSection>
        <Link to="/">
          <S.Logo src={Logo} alt="service logo"></S.Logo>
        </Link>
        <StyledLink to="/mentoring">
          <S.Text>멘토링</S.Text>
        </StyledLink>
        <StyledLink to="/community">
          <S.Text>커뮤니티</S.Text>
        </StyledLink>
        <StyledLink to="/volunteer">
          <S.Text>자원봉사</S.Text>
        </StyledLink>
        <StyledLink to="/">
          <S.Text>멘토모집</S.Text>
        </StyledLink>
      </S.LeftSection>
      <S.RightSection>
        <S.Searchbar placeholder="지금 검색하세요"></S.Searchbar>
        <StyledLink to="/login">
          <S.Text>로그인</S.Text>
        </StyledLink>
        <StyledLink to="/signup">
          <S.Text>회원가입</S.Text>
        </StyledLink>
      </S.RightSection>
    </Wrapper>
  );
}

export default memo(Header);
