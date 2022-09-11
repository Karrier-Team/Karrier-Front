import { useState } from "react";
import { Menu, Avatar } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Navbar.style";

// apis
import { apiGetLogoutUser } from "../../apis/users";

// images
import DefaultProfileImg from "../../images/DefaultProfileImg.jpeg";

const UserNavbar = ({ auth, setAuth }) => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await apiGetLogoutUser(auth);
    setAuth({});
    navigate("/");
  };

  return (
    <>
      <Avatar
        style={{ cursor: "pointer" }}
        onClick={() => setOpened(true)}
        src={auth?.img || DefaultProfileImg}
        radius="xl"
      />
      <Menu width={"10rem"} opened={opened} onChange={setOpened}>
        <Menu.Target>
          <S.Text size="1.2rem">
            {auth?.nickname + "님" || "닉네임없음님"}
          </S.Text>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            style={{ fontWeight: "bold", color: "var(--primary-color)" }}
          >
            {auth?.nickname + "님" || "닉네임없음님"}
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>마이페이지</Menu.Label>
          <Menu.Item component={Link} to="/mypage/programs">
            수강 목록
          </Menu.Item>
          <Menu.Item component={Link} to="/mypage/qna">
            질의응답
          </Menu.Item>
          <Menu.Item component={Link} to="/mypage/reviews">
            수강후기
          </Menu.Item>
          <Menu.Item component={Link} to="/mypage/wishlist">
            찜 및 팔로잉
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>내정보</Menu.Label>
          <Menu.Item component={Link} to="/mypage/profile">
            프로필
          </Menu.Item>
          <Menu.Item component={Link} to="/" onClick={handleLogout}>
            로그아웃
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default UserNavbar;
