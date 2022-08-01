import styled from "styled-components";
// component
import ProfileList from "../components/Profile/ProfileList";
import Major from "../components/Major";

// styled-components
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const MajorPage = () => {
  return (
    <Wrapper>
      <Major />
      <ProfileList />
    </Wrapper>
  );
};
export default MajorPage;
