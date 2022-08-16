import React, { useEffect } from "react";
import { useLocalStorage } from "@mantine/hooks";
import * as S from "./style";

function Textarea({ storage: storage_key, value, handleChange, placeholder }) {
  const [storage] = useLocalStorage({
    key: "detailed_information",
  });

  useEffect(() => {
    if (storage === undefined) return;
    handleChange(storage[storage_key]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Textarea
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
    ></S.Textarea>
  );
}

export default Textarea;
