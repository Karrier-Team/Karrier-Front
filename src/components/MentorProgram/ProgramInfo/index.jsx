import styled from "styled-components";
//components
import Btn from "../../atoms/Btn/index";
import Label from "../../atoms/Label/index";
import Textarea from "../../atoms/Textarea/index";
//styled-component
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const BtnSection = styled.section`
  display: flex;
`;

const InfoSection = styled.section`
  padding: 3% 7%;
`;

const InfoTitleSection = styled.section`
  display: flex;
  margin-bottom: 2%;
`;
const PhotoSection = styled.section``;

const ProgramInfo = () => {
  return (
    <Wrapper>
      <InfoSection>
        <InfoTitleSection>
          <Label name={"프로그램 대표 정보"} fontsize={"big"} />
          <BtnSection>
            <div style={{ padding: "3%" }}>
              <Btn
                children={"임시 저장"}
                size={"4.5em"}
                color={"black"}
                backgroundColor={"white"}
              />
            </div>
            <div style={{ padding: "3%" }}>
              <Btn
                children={"저장"}
                size={"4.5em"}
                color={"white"}
                backgroundColor={"RGB(99, 99, 99)"}
              />
            </div>
          </BtnSection>
        </InfoTitleSection>
        <Textarea
          placeholder={"프로그램 대표 정보에 관한 안내"}
          handleChange={() => {}}
        />
      </InfoSection>
      <PhotoSection>Phto</PhotoSection>
    </Wrapper>
  );
};
export default ProgramInfo;
