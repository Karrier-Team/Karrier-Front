import React, { useState } from "react";
import CommunityNavbar from "../../organisms/CommunityNavbar/index.jsx";
import ControllBar from "../../organisms/ControllBar/index.jsx";
import Selector from "../../components/atoms/Selector";
import * as S from "./style.js";

import { Text, Modal } from "@mantine/core";
import MypageReviewsPostDiv from "../../organisms/MypageReviewsPostDiv";
import CommunityQnAQuestionModalContent from "../../organisms/CommunityQnAQuestionModalContent/index.jsx";

import { apiPostNewReview } from "../../apis/mypage.js";
import { useNavigate } from "react-router-dom";

import { makeProgramList } from "../../utils/mypage.js";

const sortTypeOptions = [
  { value: "latest", name: "최신순" },
  { value: "unsolved", name: "미해결" },
  { value: "solved", name: "해결" },
];

const searchTypeOptions = [
  { value: "content", name: "질문내용" },
  { value: "title", name: "질문제목" },
  { value: "nickname", name: "닉네임" },
];

const dummyData = [
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4.42857,
    reviewStar: 4.5,
    reviewNo: 1,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내",
    comment: true,
    registerDate: "2022-08-19T18:00:23.460696",
    reviewLikeNo: 1,
  },
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4.42857,
    reviewStar: 4.5,
    reviewNo: 3,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내",
    comment: false,
    registerDate: "2022-08-20T15:14:52.563823",
    reviewLikeNo: 0,
  },
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4.42857,
    reviewStar: 4.5,
    reviewNo: 4,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내",
    comment: false,
    registerDate: "2022-08-20T15:14:57.326689",
    reviewLikeNo: 0,
  },
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4.42857,
    reviewStar: 4.5,
    reviewNo: 5,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: false,
    registerDate: "2022-08-21T17:33:27.814259",
    reviewLikeNo: 0,
  },
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4.42857,
    reviewStar: 4.5,
    reviewNo: 6,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: false,
    registerDate: "2022-08-21T17:35:29.620842",
    reviewLikeNo: 0,
  },
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4.42857,
    reviewStar: 4,
    reviewNo: 7,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: false,
    registerDate: "2022-08-21T17:35:36.510593",
    reviewLikeNo: 0,
  },
  {
    programNo: 4,
    programName: "라라",
    averageStar: 2,
    reviewStar: 4,
    reviewNo: 1,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: true,
    registerDate: "2022-08-24T21:27:32.247857",
    reviewLikeNo: 0,
  },
  {
    programNo: 4,
    programName: "라라",
    averageStar: 2,
    reviewStar: 5,
    reviewNo: 2,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: false,
    registerDate: "2022-08-24T21:27:37.999857",
    reviewLikeNo: 0,
  },
  {
    programNo: 4,
    programName: "라라",
    averageStar: 2,
    reviewStar: 3.5,
    reviewNo: 3,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: true,
    registerDate: "2022-08-24T21:27:42.096914",
    reviewLikeNo: 0,
  },
];

function MypageReviewsPage() {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState("latest");
  const [searchType, setSearchType] = useState("content");
  const [searchValue, setSearchValue] = useState("");
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);
  const [curProgramNo, setCurProgramNo] = useState(null);

  const [star, setStar] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleApiPostNewReview = async () => {
    const [result, status] = await apiPostNewReview({
      curProgramNo,
      star: parseInt(star) / 20 < 0 ? 0 : parseInt(star) / 20,
      title,
      content,
    });
    if (status === 200 || status === 201) {
      alert("성공");
      const { reviewNo } = result;
      navigate(`/community/reviews/${curProgramNo}/review/${reviewNo}`);
    } else {
      alert(result);
    }
  };

  const handleMakeNewPostButton = () => {
    if (!curProgramNo) {
      alert("프로그램을 선택해주세요!");
      return;
    }
    setIsEditModalOpened(true);
  };

  return (
    <>
      <CommunityNavbar isAdVisible={false} type="reviews">
        마이페이지 수강후기
      </CommunityNavbar>
      <S.Wrapper>
        <Text style={{ marginTop: "0.5em" }} weight={"bold"} size="2rem">
          {"MY 수강후기"}
        </Text>
        <ControllBar
          type="reviews"
          searchBarToTheRight
          withBtn={true}
          onClickBtn={handleMakeNewPostButton}
          sortType={sortType}
          sortTypeOptions={sortTypeOptions}
          onChangeSortType={setSortType}
          onChangeSearchType={setSearchType}
          searchType={searchType}
          searchValue={searchValue}
          onChangeSearchValue={setSearchValue}
          searchTypeOptions={searchTypeOptions}
        ></ControllBar>
        <div style={{ width: "30rem" }}>
          <Selector
            name="프로그램"
            handleChange={setCurProgramNo}
            options={makeProgramList(dummyData)}
          ></Selector>
        </div>
        {dummyData
          .filter((review) => {
            if (!curProgramNo) return true;
            else return review.programNo === curProgramNo;
          })
          // .sort() 이친구는 나중에 구현해야지!
          .map((review) => (
            <MypageReviewsPostDiv
              type="reviews"
              key={review.questionNo}
              data={review}
            />
          ))}
      </S.Wrapper>

      {/* 모달 */}
      <Modal
        size="60%"
        centered
        opened={isEditModalOpened}
        onClose={() => setIsEditModalOpened(false)}
      >
        <CommunityQnAQuestionModalContent
          type="reviews"
          handleSubmit={handleApiPostNewReview}
          setStar={setStar}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
        />
      </Modal>
    </>
  );
}

export default MypageReviewsPage;
