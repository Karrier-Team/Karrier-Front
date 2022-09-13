import React, { useState } from "react";
import * as S from "./style";

function Selector({ type, name, width, handleChange, options }) {
  const [selected, setSelected] = useState(false);
  return (
    <S.Selector
      type={type}
      width={width}
      onChange={(e) => {
        handleChange(parseInt(e.target.value));
        setSelected(true);
      }}
      selected={selected}
    >
      <option disabled selected value="">
        {name + "을 입력해주세요."}
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </S.Selector>
  );
}

export default Selector;
