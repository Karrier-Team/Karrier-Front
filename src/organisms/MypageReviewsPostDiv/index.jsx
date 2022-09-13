import * as S from "./style";
import { useState } from "react";
import { Text, Space, Modal } from "@mantine/core";
import CircleWithText from "../../components/molecules/CircleWithText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { getColorByType, getFullPropertyName, parseDate } from "../../utils";
// import Btn from "../../components/atoms/Btn";
import CommunityQnAQuestionModalContent from "../CommunityQnAQuestionModalContent";

import { apiUpdateCurReview } from "../../apis/mypage";

const MypageReviewsPostDiv = ({
  type,
  data,
  setStar,
  setTitle,
  setContent,
}) => {
  const [clicked, setClicked] = useState(false);
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);

  const handleApiUpdateCurReview = async (data) => {
    const apiData = {
      programNo: data.programNo,
      reviewNo: data.reviewNo,
      star: data.star,
      title: data.title,
      content: data.content,
    };
    const [result, status] = await apiUpdateCurReview(apiData);
    if (status === 200 || status === 201) {
      alert("성공");
    } else {
      alert(result);
    }
  };

  return (
    <S.Wrapper>
      <S.RowWrapper>
        <S.ColWrapper clicked={clicked}>
          <Text weight="600" size="1.5em">
            {data.title}
          </Text>
          <Space h="xs"></Space>
          <Text
            className={clicked ? "onClicked" : "notClicked"}
            size="1em"
            color={"gray"}
          >
            {data.content}
          </Text>
          {clicked ? (
            <FontAwesomeIcon
              onClick={() => setClicked((prev) => !prev)}
              className="icon"
              icon={faChevronUp}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setClicked((prev) => !prev)}
              className="icon"
              icon={faChevronDown}
            />
          )}
        </S.ColWrapper>
        <S.ColWrapperCntr>
          <CircleWithText
            type={type}
            upper={data[getFullPropertyName(data, "Like")]}
            lower={"좋아요"}
          />
        </S.ColWrapperCntr>
      </S.RowWrapper>
      <S.LowerRowWrapper>
        <S.FlexDiv width="80%">
          <Text color={"gray"}>{data.nickname}</Text>
          <Space w="xl"></Space>
          {!type || type === "qna" ? (
            <Text color={data.solve ? getColorByType(type) : "gray"}>
              {"답변"}
            </Text>
          ) : null}
        </S.FlexDiv>

        <S.FlexDiv width="10%">
          <Text color="gray">
            {parseDate(data[getFullPropertyName(data, "Date")])}
          </Text>
        </S.FlexDiv>

        {/* <S.FlexDiv width="10%" center>
          <Btn
            fontSize="0.9rem"
            handleClick={() => setIsEditModalOpened(true)}
            type="reviews"
          >
            수정
          </Btn>
        </S.FlexDiv> */}

        <S.FlexDiv width="10%" center>
          {data.comment ? (
            <Text color="var(--reviews-color)" size="1rem" weight="bold">
              답변
            </Text>
          ) : (
            <Text size="1rem" weight="bold" color="gray">
              미답변
            </Text>
          )}
        </S.FlexDiv>
      </S.LowerRowWrapper>

      {/* 모달 */}
      <Modal
        size="60%"
        centered
        opened={isEditModalOpened}
        onClose={() => setIsEditModalOpened(false)}
      >
        <CommunityQnAQuestionModalContent
          type="reviews"
          star={data.reviewStar}
          handleSubmit={() => handleApiUpdateCurReview(data)}
          setStar={setStar}
          title={data.title}
          setTitle={setTitle}
          content={data.content}
          setContent={setContent}
        />
      </Modal>
    </S.Wrapper>
  );
};

export default MypageReviewsPostDiv;
