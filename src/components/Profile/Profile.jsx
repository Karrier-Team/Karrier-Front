import React, { useState } from "react";
import "./Profile.css";

const Profile = ({ name, major }) => {
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
      className="Profile"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hover ? (
        <div className="Profile__info">
          <span className="Profile--img"></span>
          <span className="Profile--name">{state.name}</span>
          <span className="Profile--major">{state.major}</span>
        </div>
      ) : (
        <div className="Profile__content">
          <p className="Profile__comment">{state.comment}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
