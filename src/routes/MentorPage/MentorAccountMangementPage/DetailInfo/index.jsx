import React, { memo, useState, useEffect } from "react";
import * as S from "./style.js";

import LabeledTextarea from "../../../../components/molecules/LabeledTextarea";
import Btn from "../../../../components/atoms/Btn";
import ApplyPageUpperDiv from "../../../../components/molecules/ApplyPageUpperDiv";
import Label from "../../../../components/atoms/Label";
import MediaInput from "../../../../components/atoms/MediaInput";

const DetailInfo = () => {
  const [introduce, setIntroduce] = useState("");
  const [club, setClub] = useState("");
  const [contest, setContest] = useState("");
  const [external_activity, setExternal_activity] = useState("");
  const [intern, setIntern] = useState("");
  const [naverUrl, setNaverUrl] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [instaUrl, setInstaUrl] = useState("");

  // 연산량이 많은 그런 코드도 아니고,
  // "관련없는 data의 변경(state, props등)이 영향을 끼치는것도 아니다."
  // 그렇기 때문에, 단순히 useEffect를 이용하는게 맞는것같다.
  // const submitJson = useMemo(() => {
  //   return { introduce, club, contest, external_activity, intern };
  // }, [introduce, club, contest, external_activity, intern]);

  const handleSubmit = () => {
    console.log("data");
  };

  return (
    <>
      <S.Wrapper>
        <S.Section>
          <ApplyPageUpperDiv
            title={"상세정보"}
            subtitle={"학과별 세부페이지에 나타나는 상세정보입니다."}
            contents={[
              "본인에 대한 간단한 소개를 멘토소개에 작성해주세요.",
              "공모전, 대외활동, 인턴 경험등은 기타사항에 작성해주세요.",
              "블로그, 인스타, 페이스북, 유튜브 등 소셜미디어 링크는 소셜미디어에 작성해주세요.",
            ]}
          />
        </S.Section>
        <S.ContentWrapper>
          <S.Section>
            <LabeledTextarea
              required={true}
              storage={"introduce"}
              value={introduce}
              placeholder="내용을 입력해주세요. (30자이상)"
              name="멘토소개"
              size="lg"
              handleChange={setIntroduce}
            ></LabeledTextarea>
          </S.Section>
          <S.Section>
            <LabeledTextarea
              storage={"club"}
              height={"17vh"}
              name={"동아리"}
              value={club}
              handleChange={setClub}
              placeholder={`동아리를 기입해주세요.\n예)교내 정보보안(KERT) / 기간: 2020.09~2021.03\n교외 넥스터즈(NEXTERS) / 기간: 2021.07~2021.08`}
            />
          </S.Section>
          <S.Section>
            <LabeledTextarea
              height={"17vh"}
              name={"공모전"}
              storage={"contest"}
              value={contest}
              handleChange={setContest}
              placeholder={`공모전 수상내역을 기입해주세요.\n예)수상년도: 2022/공모전명: 공개SW 개발자대회 / 주관사:정보통신산업진흥원`}
            />
          </S.Section>
          <S.Section>
            <LabeledTextarea
              height={"17vh"}
              name={"대외활동"}
              storage={"external_activity"}
              value={external_activity}
              handleChange={setExternal_activity}
              placeholder={`대외활동을 기입해주세요.\n예)보건의료통합봉사회 / 기간:2022.상반기`}
            />
          </S.Section>
          <S.Section>
            <LabeledTextarea
              height={"17vh"}
              name={"인턴"}
              storage={"intern"}
              value={intern}
              handleChange={setIntern}
              placeholder={`인턴 여부를 기입해주세요.\n예)카카오뱅크/[SERVER] 신규 서비스 백엔드 개발자`}
            />
          </S.Section>
          <S.StyledSection>
            <S.StyledMarginDiv>
              <Label name={"소셜미디어"} />
            </S.StyledMarginDiv>
            <S.StyledMarginDiv>
              <MediaInput
                fileName={"naverIcon.png"}
                value={naverUrl}
                handleChange={setNaverUrl}
                placeholder={"네이버 URL을 입력해주세요"}
                height={"4em"}
              />
            </S.StyledMarginDiv>
            <S.StyledMarginDiv>
              <MediaInput
                fileName={"facebookIcon.png"}
                value={facebookUrl}
                handleChange={setFacebookUrl}
                placeholder={"페이스북 URL을 입력해주세요"}
                height={"4em"}
              />
            </S.StyledMarginDiv>
            <S.StyledMarginDiv>
              <MediaInput
                fileName={"instagramIcon.png"}
                value={instaUrl}
                handleChange={setInstaUrl}
                placeholder={"인스타그램 URL을 입력해주세요"}
                height={"4em"}
              />
            </S.StyledMarginDiv>
          </S.StyledSection>
          <S.RowWrapper>
            <Btn children={"저장"} handleClick={handleSubmit} size={"80%"} />
          </S.RowWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
};

export default DetailInfo;
