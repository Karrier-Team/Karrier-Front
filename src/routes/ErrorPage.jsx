import React, { useEffect, memo } from "react";

function TestPage() {
  useEffect(() => {
    console.log("This is error Page");
  }, []);

  return (
    <>
      <h1>This is Error Page</h1>
    </>
  );
}

export default memo(TestPage);
