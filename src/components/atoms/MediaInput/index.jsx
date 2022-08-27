import styled from "styled-components";

//components
import Input from "../Input/index";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MediaInput = ({
  value,
  fileName,
  handleChange,
  placeholder,
  height,
  width,
}) => {
  return (
    <Wrapper>
      <div style={{ marginRight: "3%" }}>
        <img
          style={{
            height: height,
            borderRadius: "1em",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          src={require(`../../../images/${fileName}`)}
        />
      </div>

      <Input
        value={value}
        placeholder={placeholder}
        handleChange={handleChange}
        height={height}
      />
    </Wrapper>
  );
};
export default MediaInput;
