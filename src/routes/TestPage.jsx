import React, { memo } from "react";
import axios from "axios";
import config from "../configs";
import qs from "qs";

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

const handleLogin = async (e) => {
  var config = {
    method: "post",
    url: "http://3.38.34.99:8080/members/login",
    headers: {
      // Content-Type은 default로 application/x-www-form-urlencoded 이다.
    },
    // qs.stringify 대신 JSON.stringify 했으면 에러가난다. 직렬화하는방식이 다르다는걸 인지하자!
    // 왜 querystring의 약자인지도 잘 모르겠다.
    data: qs.stringify({
      email: "test@test.com",
      password: "qwer1234!",
    }),
  };

  axios(config)
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
      <button onClick={handleLogin}>로그인</button>
    </>
  );
}

export default memo(TestPage);
