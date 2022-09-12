import React, { useState, useEffect } from "react";
import styled from "styled-components";

//components
import Btn from "../components/atoms/Btn";
import Label from "../components/atoms/Label";
import Div from "../components/atoms/Div";
import FileInput from "../components/atoms/FileInput/index";
import Input from "../components/atoms/Input/index";
import LabeledInput from "../components/molecules/LabeledInput/index";

//styled-components
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  width: 43%;
  margin-bottom: 5%;
`;
const InnerSection = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const NicknameSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ChangeSection = styled.section`
  background-color: var(--bg-color-ll);
  width: 100%;
`;

const PasswordSection = styled.section`
  width: 80%;
  margin-top: 5%;
`;

const BtnSection = styled.section`
  width: 100%;
  margin-top: 10%;
`;

const CheckSpan = ({ data, color }) => {
  return (
    <span
      style={{
        fontWeight: "bold",
        fontSize: "1em",
        color: color,
        display: "flex",
        justifyContent: "flex-start",
        marginTop: "3%",
      }}
    >
      {data}
    </span>
  );
};

const MentorProfileChangePage = () => {
  // dummy
  const currentNum = "hello";
  const currentName = "front";
  // state

  const [rename, setRename] = useState("");
  const [image, setImage] = useState();
  const [currentCheckNum, setCurrentCheckNum] = useState("");
  const [newNum, setNewNum] = useState("");
  const [checkNewNum, setCheckNewNum] = useState("");

  const [cmpCurrentNum, setCmpCurrentNum] = useState(false);
  const [cmpNewNum, setCmpNewNum] = useState(false);

  //effect

  // 처음 렌더링 될 때 get 요청 -> 사진 이미지, 현재 비밀번호 (currentNum)
  useEffect(() => {
    // get 요청
    console.log("get");
    // 동기화 문제 때문에 첫 렌더링에 setter 초기화
    setCurrentCheckNum("");
    setCheckNewNum("");
  }, []);

  useEffect(() => {
    // 현재 비밀번호와 같은지 확인
    if (currentCheckNum !== "") {
      if (currentCheckNum === currentNum) {
        setCmpCurrentNum(true);
      } else {
        setCmpCurrentNum(false);
      }
    }
  }, [currentCheckNum]);

  useEffect(() => {
    // 비밀번호 확인
    if (checkNewNum !== "") {
      if (newNum === checkNewNum) {
        setCmpNewNum(true);
      } else {
        setCmpNewNum(false);
      }
    }
  }, [checkNewNum, checkNewNum]);

  // method
  // 중복 확인
  const doubleCheck = () => {
    if (rename === currentName) {
      alert("기존 닉네임과 같습니다.");
    }
  };

  const handleDelete = () => {
    setImage(null);
    setRename("");
  };

  // 닉네임 수정사항 적용
  const handleApply = () => {
    "post 보냄";
  };
  // 변경된 비밀번호 사항 저장
  const handleSave = () => {
    if (cmpCurrentNum && cmpNewNum) {
      alert("post");
    } else {
      alert("조건을 완성시켜 주세요.");
    }
  };
  // 휴면 신청
  const handleDormancy = () => {};
  // 탈퇴 신청
  const handleResign = () => {};

  return (
    <Wrapper>
      <Section>
        {/* 프로필 변경 */}
        <div style={{ marginTop: "5%", marginBottom: "3%" }}>
          <Label name={"프로필 변경"} fontsize={"big"} />
          <br />
          <br />
          <span
            style={{ display: "block", fontWeight: "bold", fontSize: "0.9em" }}
          >
            캐리어의 프로필 사진과 닉네임을 변경하세요.
          </span>
        </div>

        <ChangeSection>
          <Div centercontent={true}>
            <InnerSection>
              <FileInput
                name={"imgButton"}
                borderRadius={"50%"}
                aspectRatio={"1 / 1"}
                file={image}
                handleChange={setImage}
                objectFit={"cover"}
              />
              <br />
              <br />
              <Btn
                // label 속성으로 바꿈 -> Btn 과 input 연결, Img 는 연결하지 않음
                as="label"
                htmlFor="imgButton"
                children={"사진 변경"}
                size={"100%"}
                borderRadius={"20px"}
                height={"2.8em"}
                handleClick={setImage}
                type={"qna"}
              />
              <br />
              <br />
              <NicknameSection>
                <Label name={"닉네임"} />
                <span
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "bold",
                    marginTop: "0.5em",
                    cursor: "pointer",
                  }}
                  onClick={doubleCheck}
                >
                  중복확인
                </span>
              </NicknameSection>
              <br />
              <Input
                placeholder={"변경할 닉네임을 작성해주세요."}
                value={rename}
                handleChange={setRename}
                height={"0.7em"}
                padding={"1.3em 1.5em"}
                borderRadius={"0"}
              />
              <br />
              <br />
              <NicknameSection>
                <Btn
                  size={"35%"}
                  children={"적용"}
                  color={"white"}
                  backgroundColor={"var(--primary-color)"}
                  borderRadius={"0"}
                  onClick={handleApply}
                />
                <Btn
                  size={"35%"}
                  children={"취소"}
                  color={"black"}
                  backgroundColor={"white"}
                  borderRadius={"0"}
                  handleClick={handleDelete}
                />
              </NicknameSection>
              <br />
              <br />
            </InnerSection>
          </Div>
        </ChangeSection>
        <br />
        {/* 비밀번호 */}
        <div style={{ marginTop: "5%", marginBottom: "3%" }}>
          <Label name={"비밀번호 변경"} fontsize={"big"} />
          <br />
          <br />
          <span
            style={{ display: "block", fontWeight: "bold", fontSize: "0.9em" }}
          >
            비밀번호 규정에 맞게 변경해주세요.
          </span>
        </div>
        <ChangeSection>
          <Div centercontent={true}>
            <PasswordSection>
              <LabeledInput
                name={"현재 비밀번호"}
                placeholder={"현재 비밀번호를 입력해주세요."}
                handleChange={setCurrentCheckNum}
                height={"3.5em"}
                padding={"1.3em 1.5em"}
              />
              {currentCheckNum === "" ? null : cmpCurrentNum ? (
                <CheckSpan
                  data={"현재 비밀번호와 일치합니다."}
                  color={"Green"}
                />
              ) : (
                <CheckSpan
                  data={"현재 비밀번호와 일치하지 않습니다."}
                  color={"red"}
                />
              )}

              <br />
              <br />
              <LabeledInput
                name={"새 비밀번호"}
                placeholder={"새 비밀번호를 입력해주세요."}
                handleChange={setNewNum}
                height={"3.5em"}
                padding={"1.3em 1.5em"}
              />
              <br />
              <br />
              <LabeledInput
                name={"비밀번호 확인"}
                placeholder={"변경할 비밀번호를 한 번 더 입력해주세요."}
                handleChange={setCheckNewNum}
                height={"3.5em"}
                padding={"1.3em 1.5em"}
              />
              {checkNewNum === "" ? null : cmpNewNum ? (
                <CheckSpan data={"새 비밀번호와 일치합니다."} color={"Green"} />
              ) : (
                <CheckSpan
                  data={"새 비밀번호와 일치하지 않습니다."}
                  color={"red"}
                />
              )}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "15%",
                  marginBottom: "5%",
                }}
              >
                <Btn
                  size={"80%"}
                  height={"2.8em"}
                  children={"저장"}
                  color={"white"}
                  backgroundColor={"var(--primary-color)"}
                  handleClick={handleSave}
                />
              </div>
            </PasswordSection>
          </Div>
        </ChangeSection>
        <BtnSection>
          <Btn
            size={"100%"}
            children={"휴면신청"}
            color={"black"}
            backgroundColor={"var(--bg-color-ll)"}
            borderRadius={"1em"}
            height={"2.5em"}
            fontSize={"1.3em"}
            onClick={() => {}}
          />
          <br />

          <Btn
            size={"100%"}
            children={"회원탈퇴"}
            color={"red"}
            backgroundColor={"var(--bg-color-ll)"}
            borderRadius={"1em"}
            height={"2.5em"}
            fontSize={"1.3em"}
            onClick={() => {}}
          />
        </BtnSection>
      </Section>
    </Wrapper>
  );
};

export default React.memo(MentorProfileChangePage);
