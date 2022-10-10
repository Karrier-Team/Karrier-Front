import * as S from "./style";

const Nodata = ({ contentType = "" }) => {
  return (
    <S.Wrapper>
      <S.Span>{contentType + "데이터가 없습니다."}</S.Span>
    </S.Wrapper>
  );
};

export default Nodata;
