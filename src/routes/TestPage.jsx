import React, { useEffect, memo } from "react";

import SelectInput from "../components/molecules/SelectInput";

function TestPage() {
  useEffect(() => {
    console.log("This is Test Page");
  }, []);

  const label = "label";
  const placeholder = "hihi";
  const data = ["1", "2", "3", "4"];

  return (
    <>
      <h1>This is Test Page</h1>
      <SelectInput label={label} placeholder={placeholder} data={data} />
    </>
  );
}

export default memo(TestPage);
