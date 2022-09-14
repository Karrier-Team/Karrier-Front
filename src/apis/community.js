import qs from "qs";
import axios from "axios";
import config from "../configs";

export const apiGetCommunityQnaProgramPage = async ({ programNo }) => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/community/question`,
    headers: {},
    auth: {
      username: "mentee@karrier.com",
      password: "qwer1234!",
    },
    params: {
      programNo,
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

export const apiPostNewQuestion = async ({ programNo, title, content }) => {
  const axiosConfig = {
    method: "post",
    url: `${config.baseURL}/community/question/new`,
    headers: {},
    auth: {
      username: "mentee@karrier.com",
      password: "qwer1234!",
    },
    data: qs.stringify({
      programNo: programNo,
      title: title,
      content: content,
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
