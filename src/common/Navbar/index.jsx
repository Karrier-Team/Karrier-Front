import React, { memo, useState } from "react";
import * as S from "./Navbar.style";

import Dropdown from "./Dropdown";
import Logo from "../../images/Logo.png";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import BasicNavbar from "./BasicNavbar";
import UserNavbar from "./UserNavbar";
import MentorNavbar from "./MentorNavbar";
import { Menu } from "@mantine/core";

const ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
  MENTOR_X: "MENTOR_WAIT",
  MENTOR_O: "MENTOR_APPROVE",
};

function Header() {
  const [showDropbox, setShowDropbox] = useState(false);
  const [opened, setOpened] = useState(false);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <S.Wrapper>
        <S.LeftSection>
          <S.Logo onClick={() => navigate("/")} src={Logo} alt="service logo" />
          <S.StyledLink
            to="/mentoring?college=인문대학&dept=국어국문학과"
            onClick={(e) => {
              e.preventDefault();
              setShowDropbox(true);
            }}
          >
            <S.Text>멘토링</S.Text>
          </S.StyledLink>
          <S.StyledLink
            to="/community"
            onClick={(e) => {
              e.preventDefault();
              setOpened(true);
            }}
          >
            <S.Text>커뮤니티</S.Text>
          </S.StyledLink>
          <div
            style={{ transform: "translate(-5rem, 1rem)" }}
            onMouseLeave={() => setOpened(false)}
          >
            <Menu width={"10rem"} opened={opened} onChange={setOpened}>
              <Menu.Dropdown>
                <Menu.Item component={Link} to="/community/qna">
                  질의응답
                </Menu.Item>
                <Menu.Item
                  component={Link}
                  onClick={(e) => {
                    e.preventDefault();
                    alert("서비스 준비중입니다.");
                  }}
                  to="/community/reviews"
                >
                  수강후기
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
          <S.StyledLink
            onClick={(e) => {
              e.preventDefault();
              alert("서비스 준비중입니다!");
            }}
            to="/volunteers"
          >
            <S.Text>자원봉사</S.Text>
          </S.StyledLink>
          <S.StyledLink to="/apply">
            <S.Text>멘토모집</S.Text>
          </S.StyledLink>
        </S.LeftSection>
        <S.RightSection>
          {/* <S.Searchbar placeholder="지금 검색하세요"></S.Searchbar> */}
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
