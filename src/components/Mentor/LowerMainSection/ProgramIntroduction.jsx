import React, { memo } from "react";
import * as S from "./style";

const dummy = {
  programName: "자료구조 알고리즘의 모든것",
  programDetail:
    "안녕하세요 현재 경북대학교 글로벌 소프트웨어 융합전공 4학년에 재학중인 김기혁입니다.\n안녕하세요 현재 경북대학교 글로벌 소프트웨어 융합전공 4학년에 재학중인 김기혁입니다.\n안녕하세요 현재 경북대학교 글로벌 소프트웨어 융합전공 4학년에 재학중인 김기혁입니다.\n안녕하세요 현재 경북대학교 글로벌 소프트웨어 융합전공 4학년에 재학중인 김기혁입니다.\n안녕하세요 현재 경북대학교 글로벌 소프트웨어 융합전공 4학년에 재학중인 김기혁입니다.\n\n안녕하세요 현재 경북대학교 글로벌 소프트웨어 융합전공 4학년에 재학중인 김기혁입니다.\n안녕하세요 현재 경북대학교 글로벌 소프트웨어 융합전공 4학년에 재학중인 김기혁입니다.\n안녕하세요 현재 경북대학교 글로벌 소프트웨어 융합전공 4학년에 재학중인 김기혁입니다.\n\n안녕하세요 현재 경북대학교 글로벌 소프트웨어 융합전공 4학년에 재학중인 김기혁입니다.\n안녕하세요 현재 경북대학교 글로벌 소프트웨어 융합전공 4학년에 재학중인 김기혁입니다.\n안녕하세요 현재 경북대학교 글로벌 소프트웨어 융합전공 4학년에 재학중인 김기혁입니다.\n\n안녕하세요 현재 경북대학교 글로벌 소프트웨어 융합전공 4학년에 재학중인 김기혁입니다.\n",
  recommends: [
    "컴퓨터에 관심이 있는데, 진로에 고민이 많은 이공계 학생",
    "컴퓨터공학과에 대해서 알고싶은 학생",
  ],
};

const randomColors = [
  "#ffadad",
  "#ffd6a5",
  "#fdffb6",
  "#caffbf",
  "#9bf6ff",
  "#a0c4ff",
  "#bdb2ff",
  "#ffc6ff",
];

function ProgramIntroduction({ content }) {
  return (
    <S.Wrapper>
      <S.StyledH1>{content.title}</S.StyledH1>
      <div>
        <S.StyledH2>{"프로그램 소개"}</S.StyledH2>
        <S.Parag>{content.introduce}</S.Parag>
      </div>
      <div>
        <S.StyledH2>{"추천 대상"}</S.StyledH2>
        <S.SubWrapper>
          {content.recommendedTargetList.map((list) => (
            <S.Badge
              bgcolor={
                randomColors[Math.floor(Math.random() * randomColors.length)]
              }
            >
              {list.target}
            </S.Badge>
          ))}
        </S.SubWrapper>
      </div>
    </S.Wrapper>
  );
}

export default memo(ProgramIntroduction);
