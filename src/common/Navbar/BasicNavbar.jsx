import * as S from "./Navbar.style";

const BasicNavbar = () => {
  return (
    <>
      <S.StyledLink to="/login">
        <S.Text>로그인</S.Text>
      </S.StyledLink>
      <S.StyledLink to="/signup">
        <S.Text>회원가입</S.Text>
      </S.StyledLink>
    </>
  );
};

export default BasicNavbar;
