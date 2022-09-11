import * as S from "./style";
import { useState, useRef } from "react";
import { Text, Space } from "@mantine/core";
import CircleWithText from "../../components/molecules/CircleWithText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { parseDate } from "../../utils";

function getFullPropertyName(object, str) {
  const arr = Object.keys(object);
  const idx = arr.findIndex((key) => key.includes(str));
  return arr[idx];
}

const MentorReviewsPostDiv = ({ type, data }) => {
  const [clicked, setClicked] = useState(false);

  const textRef = useRef();

  return (
    <S.Wrapper>
      <S.RowWrapper>
        <S.ColWrapper clicked={clicked}>
          <S.StyledLink
            color="black"
            to={`/community/reviews/${data.programNo}/review/${data.reviewNo}`}
          >
            <Text size="1.7em">{data.title}</Text>
          </S.StyledLink>
          <Space h="xs"></Space>
          <Text
            ref={textRef}
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
            upper={data.reviewLikeNo}
            lower={"좋아요"}
          />
        </S.ColWrapperCntr>
      </S.RowWrapper>
      <S.LowerRowWrapper>
        <div style={{ display: "flex", width: "8%" }}>
          <Text color={"gray"}>{data.nickname}</Text>
        </div>
        <div style={{ display: "flex", width: "72%" }}>
          {data.solve ? (
            <Text weight="bold" color={"gray"}>
              답변완료
            </Text>
          ) : (
            <S.StyledLink
              to={`/community/reviews/${data.programNo}/review/${data.reviewNo}`}
            >
              <Text>답변하기</Text>
            </S.StyledLink>
          )}
        </div>
        <div style={{ display: "flex", width: "10%" }}>
          <Text color="gray">
            {parseDate(data[getFullPropertyName(data, "Date")])}
          </Text>
        </div>
        <div
          style={{ display: "flex", width: "10%", justifyContent: "center" }}
        >
          <Text color={data.comment ? "var(--reviews-color)" : "black"}>
            {data.comment ? "답변" : "미답변"}
          </Text>
        </div>
      </S.LowerRowWrapper>
    </S.Wrapper>
  );
};

export default MentorReviewsPostDiv;
