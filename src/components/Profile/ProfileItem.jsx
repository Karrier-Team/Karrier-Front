import React, { useState } from "react";

const ProfileItem = ({ name, major }) => {
  // state
  const [state, setState] = useState({
    name: "이승열",
    major: "컴퓨터통신공학과",
    comment:
      "안녕하세요 컴퓨터 공학을 전공하여 멘토를 맡게 된 이승열 입니다 잘 부탁 드립니다",
  });
  const [hover, setHover] = useState(true);

  const handleMouseEnter = (e) => {
    //e.target.style.background = "grey";
    setHover(false);
  };

  const handleMouseLeave = (e) => {
    //e.target.style.background = "yellowgreen";
    setHover(true);
  };

  return (
    <div
      className="ProfileItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hover ? (
        <div className="ProfileItem__info">
          <span className="ProfileItem--img"></span>
          <span className="ProfileItem--name">{state.name}</span>
          <span className="ProfileItem--major">{state.major}</span>
        </div>
      ) : (
        <div className="ProfilItem__content">
          <p className="ProfileItem__comment">{state.comment}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileItem;
