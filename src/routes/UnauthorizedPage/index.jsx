import * as S from "./style";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Btn from "../../components/atoms/Btn";

const ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
  MENTOR_X: "MENTOR_WAIT",
  MENTOR_O: "MENTOR_APPROVE",
};

const getRoleByCode = (role) => {
  switch (role) {
    case ROLES.USER:
      return "유저";
    case ROLES.MENTOR_X:
      return "승인 대기중인 멘토";
    case ROLES.MENTOR_O:
      return "멘토";
    default:
      return "알수없는 권한";
  }
};

const UnauthorizedPage = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  if (!auth.email) {
    navigate("/");
    return;
  }

  return (
    <S.Wrapper>
      <span style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        {getRoleByCode(auth.role)}에게 허용되지 않은 페이지 입니다!
      </span>
      <Btn size="5rem" handleClick={() => navigate(-1)}>
        돌아가기
      </Btn>
    </S.Wrapper>
  );
};

export default UnauthorizedPage;
