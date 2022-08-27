import styled from "styled-components";

//components
import Label from "../../atoms/Label";
import LabeledTextarea from "../../molecules/LabeledTextarea/index";
import MediaInput from "../../atoms/MediaInput/index";
import InputTag from "../../molecules/InputTag/index";

//styled-component
const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
  justify-content: space-between;
`;
const StyledMarginDiv = styled.div`
  margin-bottom: 3%;
`;

const MentorIntro = () => {
  return (
    <>
      <div style={{ margin: "5% 0" }}>
        <LabeledTextarea
          name={"멘토 소개"}
          handleChange={() => {}}
          placeholder={"멘토 소개에 관한 안내"}
          fontsize={"big"}
        />
      </div>
      <StyledSection>
        <LabeledTextarea
          required
          name={"멘토 소개"}
          handleChange={() => {}}
          placeholder={"내용을 입력해주세요.(30자 이상)"}
        />
      </StyledSection>
      <StyledSection>
        <LabeledTextarea
          height={"17vh"}
          name={"동아리"}
          handleChange={() => {}}
          placeholder={`동아리를 기입해주세요.\n예)교내 정보보안(KERT) / 기간: 2020.09~2021.03\n교외 넥스터즈(NEXTERS) / 기간: 2021.07~2021.08`}
        />
      </StyledSection>
      <StyledSection>
        <LabeledTextarea
          height={"17vh"}
          name={"공모전"}
          handleChange={() => {}}
          placeholder={`공모전 수상내역을 기입해주세요.\n예)수상년도: 2022/공모전명: 공개SW 개발자대회 / 주관사:정보통신산업진흥원`}
        />
      </StyledSection>
      <StyledSection>
        <LabeledTextarea
          height={"17vh"}
          name={"대외활동"}
          handleChange={() => {}}
          placeholder={`대외활동을 기입해주세요.\n예)보건의료통합봉사회 / 기간:2022.상반기`}
        />
      </StyledSection>
      <StyledSection>
        <LabeledTextarea
          height={"17vh"}
          name={"인턴"}
          handleChange={() => {}}
          placeholder={`인턴 여부를 기입해주세요.\n예)카카오뱅크/[SERVER] 신규 서비스 백엔드 개발자`}
        />
      </StyledSection>

      <StyledSection>
        <StyledMarginDiv>
          <Label name={"소셜미디어"} />
        </StyledMarginDiv>
        <StyledMarginDiv>
          <MediaInput
            fileName={"naverIcon.png"}
            handleChange={() => {}}
            placeholder={"네이버 URL을 입력해주세요"}
            height={"4em"}
          />
        </StyledMarginDiv>
        <StyledMarginDiv>
          <MediaInput
            fileName={"facebookIcon.png"}
            handleChange={() => {}}
            placeholder={"페이스북 URL을 입력해주세요"}
            height={"4em"}
          />
        </StyledMarginDiv>
        <StyledMarginDiv>
          <MediaInput
            fileName={"instagramIcon.png"}
            handleChange={() => {}}
            placeholder={"인스타그램 URL을 입력해주세요"}
            height={"4em"}
          />
        </StyledMarginDiv>
      </StyledSection>
      <StyledSection>
        <div style={{ marginBottom: "3%" }}>
          <Label name={"태그 편집"} required />
        </div>
        <InputTag
          placeholder={"#컴퓨터공학과 #예비개발자 #코딩테스트"}
          handleChange={() => {}}
          btnSize={"8vw"}
          padding={"1em"}
          height={"2.25em"}
        />
      </StyledSection>
    </>
  );
};
export default MentorIntro;
