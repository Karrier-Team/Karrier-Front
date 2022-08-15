import React, { useState } from "react";
import * as S from "./style";

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
