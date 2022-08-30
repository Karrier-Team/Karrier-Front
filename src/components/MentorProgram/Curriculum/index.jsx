import styled from "styled-components";

//components
import Label from "../../atoms/Label";
import LabeldTextarea from "../../molecules/LabeledTextarea/index";
import Btn from "../../atoms/Btn";
import Input from "../../atoms/Input/index";
import Textarea from "../../atoms/Textarea";

const LectureSection = styled.section``;
const HeadSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 8%;
`;

const Curriculum = ({ curriculum, handleChange }) => {
  return (
    <>
      <div style={{ marginBottom: "5%" }}>
        <LabeldTextarea
          fontsize={"big"}
          placeholder={"커리큘럼에 관한 안내"}
          name={"커리큘럼"}
          value={curriculum.curriculum_info}
          handleChange={(e) => {
            handleChange({
              ...curriculum,
              curriculum_info: e,
            });
          }}
        />
      </div>
      <LectureSection>
        <HeadSection>
          <Label required name={"강의 구성"} />
          <div style={{ marginTop: "3%" }}>
            <Btn
              children={"새로 만들기"}
              size={"8em"}
              backgroundColor={"#007bc3"}
              fontSize={".7em"}
            />
          </div>
        </HeadSection>
        <Input
          placeholder={"제목을 작성해주세요."}
          handleChange={() => {}}
          height={"5vh"}
          padding={"1.5em"}
        />
        <Textarea
          placeholder={"내용을 작성해주세요."}
          handleChange={() => {}}
          height={"30vh"}
        />
        <ButtonSection>
          <div style={{ marginRight: "1%" }}>
            <Btn
              children={"전체"}
              size={"5em"}
              backgroundColor={"#007bc3"}
              fontSize={".7em"}
            />
          </div>
          <div style={{ marginRight: "1%" }}>
            <Btn
              children={"선택"}
              size={"5em"}
              backgroundColor={"white"}
              color={"black"}
              fontSize={".7em"}
            />
          </div>
          <Btn
            children={"삭제"}
            size={"5em"}
            backgroundColor={"white"}
            color={"black"}
            fontSize={".7em"}
          />
        </ButtonSection>
        {/* <LectureList /> */}
      </LectureSection>
    </>
  );
};
Curriculum.defaultProps = {
  curriculum: {
    curriculum_info: "",
    lecture: [],
  },
};
export default Curriculum;
