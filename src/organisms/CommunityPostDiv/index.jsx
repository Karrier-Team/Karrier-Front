import * as S from "./style";
import { useState, useRef } from "react";
import { Text, Space } from "@mantine/core";
import CircleWithText from "../../components/molecules/CircleWithText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { parseDate } from "../../utils";
import { Navigate, useNavigate } from "react-router-dom";

const getColorByType = (type) => {
  switch (type) {
    case "qna":
      return "var(--primary-color)";
    case "reviews":
      return "var(--reviews-color)";
    case "notice":
      return "var(--nocie-color)";
    case "wishlist":
      return "var(--wishlist-color)";
    case "programs":
      return "var(--programs-color)";
    case "followers":
      return "var(--followers-color)";
    default:
      return "var(--primary-color)";
  }
};

function getFullPropertyName(object, str) {
  const arr = Object.keys(object);
  const idx = arr.findIndex((key) => key.includes(str));
  return arr[idx];
}

const CommunityPostDiv = ({ type, data }) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const textRef = useRef();

  return (
    <S.Wrapper>
      <S.RowWrapper>
        <S.ColWrapper clicked={clicked}>
          <Text
            style={{ cursor: "pointer" }}
            weight="600"
            size="1.5em"
            onClick={() => navigate(`./question/${data.questionNo}`)}
          >
            {data.title}
          </Text>
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
            upper={data[getFullPropertyName(data, "Like")]}
            lower={"좋아요"}
          />
        </S.ColWrapperCntr>
      </S.RowWrapper>
      <S.LowerRowWrapper>
        <div style={{ display: "flex", width: "80%" }}>
          <Text color={"gray"}>{data.nickname}</Text>
        </div>
        <div style={{ display: "flex", width: "10%" }}>
          <Text color="gray">
            {parseDate(data[getFullPropertyName(data, "Date")])}
          </Text>
        </div>
        <div
          style={{ display: "flex", width: "10%", justifyContent: "center" }}
        >
          <Text
            color={data.solve || data.comment ? getColorByType(type) : "black"}
          >
            {data.solve || data.comment
              ? type === "reviews"
                ? "답변"
                : "해결"
              : type === "reviews"
              ? "미답변"
              : "미해결"}
          </Text>
        </div>
      </S.LowerRowWrapper>
    </S.Wrapper>
  );
};

export default CommunityPostDiv;
