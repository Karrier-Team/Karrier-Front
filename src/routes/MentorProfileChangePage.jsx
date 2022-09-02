import React, { useState } from "react";
import styled from "styled-components";

//components
import Btn from "../components/atoms/Btn";
import Label from "../components/atoms/Label";
import Div from "../components/atoms/Div";
import Img from "../components/atoms/Img/index";
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

const MentorProfileChangePage = () => {
  const [name, setName] = useState("");
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
              <Img size={"100%"} />
              <br />
              <br />
              <Btn
                children={"사진 변경"}
                size={"100%"}
                borderRadius={"20px"}
                height={"2.8em"}
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
                  onClick={() => {}}
                >
                  중복확인
                </span>
              </NicknameSection>
              <br />
              <Input
                placeholder={"변경할 닉네임을 작성해주세요."}
                value={""}
                handleChange={() => {}}
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
                  onClick={() => {}}
                />
                <Btn
                  size={"35%"}
                  children={"취소"}
                  color={"black"}
                  backgroundColor={"white"}
                  borderRadius={"0"}
                  onClick={() => {}}
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
                handleChange={() => {}}
                height={"3.5em"}
                padding={"1.3em 1.5em"}
              />
              <br />
              <br />
              <LabeledInput
                name={"새 비밀번호"}
                placeholder={"새 비밀번호를 입력해주세요."}
                handleChange={() => {}}
                height={"3.5em"}
                padding={"1.3em 1.5em"}
              />
              <br />
              <br />
              <LabeledInput
                name={"비밀번호 확인"}
                placeholder={"변경할 비밀번호를 한 번 더 입력해주세요."}
                handleChange={() => {}}
                height={"3.5em"}
                padding={"1.3em 1.5em"}
              />
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
                  onClick={() => {}}
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
