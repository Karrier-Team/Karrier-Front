import React from "react";
import styled from "styled-components";

const MajorInfoBar = ({ college, major }) => {
  return (
    <div
      className="MajorInfoBar"
      style={{ height: 91, backgroundColor: "red" }}
    >
      <span>{college}</span>
      &#62;
      <span>{major}</span>
    </div>
  );
};

export default React.memo(MajorInfoBar);
