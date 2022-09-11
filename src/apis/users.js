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
