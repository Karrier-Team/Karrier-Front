import qs from "qs";
import axios from "axios";
import config from "../configs";

export const apiPostLoginUser = async ({ email, password }) => {
  const axiosConfig = {
    method: "post",
    url: `${config.baseURL}/members/login`,
    headers: {},
    data: qs.stringify({
      email,
      password,
    }),
  };
  try {
    const response = await axios(axiosConfig);
    return [response.data.body, response.status];
  } catch (error) {
    const errorResponse = error.response.data;
    return [errorResponse.message, errorResponse.status];
  }
};

export const apiPostSignupUser = async ({
  email,
  password,
  passwordCheck,
  nickname,
}) => {
  const axiosConfig = {
    method: "post",
    url: `${config.baseURL}/members/new`,
    headers: {},
    data: qs.stringify({
      email,
      password,
      passwordCheck,
      nickname,
    }),
  };
  try {
    const response = await axios(axiosConfig);
    return [response.data.body, response.status];
  } catch (error) {
    const errorResponse = error.response.data;
    return [errorResponse.message, errorResponse.status];
  }
};

export const apiGetLogoutUser = async ({ email, password }) => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/members/logout`,
    headers: {},
    auth: {
      username: email,
      password: password,
    },
  };
  try {
    const response = await axios(axiosConfig);
    return [response.data.body, response.status];
  } catch (error) {
    const errorResponse = error.response.data;
    return [errorResponse.message, errorResponse.status];
  }
};
