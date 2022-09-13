import Img from "../../atoms/Img";
import Btn from "../../atoms/Btn";
import * as S from "./style";

import DefaultProfileImg from "../../../images/DefaultProfileImg.png";

const UserProfileWithText = ({
  src,
  maintxt,
  subtxt,
  isUnsubscribeActive,
  btntxt,
  btnOnclick,
}) => {
  return (
    <S.Wrapper>
      <Img src={src || DefaultProfileImg} size={"80%"} />
      {/* Text */}
      <S.RowWrapper>
        <S.Maintxt>
          {maintxt + " "}
          <S.Subtxt>{subtxt}</S.Subtxt>
        </S.Maintxt>
        {isUnsubscribeActive && (
          <Btn
            backgroundColor="var(--bg-color-l)"
            color="var(--followers-color)"
            handleClick={btnOnclick}
          >
            {btntxt}
          </Btn>
        )}
      </S.RowWrapper>
    </S.Wrapper>
  );
};

export default UserProfileWithText;
