import React, { useState } from "react";
import CommunityNavbar from "../../organisms/CommunityNavbar/index.jsx";
import ControllBar from "../../organisms/ControllBar/index.jsx";
import Selector from "../../components/atoms/Selector";
import * as S from "./style.js";

import { Text, Modal } from "@mantine/core";
import MypageReviewsPostDiv from "../../organisms/MypageReviewsPostDiv";
import CommunityQnAQuestionModalContent from "../../organisms/CommunityQnAQuestionModalContent/index.jsx";

import { apiGetMypageReviewPage, apiPostNewReview } from "../../apis/mypage.js";
import { Navigate, useNavigate } from "react-router-dom";

import {
  makeProgramList,
  getRatingByOneDecimalPoint,
} from "../../utils/mypage.js";
import Loading from "react-loading";
import useAsync from "../../hooks/useAsync.js";

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

  const [state] = useAsync(apiGetMypageReviewPage);
  const { loading, error, data } = state;

  if (loading) return <Loading />;
  if (error) return <Navigate to="/error" replace></Navigate>;
  if (!data) return <h1>데이터에러</h1>;

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
        <S.WrapperSpaceBtwn>
          <Selector
            width="30rem"
            name="프로그램"
            handleChange={setCurProgramNo}
            options={makeProgramList(data)}
          ></Selector>
          <span>
            <S.StyledText bold="bold">평균평점 ⭐️ </S.StyledText>
            <S.StyledText bold="bold" color="var(--reviews-color)">
              {getRatingByOneDecimalPoint(data[0].averageStar)}
            </S.StyledText>
          </span>
        </S.WrapperSpaceBtwn>

        {data
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
              setStar={setStar}
              setTitle={setTitle}
              setContent={setContent}
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
