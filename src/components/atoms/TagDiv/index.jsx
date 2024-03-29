import * as S from "./style";
import React from "react";

import TagItem from "../../atoms/TagItem/index";

const TagDiv = ({
  tagList,
  contentEditable,
  centercontent,
  fontsize,
  padding,
  placeholder,
  handleDelete,
}) => {
  return (
    <S.TagDiv
      placeholder={placeholder}
      contentEditable={contentEditable}
      fontsize={fontsize}
      centercontent={centercontent}
      padding={padding}
    >
      {tagList.length > 0
        ? tagList.map((item) => (
            <TagItem
              value={item.data}
              id={item.id}
              onClick={() => handleDelete(item.id)}
            />
          ))
        : null}
    </S.TagDiv>
  );
};

export default React.memo(TagDiv);
