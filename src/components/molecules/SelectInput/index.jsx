import React from "react";
import { Select } from "@mantine/core";

const SelectInput = ({ label, placeholder, option, handleChange, width }) => {
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
      data={option}
      size={"md"}
      style={{ width: `${width}` }}
      radius={"10px"}
      onChange={handleChange}
    />
  );
};
export default React.memo(SelectInput);
