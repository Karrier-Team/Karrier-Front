import * as S from "./style";
import { TextInput, Textarea, Text, Space } from "@mantine/core";
import Btn from "../../components/atoms/Btn";

const CommunityQnAQuestionModalContent = ({
  title,
  setTitle,
  content,
  setContent,
}) => {
  return (
    <>
      <S.ColWrapper>
        <Text style={{}} color="var(--primary-color)" weight="bold" size="xl">
          {/* useContext를 이용해서 로그인한  유저의 정보를 빼와야함*/}
          {"소식돼지님"}
        </Text>
        <Space h="xs"></Space>
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
        <Btn data={null} handleClick={null} withAlert>
          작성완료
        </Btn>
      </S.RowWrapper>
    </>
  );
};

export default CommunityQnAQuestionModalContent;
