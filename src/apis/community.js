import qs from "qs";
import axios from "axios";
import config from "../configs";

export const apiGetCommunityQnaProgramPage = async ({ programNo }) => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/community/question`,
    headers: {},
    auth: {
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
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
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
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

export const apiGetCommunityQuestionPage = async ({
  programNo,
  questionNo,
}) => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/community/question/detail`,
    headers: {},
    auth: {
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
    },
    params: {
      programNo,
      questionNo,
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
