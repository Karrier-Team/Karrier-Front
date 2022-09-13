import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../atoms/Img";
import * as S from "./style";

//images
import DefaultProgramImage1 from "../../../images/DefaultProgramImage1.png";
import DefaultProgramImage2 from "../../../images/DefaultProgramImage2.png";
import DefaultProgramImage3 from "../../../images/DefaultProgramImage3.png";
import DefaultProgramImage4 from "../../../images/DefaultProgramImage4.png";
import DefaultProfileImg from "../../../images/DefaultProfileImg.png";

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
      onClick={() => navigate(`/mentoring/${programNo}`)}
    >
      {hover ? (
        <S.RowWrapper>
          <S.Text size="1.3rem">{title}</S.Text>
          <S.Text>{"❤️ " + likeCount}</S.Text>
        </S.RowWrapper>
      ) : (
        <div></div>
      )}
      <S.RowWrapper>
        <Img src={profileImage || DefaultProfileImg} size="3rem"></Img>
        <S.Text size="1.3rem">{name}</S.Text>
        <S.Text>{major}</S.Text>
      </S.RowWrapper>
    </S.StyledProfileItem>
  );
};

export default React.memo(ProfileItem);
