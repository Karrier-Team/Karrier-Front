import styled from "styled-components";
import React, { useState, useCallback } from "react";
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

const MentorIntro = ({ mentorIntro, handleChange }) => {
  // tag input state
  const [inputValue, setInputValue] = useState("");

  // 태그 추가
  const handleInsert = useCallback(() => {
    if (mentorIntro.tag.length < 10) {
      if (mentorIntro.tag.find((tag) => tag === inputValue)) {
        alert("중복된 태그입니다. 다른 태그을 입력해 주세요.");
      } else if (inputValue[0] !== "#") {
        alert("태그 형식으로 입력해주세요.");
      } else {
        handleChange({
          ...mentorIntro,
          tag: [inputValue, ...mentorIntro.tag],
        });
      }
    } else {
      alert("최대 10개까지 작성할 수 있습니다.");
    }
    setInputValue("");
  }, [inputValue]);

  // 태그 삭제
  const handleDelete = useCallback(
    (e) => {
      const newData = mentorIntro.tag.filter((item) => {
        return !(item === e.target.className);
      });
      handleChange({
        ...mentorIntro,
        tag: [...newData],
      });
    },
    [mentorIntro.tag]
  );
  return (
    <>
      <div style={{ margin: "5% 0" }}>
        <LabeledTextarea
          name={"멘토 소개"}
          placeholder={"멘토 소개에 관한 안내"}
          fontsize={"big"}
          value={mentorIntro.mentorIntro_info}
          handleChange={(e) => {
            handleChange({
              ...mentorIntro,
              mentorIntro_info: e,
            });
          }}
        />
      </div>
      <StyledSection>
        <LabeledTextarea
          required
          name={"멘토 소개"}
          placeholder={"내용을 입력해주세요.(30자 이상)"}
          value={mentorIntro.introduce}
          handleChange={(e) => {
            handleChange({
              ...mentorIntro,
              introduce: e,
            });
          }}
        />
      </StyledSection>
      <StyledSection>
        <LabeledTextarea
          height={"17vh"}
          name={"동아리"}
          value={mentorIntro.club}
          handleChange={(e) => {
            handleChange({
              ...mentorIntro,
              club: e,
            });
          }}
          placeholder={`동아리를 기입해주세요.\n예)교내 정보보안(KERT) / 기간: 2020.09~2021.03\n교외 넥스터즈(NEXTERS) / 기간: 2021.07~2021.08`}
        />
      </StyledSection>
      <StyledSection>
        <LabeledTextarea
          height={"17vh"}
          name={"공모전"}
          value={mentorIntro.contest}
          handleChange={(e) => {
            handleChange({
              ...mentorIntro,
              contest: e,
            });
          }}
          placeholder={`공모전 수상내역을 기입해주세요.\n예)수상년도: 2022/공모전명: 공개SW 개발자대회 / 주관사:정보통신산업진흥원`}
        />
      </StyledSection>
      <StyledSection>
        <LabeledTextarea
          height={"17vh"}
          name={"대외활동"}
          value={mentorIntro.external_activity}
          handleChange={(e) => {
            handleChange({
              ...mentorIntro,
              external_activity: e,
            });
          }}
          placeholder={`대외활동을 기입해주세요.\n예)보건의료통합봉사회 / 기간:2022.상반기`}
        />
      </StyledSection>
      <StyledSection>
        <LabeledTextarea
          height={"17vh"}
          name={"인턴"}
          value={mentorIntro.intern}
          handleChange={(e) => {
            handleChange({
              ...mentorIntro,
              intern: e,
            });
          }}
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
            value={mentorIntro.naverblog_address}
            handleChange={(e) => {
              handleChange({
                ...mentorIntro,
                naverblog_address: e,
              });
            }}
            placeholder={"네이버 URL을 입력해주세요"}
            height={"4em"}
          />
        </StyledMarginDiv>
        <StyledMarginDiv>
          <MediaInput
            fileName={"facebookIcon.png"}
            value={mentorIntro.facebook_address}
            handleChange={(e) => {
              handleChange({
                ...mentorIntro,
                facebook_address: e,
              });
            }}
            placeholder={"페이스북 URL을 입력해주세요"}
            height={"4em"}
          />
        </StyledMarginDiv>
        <StyledMarginDiv>
          <MediaInput
            fileName={"instagramIcon.png"}
            value={mentorIntro.instar_address}
            handleChange={(e) => {
              handleChange({
                ...mentorIntro,
                instar_address: e,
              });
            }}
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
          tagPlaceholder={"태그를 추가해주세요."}
          btnSize={"8vw"}
          padding={"1em"}
          height={"2.25em"}
          tagList={mentorIntro.tag}
          inputValue={inputValue}
          handleChange={setInputValue}
          handleInsert={handleInsert}
          handleDelete={handleDelete}
        />
      </StyledSection>
    </>
  );
};
MentorIntro.defaultProps = {
  mentorIntro: {
    mentorIntro_info: "",
    introduce: "",
    club: "",
    contest: "",
    external_activity: "",
    intern: "",
    naverblog_address: "",
    facebook_address: "",
    instar_address: "",
    tag: [],
  },
};
export default MentorIntro;
