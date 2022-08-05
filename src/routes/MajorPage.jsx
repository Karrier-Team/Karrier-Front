import styled from "styled-components";

import MajorInfoBar from "../components/Major/MajorInfoBar";
import MajorInfo from "../components/Major/MajorInfo";
import ProfileList from "../components/Profile/ProfileList";

const MajorPage = () => {
  const dummyProps = {
    college: "IT대학",
    major: "컴퓨터학부",
  };
  return (
    <>
      {/* <nav></nav> */}
      <MajorInfoBar college={dummyProps.college} major={dummyProps.major} />
      <MajorInfo college={dummyProps.college} major={dummyProps.major} />
      <ProfileList />
      {/* footer */}
    </>
  );
};
export default MajorPage;
