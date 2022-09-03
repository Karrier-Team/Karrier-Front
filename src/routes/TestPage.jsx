import React, { memo } from "react";
import axios from "axios";
import config from "../configs";

const handleClick = async (e) => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/mentors/manage/basic`,
    // auth 설정은 Request Header애 Authorization을 자동으로 base64 인코딩하여 삽입해준다.
    auth: {
      username: "test@test.com",
      password: "qwer1234!",
    },
  };

  axios(axiosConfig)
    .then((response) => {
      console.log("result: ", response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

function TestPage() {
  return (
    <>
      <button onClick={handleClick}>API 테스트</button>
    </>
  );
}

export default memo(TestPage);
