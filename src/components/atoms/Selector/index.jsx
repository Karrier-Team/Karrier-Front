import React, { useState } from "react";
import * as S from "./style";

function Selector({ type, name, width, handleChange, options }) {
  const [selected, setSelected] = useState(false);
  return (
    <S.Selector
      type={type}
      width={width}
      onChange={(e) => {
        handleChange(e.target.id);
        setSelected(true);
      }}
      selected={selected}
    >
      <option disabled selected value="">
        {name + "을 입력해주세요."}
      </option>
      {options.map((option) => (
        <option id={option.id} key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </S.Selector>
  );
}

export default Selector;
