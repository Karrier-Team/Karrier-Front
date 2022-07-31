import React, { useEffect, memo } from "react";

function MentorPage() {
  useEffect(() => {
    console.log("This is Mentor Page");
  }, []);

  return (
    <>
      <h1>This is Mentor Page</h1>
    </>
  );
}

export default memo(MentorPage);
