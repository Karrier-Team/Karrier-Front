import React, { useState } from "react";
import * as S from "./style";

// TODO: Selector도 localStorage에 저장되어있으면 selected 설정을 해줘야함
function Selector({ name, handleChange, options }) {
  const [selected, setSelected] = useState(false);

  return (
    <S.Selector
      onChange={(e) => {
        handleChange(e.target.value);
        setSelected(true);
      }}
      selected={selected}
    >
      <option disabled selected value="">
        {name + "을 입력해주세요."}
      </option>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </S.Selector>
  );
}

export default Selector;
