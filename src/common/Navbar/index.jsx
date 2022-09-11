import React, { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Navbar.style";
import { Menu, Avatar } from "@mantine/core";

import DefaultProfileImg from "../../images/DefaultProfileImg.jpeg";

import Dropdown from "./Dropdown";
import Logo from "../../images/Logo.png";
import useAuth from "../../hooks/useAuth";
import { apiGetLogoutUser } from "../../apis/users";

function Header() {
  const [showDropbox, setShowDropbox] = useState(false);
  const [opened, setOpened] = useState(false);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    console.log("로그아웃 완료");
    await apiGetLogoutUser(auth);
    setAuth({});
    navigate("/");
  };

  return (
    <>
      <S.Wrapper>
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
          {auth?.email ? (
            <>
              <Avatar src={auth?.img || DefaultProfileImg} radius="xl" />
              <Menu width={"10rem"} opened={opened} onChange={setOpened}>
                <Menu.Target>
                  <S.Text size="1.2rem">
                    {auth?.nickname + "님" || "닉네임없음님"}
                  </S.Text>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>마이페이지</Menu.Label>
                  <Menu.Item component={Link} to="/mypage/programs">
                    수강 신청
                  </Menu.Item>
                  <Menu.Item component={Link} to="/mypage/qna">
                    질의 응답
                  </Menu.Item>
                  <Menu.Item component={Link} to="/mypage/reviews">
                    수강 후기
                  </Menu.Item>
                  <Menu.Item component={Link} to="/mypage/wishlist">
                    찜 및 팔로우
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Label>내정보</Menu.Label>
                  <Menu.Item component={Link} to="/profile">
                    프로필
                  </Menu.Item>
                  <Menu.Item component={Link} to="/" onClick={handleLogout}>
                    로그아웃
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </>
          ) : (
            <>
              <S.StyledLink to="/login">
                <S.Text>로그인</S.Text>
              </S.StyledLink>
              <S.StyledLink to="/signup">
                <S.Text>회원가입</S.Text>
              </S.StyledLink>
            </>
          )}
        </S.RightSection>
      </S.Wrapper>
      {showDropbox ? <Dropdown setShowDropbox={setShowDropbox} /> : null}
    </>
  );
}

export default memo(Header);
