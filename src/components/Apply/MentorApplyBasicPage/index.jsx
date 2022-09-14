import MentorApplyBasicPageBgImg from "../../../images/MentorApplyBasicPageBgImg.png";
import Btn from "../../atoms/Btn";
import * as S from "./style";
import Footer from "../../../common/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

function MentorApplyBasicPage() {
  return (
    <Wrapper>
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
      <div style={{ margin: "3% 0", width: "100%" }}>
        <Footer />
      </div>
    </Wrapper>
  );
}

export default MentorApplyBasicPage;
