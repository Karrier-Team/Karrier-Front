import MentorApplyBasicPageBgImg from "../../../images/MentorApplyBasicPageBgImg.png";
import Btn from "../../atoms/Btn";
import * as S from "./style";

function MentorApplyBasicPage() {
  return (
    <>
      <S.Wrapper bgimg={MentorApplyBasicPageBgImg}>
        <S.Div>
          <Btn
            onHoverAnimaton
            size="100%"
            fontSize="1.5rem"
            backgroundColor="white"
            color="gray"
            to="/apply/step1"
          >
            멘토 지원하기
          </Btn>
        </S.Div>
      </S.Wrapper>
    </>
  );
}

export default MentorApplyBasicPage;
