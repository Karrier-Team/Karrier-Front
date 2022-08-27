import styled from "styled-components";

//component
import Input from "../../atoms/Input/index";
import Btn from "../../atoms/Btn/index";
import TagDiv from "../../atoms/TagDiv/index";

const Wrapper = styled.div``;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.3%;
`;
const StyledBtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTagWrapper = styled.div`
  margin: 0 0.4em;
  padding: 0.4em;

  border-radius: 9px;

  font-weight: bold;

  color: darkslategray;
  background-color: ${(props) => props.backgroundColor};

  text-align: center;
`;

const randomColor = [
  "#f6c9cc",
  "#a8c0c0",
  "#FEBF36",
  "#FF7238",
  "#acc7bf",
  "#c37070",
  "#eae160",
  "#bf7aa3",
  "#d7d967",
  "#ccccee",
  "#e5ddff",
  "#ffddf6",
  "#eeccd4",
  "#FC9EBD",
  "#CCD1FF",
  "#FFDDA6",
  "#B8F3B8",
];

const TagItem = ({ value, onClick }) => {
  return (
    <StyledTagWrapper
      backgroundColor={
        randomColor[Math.floor(Math.random() * randomColor.length)]
      }
    >
      {value}
      <span
        onClick={onClick}
        style={{ color: "gray", marginLeft: "1em", textAlign: "center" }}
      >
        X
      </span>
    </StyledTagWrapper>
  );
};

const dummyData = [
  "#컴퓨터공학과",
  "#예비 개발자",
  "#코딩 테스트",
  "#컴퓨터공학과",
  "#컴퓨터공학과",
  "#예비 개발자",

  "#코딩 테스트",
  "#컴퓨터공학과",
  "#코딩 테스트",
  "#컴퓨터공학과",
];

const InputTag = ({
  value,
  handleInsert,
  handleDelete,
  placeholder,
  height,
  btnSize,
  padding,
}) => {
  return (
    <Wrapper>
      <StyledDiv>
        <div style={{ width: "85%" }}>
          <Input
            value={value}
            handleChange={() => {}}
            height={height}
            placeholder={placeholder}
            padding={padding}
          />
        </div>
        <StyledBtnDiv>
          <Btn
            children={"추가"}
            onClick={handleInsert}
            color={"white"}
            backgroundColor={"#007bc3"}
            height={height} //height
            size={btnSize} //width
          />
        </StyledBtnDiv>
      </StyledDiv>
      <span
        style={{
          fontSize: "1em",
          color: "red",
          fontWeight: "bold",
        }}
      >
        * 최대 10개까지 가능합니다.
      </span>
      {/* Tag List */}
      <div style={{ marginTop: "3%" }}>
        <TagDiv
          padding={"0.3em"}
          children={dummyData.map((item, idx) => (
            <TagItem value={item} index={idx} onClick={handleDelete} />
          ))}
        />
      </div>
    </Wrapper>
  );
};
export default InputTag;
