import styled from "styled-components";
import { useEffect } from "react";
//components
import Btn from "../../atoms/Btn/index";
import Label from "../../atoms/Label/index";
import Textarea from "../../atoms/Textarea/index";
import FileInput from "../../atoms/FileInput/index";
import Div from "../../atoms/Div";

const programInfo = {
  name: "프로그램 대표 정보에 관한 안내",
};

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

const Span = styled.span`
  font-weight: bold;
  font-size: 1.1em;
  color: gray;
`;

const ImgSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
        <Label required name={"대표 사진"} fontsize={"big"} />
        <File>
          <div style={{ width: "80%", marginRight: "5em" }}>
            <FileInput
              name={"representImg"}
              aspectRatio={"7/5"}
              imageClickable={true}
              file={
                programInfo.representImg
                  ? programInfo.representImg
                  : require("../../../images/defaultFileImage.png")
              }
              handleChange={() => {}}
            />
          </div>
          <div style={{ width: "80%" }}>
            <Div width={"100%"} height={"100%"} pd={"2em 3em"}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5em",
                }}
              >
                <Label name={"프로그램 대표 사진"} fontsize="big" />
                <Span>-프로그램 대표 사진을 첨부해주세요.</Span>
                <Span>
                  -아래{" "}
                  <span style={{ color: "var(--primary-color)" }}>예시</span>를
                  참고해주세요.
                </Span>
                <ImgSection>
                  <img
                    src={require("../../../images/defaultFileImage.png")}
                    style={{ width: "30%" }}
                  />
                  <img
                    src={require("../../../images/defaultFileImage.png")}
                    style={{ width: "30%" }}
                  />
                  <img
                    src={require("../../../images/defaultFileImage.png")}
                    style={{ width: "30%" }}
                  />
                </ImgSection>
              </div>
            </Div>
          </div>
        </File>
      </FileSection>
    </Wrapper>
  );
};
ProgramInfo.defaultProps = {
  programInfo: {
    representInfo: "",
    representImg: "",
  },
};
export default ProgramInfo;
