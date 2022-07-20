import React, { useEffect, memo } from "react";

function TestPage() {
  useEffect(() => {
    console.log("This is Test Page");
  }, []);

  return (
    <>
      <h1>This is Test Page</h1>
    </>
  );
}

export default memo(TestPage);
