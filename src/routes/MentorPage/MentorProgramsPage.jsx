import React, { memo } from "react";
import ProfileList from "../../organisms/ProfileList";
import Loading from "../../organisms/Loading";
import * as S from "./style";
import useAsync from "../../hooks/useAsync";
import { apiGetMyMentorPrograms } from "../../apis/mentor";
import { Navigate } from "react-router-dom";

function MentorProgramsPage() {
  const [state] = useAsync(apiGetMyMentorPrograms);
  const { loading, error, data } = state;

  if (loading) return <Loading />;
  if (error) return <Navigate to="/error" replace></Navigate>;
  if (!data) return <h1>데이터에러</h1>;

  return (
    <S.Wrapper>
      <S.RowWrapperBtwn>
        <S.StyledText bold="bold" size="2rem">
          개인 프로그램 관리
        </S.StyledText>
        <S.StyledLink to="/mentor/program/create">
          + 새 프로그램 만들기
        </S.StyledLink>
      </S.RowWrapperBtwn>
      <ProfileList mentoData={data} />
    </S.Wrapper>
  );
}

export default memo(MentorProgramsPage);
