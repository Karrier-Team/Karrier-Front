import React from "react";
import { Select } from "@mantine/core";

const SelectInput = ({ label, placeholder, data, handleChange }) => {
  //해당 label, placehoder, data 입력하면 됨
  //data는 list로

  //   const label = "test";
  //   const placeholder = "test";
  //   const data = Array(50)
  //     .fill(0)
  //     .map((_, index) => `Item ${index}`);

  return (
    <Select
      label={label}
      placeholder={placeholder}
      searchable
      nothingFound="No options"
      maxDropdownHeight={280}
      data={data}
      size={"md"}
      style={{ width: "24.4792vw" }}
      radius={"10px"}
      onChange={handleChange}
    />
  );
};
export default React.memo(SelectInput);
