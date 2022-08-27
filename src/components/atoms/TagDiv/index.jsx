import * as S from "./style";

function TagDiv({ children, centercontent, fontsize, padding }) {
  return (
    <S.TagDiv
      fontsize={fontsize}
      centercontent={centercontent}
      padding={padding}
    >
      {children}
    </S.TagDiv>
  );
}

export default TagDiv;
