import * as S from "./style";
import { TextInput, Textarea, Text, Space } from "@mantine/core";
import Btn from "../../components/atoms/Btn";
import { getColorByType } from "../../utils";
import StarRating from "../../components/molecules/StarRating";

const CommunityQnAQuestionModalContent = ({
  type,
  setStars,
  title,
  setTitle,
  content,
  setContent,
  handleSubmit,
}) => {
  return (
    <>
      <S.ColWrapper>
        <Text color={getColorByType(type)} weight="bold" size="xl">
          {/* useContext를 이용해서 로그인한  유저의 정보를 빼와야함*/}
          {"소식돼지님"}
        </Text>
        <Space h="xs"></Space>
        {type === "reviews" ? (
          <div style={{ display: "flex" }}>
            <Text weight="bold" size="1.5rem">
              별점 :{" "}
            </Text>
            <StarRating star="0" setStars={setStars}></StarRating>
          </div>
        ) : null}
        <TextInput
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          style={{ width: "100%" }}
          placeholder="제목을 입력해주세요."
        />
        <Space h="xs"></Space>
        <Textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          style={{ width: "100%" }}
          minRows={10}
          maxRows={20}
          placeholder="내용을 입력해주세요."
        />
      </S.ColWrapper>
      <S.RowWrapper>
        <Btn type={type} handleClick={handleSubmit} withAlert>
          작성완료
        </Btn>
      </S.RowWrapper>
    </>
  );
};

export default CommunityQnAQuestionModalContent;
