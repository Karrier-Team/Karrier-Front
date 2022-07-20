import React, { useEffect, memo } from "react";

function LandingPage() {
  useEffect(() => {
    console.log("This is Landing Page");
  }, []);

  return (
    <>
      <h1>This is Test Page</h1>
    </>
  );
}

export default memo(LandingPage);
