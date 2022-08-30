import styled from "styled-components";
import React, { useState, useRef, useCallback } from "react";

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

const InputTag = ({
  inputValue,
  tagList,
  tagPlaceholder,
  placeholder,
  height,
  btnSize,
  padding,
  handleChange,
  handleInsert,
  handleDelete,
}) => {
  return (
    <Wrapper>
      <StyledDiv>
        <div style={{ width: "85%" }}>
          <Input
            value={inputValue || ""}
            handleChange={handleChange}
            height={height}
            placeholder={placeholder}
            padding={padding}
          />
        </div>
        <StyledBtnDiv>
          <Btn
            children={"추가"}
            handleClick={handleInsert}
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
          placeholder={tagPlaceholder}
          contentEditable={false}
          tagList={tagList}
          handleDelete={handleDelete}
        />
      </div>
    </Wrapper>
  );
};
InputTag.defaultProps = {
  data: {},
};
export default React.memo(InputTag);
