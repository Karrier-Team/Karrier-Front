import * as S from "./style";
import { useState } from "react";
import { Text, Space, Modal } from "@mantine/core";
import CircleWithText from "../../components/molecules/CircleWithText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { getColorByType, getFullPropertyName, parseDate } from "../../utils";
import Btn from "../../components/atoms/Btn";

import { apiPostSolveQuestion, apiUpdateCurQuestion } from "../../apis/mypage";
import CommunityQnAQuestionModalContent from "../CommunityQnAQuestionModalContent";

const MypageQnaPostDiv = ({ type, data, setTitle, setContent }) => {
  const [clicked, setClicked] = useState(false);
  const [isSolveModalOpened, setIsSolveModalOpened] = useState(false);
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);

  const handleSolveQuestion = async (data) => {
    const apiData = { programNo: data.programNo, questionNo: data.questionNo };
    const [result, status] = await apiPostSolveQuestion(apiData);
    if (status === 200 || status === 201) {
      alert("성공");
    } else {
      alert(result);
    }
  };

  const handleApiUpdateCurQuestion = async (data) => {
    const apiData = {
      programNo: data.programNo,
      questionNo: data.questionNo,
      title: data.title,
      content: data.content,
    };
    const [result, status] = await apiUpdateCurQuestion(apiData);
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
          <Text size="2em">{data.title}</Text>
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
        <S.FlexDiv width="70%">
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

        <S.FlexDiv width="10%" center>
          <Btn
            handleClick={() => setIsEditModalOpened(true)}
            fontSize="0.9rem"
            to=""
            disabled={data.solve && true}
          >
            수정
          </Btn>
        </S.FlexDiv>

        <S.FlexDiv width="10%" center>
          {data.solve ? (
            <Btn disabled fontSize="0.9rem" to="">
              해결완료
            </Btn>
          ) : (
            <Btn
              fontSize="0.9rem"
              handleClick={() => setIsSolveModalOpened(true)}
            >
              해결
            </Btn>
          )}
        </S.FlexDiv>
      </S.LowerRowWrapper>

      {/* 모달1. 질문 해결 모달 */}
      <Modal
        size="40%"
        centered
        opened={isSolveModalOpened}
        onClose={() => setIsSolveModalOpened(false)}
      >
        <S.CenterWrapper>
          <S.H1>질문이 해결되셨습니까?</S.H1>
          <div>
            <S.Button onClick={() => handleSolveQuestion(data)} type="yes">
              예
            </S.Button>
            <S.Button onClick={() => setIsSolveModalOpened(false)} type="no">
              아니오
            </S.Button>
          </div>
        </S.CenterWrapper>
      </Modal>

      {/* 모달2. 질문 수정 모달 */}
      <Modal
        size="60%"
        centered
        opened={isEditModalOpened}
        onClose={() => setIsEditModalOpened(false)}
      >
        <CommunityQnAQuestionModalContent
          // /community/question
          handleSubmit={() => handleApiUpdateCurQuestion(data)}
          title={data.title}
          setTitle={setTitle}
          content={data.content}
          setContent={setContent}
        />
      </Modal>
    </S.Wrapper>
  );
};

export default MypageQnaPostDiv;
