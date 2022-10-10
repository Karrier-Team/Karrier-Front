import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Img from "../../atoms/Img";
import * as S from "./style";

//images
import DefaultProgramImage1 from "../../../images/DefaultProgramImage1.png";
import DefaultProgramImage2 from "../../../images/DefaultProgramImage2.png";
import DefaultProgramImage3 from "../../../images/DefaultProgramImage3.png";
import DefaultProgramImage4 from "../../../images/DefaultProgramImage4.png";
import DefaultProfileImg from "../../../images/DefaultProfileImg.png";
import { parseNthPath } from "../../../utils";

const IMAGES = [
  DefaultProgramImage1,
  DefaultProgramImage2,
  DefaultProgramImage3,
  DefaultProgramImage4,
];

//ProfileItem div
const ProfileItem = ({
  mainImage,
  programNo,
  title,
  likeCount,
  profileImage,
  name,
  major,
}) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const firstPath = parseNthPath(pathname, 1);
  const secondPath = parseNthPath(pathname, 2);

  const onClickNavigatePath = () => {
    let address;
    switch (firstPath) {
      case "mentoring":
        address = `/mentoring/${programNo}`;
        break;
      case "community":
        switch (secondPath) {
          case "qna":
            address = `/community/qna/${programNo}`;
            break;
          case "reviews":
            address = `/community/reviews/${programNo}`;
            break;
          default:
            address = `/community/qna/${programNo}`;
            break;
        }
        break;
      default:
        address = `/mentoring/${programNo}`;
        break;
    }
    return () => navigate(address, { state: { title: title } });
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <S.StyledProfileItem
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      bgimg={mainImage || IMAGES[programNo % 4]}
      onClick={onClickNavigatePath()}
    >
      {hover ? (
        <S.RowWrapper>
          <S.Text size="1.5vw">{title}</S.Text>
          <S.Text>{"❤️ " + likeCount}</S.Text>
        </S.RowWrapper>
      ) : (
        <div></div>
      )}
      <S.RowWrapper>
        <Img src={profileImage || DefaultProfileImg} size="3rem"></Img>
        <S.Text size="1.3vw">{name}</S.Text>
        <S.Text size="1vw">{major}</S.Text>
      </S.RowWrapper>
    </S.StyledProfileItem>
  );
};

export default React.memo(ProfileItem);
