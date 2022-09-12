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
  margin-bottom: 10%;
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
  height: 100%;
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
        <Div width={"100%"} pd={"2em 3em"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.3em",
            }}
          >
            <Label name={"프로그램 대표 정보에 관한 안내"} fontsize={"big"} />
            <Span>
              -학과를 눌렀을 때 페이지에 나올 프로그램 대표사진입니다.
            </Span>
            <Span>
              -해당 사진은 학과별 페이지, 학과별 상세페이지에 나타납니다.
            </Span>
            <Span>-사진 크기에 맞게 대표사진을 첨부해주세요.</Span>
          </div>
        </Div>
      </InfoSection>
      <FileSection>
        <Label required name={"대표 사진"} />
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
                  height: "100%",
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
                  <div
                    style={{
                      width: "28%",
                      height: "100%",
                      backgroundImage: `url(${require("../../../images/tempImage1.png")})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow: "var(--box-shadow-strong)",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "28%",
                      height: "100%",
                      backgroundImage: `url(${require("../../../images/tempImage2.png")})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow: "var(--box-shadow-strong)",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "28%",
                      height: "100%",
                      backgroundImage: `url(${require("../../../images/tempImage3.png")})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow: "var(--box-shadow-strong)",
                    }}
                  ></div>
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
