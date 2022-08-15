import React from "react";
import * as S from "./style";

function ApplyPageUpperDiv({ title, subtitle, contents }) {
  return (
    <S.Wrapper>
      <S.RowWrapper>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.RowWrapper>
      {contents.length === 0 ? null : (
        <S.ColWrapper>
          {contents.map((content) => (
            <S.Content>{"-" + content}</S.Content>
          ))}
        </S.ColWrapper>
      )}
    </S.Wrapper>
  );
}

export default ApplyPageUpperDiv;
