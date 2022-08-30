import styled from "styled-components";
import { useEffect } from "react";
//components
import Btn from "../../atoms/Btn/index";
import Label from "../../atoms/Label/index";
import Textarea from "../../atoms/Textarea/index";
import FileInput from "../../atoms/FileInput/index";

//styled-component
const Wrapper = styled.div`
  margin-bottom: 5%;
`;

const InfoSection = styled.section`
  margin-bottom: 4%;
`;

const BtnSection = styled.section`
  display: flex;
`;

const InfoTitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
`;
const FileSection = styled.section`
  margin-bottom: 4%;
`;
const File = styled.section`
  width: 100%;
  display: flex;
  margin-top: 3%;
`;

const ProgramInfo = ({
  programInfo,
  handleSubmit,
  handleTempSubmit,
  handleChange,
}) => {
  return (
    <Wrapper>
      <InfoSection>
        <InfoTitleSection>
          <Label name={"프로그램 대표 정보"} fontsize={"big"} />
          <BtnSection>
            <div style={{ margin: " 0 0.7em" }}>
              <Btn
                children={"임시 저장"}
                size={"4.5em"}
                color={"gray"}
                backgroundColor={"RGB(235, 235, 235)"}
                handleClick={handleSubmit}
              />
            </div>
            <div style={{ margin: " 0 0.7em" }}>
              <Btn
                children={"저장"}
                size={"4.5em"}
                color={"white"}
                backgroundColor={"#007bc3"}
                handleClick={handleTempSubmit}
              />
            </div>
          </BtnSection>
        </InfoTitleSection>
        <Textarea
          value={programInfo.representInfo}
          placeholder={"프로그램 대표 정보에 관한 안내"}
          handleChange={handleChange}
        />
      </InfoSection>
      <FileSection>
        <Label name={"대표 사진"} fontsize={"big"} />
        <File>
          <div style={{ width: "80%", marginRight: "5em" }}>
            <FileInput />
          </div>
          <div style={{ width: "80%" }}>
            <FileInput />
          </div>
        </File>
      </FileSection>
    </Wrapper>
  );
};
ProgramInfo.defaultProps = {
  programInfo: {
    representInfo: "",
  },
};
export default ProgramInfo;
