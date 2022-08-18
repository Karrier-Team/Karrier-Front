import React, { useEffect } from "react";
import { useLocalStorage } from "@mantine/hooks";
import * as S from "./style";

function Input({
  storage: storage_key,
  value,
  handleChange,
  placeholder,
  required,
}) {
  const [storage] = useLocalStorage({
    key: "mentor_apply_info",
  });

  useEffect(() => {
    if (storage === undefined) return;
    handleChange(storage[storage_key]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Input
      required={required}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
    ></S.Input>
  );
}

export default Input;
