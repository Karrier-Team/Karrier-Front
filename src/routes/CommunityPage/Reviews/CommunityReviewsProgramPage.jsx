import React, { useState } from "react";
import CommunityNavbar from "../../../organisms/CommunityNavbar";
import ControllBar from "../../../organisms/ControllBar";
import CommunityPostDiv from "../../../organisms/CommunityPostDiv";
import { Modal, Text } from "@mantine/core";
import * as S from "./style.js";
import CommunityQnAQuestionModalContent from "../../../organisms/CommunityQnAQuestionModalContent";

const sortTypeOptions = [
  { value: "latest", name: "최신순" },
  { value: "unanswered", name: "미답변" },
  { value: "answered", name: "답변" },
];

const searchTypeOptions = [
  { value: "content", name: "후기내용" },
  { value: "title", name: "후기제목" },
  { value: "nickname", name: "닉네임" },
];

const dummyProgramData = {
  title: "고3 대비 컴퓨터 공학과의 진실",
  reviews: [
    {
      programNo: 1,
      programName: "컴공 맛보기",
      averageStar: 4.42857,
      reviewStar: 4.5,
      reviewNo: 1,
      nickname: "행복한바지",
      title: "수강후기 제목",
      content: "수강후기 내용",
      comment: false,
      registerDate: "2022-08-19T18:00:23.460696",
      reviewLikeNo: 1,
    },
    {
      programNo: 2,
      programName: "컴공 맛보기2",
      averageStar: 4.42857,
      reviewStar: 4.5,
      reviewNo: 2,
      nickname: "소식돼지",
      title: "제목입니다",
      content: "내용입니다",
      comment: true,
      registerDate: "2022-08-19T19:53:57.726083",
      reviewLikeNo: 0,
    },
  ],
};

function CommunityReviewsProgramPage() {
  const [sortType, setSortType] = useState("latest");
  const [searchType, setSearchType] = useState("content");
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);

  // states for Modal content
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [star, setStars] = useState("0");

  return (
    <>
      <CommunityNavbar type="reviews" isAdVisible={false}>
        <div>
          <Text size="1em">수강후기</Text>
        </div>
      </CommunityNavbar>
      <S.Wrapper>
        <Text style={{ marginTop: "0.5em" }} weight={"bold"} size="2rem">
          {"수강후기"}
        </Text>
        <ControllBar
          type="reviews"
          withBtn
          onClickBtn={setIsModalOpened}
          sortType={sortType}
          sortTypeOptions={sortTypeOptions}
          onChangeSortType={setSortType}
          onChangeSearchType={setSearchType}
          searchType={searchType}
          searchValue={searchValue}
          onChangeSearchValue={setSearchValue}
          searchTypeOptions={searchTypeOptions}
        ></ControllBar>
        <Modal
          size="60%"
          centered
          opened={isModalOpened}
          onClose={() => setIsModalOpened(false)}
        >
          <CommunityQnAQuestionModalContent
            type="reviews"
            setStars={setStars}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
          />
        </Modal>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text weight={"500"} color="var(--reviews-color)" size="2.5rem">
            {dummyProgramData.title}
          </Text>
          <Text size="1rem" style={{ transform: "translateY(1.5rem)" }}>
            {"평균 별점⭐️ " + dummyProgramData.reviews[0].averageStar}
          </Text>
        </div>
        {dummyProgramData.reviews.map((review) => (
          <CommunityPostDiv type="reviews" data={review} />
        ))}
      </S.Wrapper>
    </>
  );
}

export default CommunityReviewsProgramPage;
