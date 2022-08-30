import Adbar from "../../common/Adbar";
import * as S from "./style";

const CommunityNavbar = ({ isAdVisible, type, children }) => {
  return (
    <>
      <Adbar type={type} isAdVisible={isAdVisible}></Adbar>
      <S.SubHeader type={type}>{children}</S.SubHeader>
    </>
  );
};

export default CommunityNavbar;
