import Adbar from "../../common/Adbar";
import * as S from "./style";

const CommunityNavbar = ({ isAdVisible = true, type, children }) => {
  return (
    <>
      <Adbar visible={isAdVisible}></Adbar>
      <S.SubHeader type={type}>{children}</S.SubHeader>
    </>
  );
};

export default CommunityNavbar;
