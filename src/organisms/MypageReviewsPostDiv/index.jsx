import * as S from "./style";
import { useState } from "react";
import { Text, Space, Modal } from "@mantine/core";
import CircleWithText from "../../components/molecules/CircleWithText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { getColorByType, getFullPropertyName, parseDate } from "../../utils";
import Btn from "../../components/atoms/Btn";

// import { apiPostSolveQuestion } from "../../apis/mypage";

const MypageReviewsPostDiv = ({ type, data }) => {
  const [clicked, setClicked] = useState(false);
  // const [isSolveModalOpened, setIsSolveModalOpened] = useState(false);
  // const apiData = { programNo: data.programNo, reviewNo: data.reviewNo };

  // const handleSolveQuestion = async (apiData) => {
  //   const [result, status] = await apiPostSolveQuestion(apiData);
  //   if (status === 200 || status === 201) {
  //     alert("성공");
  //   } else {
  //     alert(result);
  //   }
  // };

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
        <div style={{ display: "flex", width: "80%" }}>
          <Text color={"gray"}>{data.nickname}</Text>
          <Space w="xl"></Space>
          {!type || type === "qna" ? (
            <Text color={data.solve ? getColorByType(type) : "gray"}>
              {"답변"}
            </Text>
          ) : null}
        </div>

        <div style={{ display: "flex", width: "10%" }}>
          <Text color="gray">
            {parseDate(data[getFullPropertyName(data, "Date")])}
          </Text>
        </div>

        <div
          style={{ display: "flex", width: "10%", justifyContent: "center" }}
        >
          {data.comment ? (
            <Text color="var(--reviews-color)" size="1rem" weight="bold">
              답변
            </Text>
          ) : (
            <Text size="1rem" weight="bold" color="gray">
              미답변
            </Text>
          )}
        </div>
      </S.LowerRowWrapper>

      {/* 모달모음! */}
      {/* <Modal
        size="40%"
        centered
        opened={isSolveModalOpened}
        onClose={() => setIsSolveModalOpened(false)}
      >
        <S.CenterWrapper>
          <S.H1>질문이 해결되셨습니까?</S.H1>
          <div>
            <S.Button onClick={() => handleSolveQuestion(apiData)} type="yes">
              예
            </S.Button>
            <S.Button onClick={() => setIsSolveModalOpened(false)} type="no">
              아니오
            </S.Button>
          </div>
        </S.CenterWrapper>
      </Modal> */}
    </S.Wrapper>
  );
};

export default MypageReviewsPostDiv;
