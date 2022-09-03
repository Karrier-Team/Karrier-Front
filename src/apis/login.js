import qs from "qs";
import axios from "axios";
import config from "../configs";

export const userLogin = async (email, password) => {
  const axiosConfig = {
    method: "post",
    url: `${config.baseURL}/members/login`,
    headers: {},
    data: qs.stringify({
      email: email,
      password: password,
    }),
  };
  try {
    const response = await axios(axiosConfig);
    return [response.data, response.status];
  } catch (error) {
    return [null, 401];
  }
};
