import React, { useEffect } from "react";
import { useLocalStorage } from "@mantine/hooks";
import * as S from "./style";

function Textarea({
  storage: storage_key,
  value,
  handleChange,
  placeholder,
  height,
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
    <S.Textarea
      value={value}
      height={height}
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
    ></S.Textarea>
  );
}

export default Textarea;
