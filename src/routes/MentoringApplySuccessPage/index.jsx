import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { Text } from "@mantine/core";
import Btn from "../../components/atoms/Btn";
import ProgramSummarySection from "../../organisms/ProgramSummarySection";
import useAsync from "../../hooks/useAsync";
import { apiGetMentoringApplySuccess } from "../../apis/mentoring";
import * as S from "./style";
import Loading from "../../organisms/Loading";

function MentoringApplySuccessPage() {
  const { id } = useParams();
  const [state] = useAsync(() =>
    apiGetMentoringApplySuccess({ programId: id })
  );
  const { loading, error, data } = state;

  if (loading) return <Loading />;
  if (error) return <h1>에러</h1>;
  if (!data) return <h1>데이터에러</h1>;

  return (
    <S.Wrapper>
      <Text size="2rem" weight="bold">
        신청완료
      </Text>
      <S.RowWrapper>
        <Text size="1rem" weight="bold">
          해당 프로그램 신청이 완료되었습니다.
        </Text>
        <Btn to={`/mentoring/${id}`} size="10rem">
          신청한 프로그램 보기
        </Btn>
      </S.RowWrapper>
      <ProgramSummarySection data={data}></ProgramSummarySection>
    </S.Wrapper>
  );
}

export default memo(MentoringApplySuccessPage);
