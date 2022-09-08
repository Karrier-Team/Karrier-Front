import qs from "qs";
import axios from "axios";
import config from "../configs";

export const apiPostSolveQuestion = async ({ programNo, questionNo }) => {
  const axiosConfig = {
    method: "post",
    url: `${config.baseURL}/my-page/manage/question/solve`,
    headers: {},
    auth: {
      username: "test2@test.com",
      password: "qwer1234!",
    },
    data: qs.stringify({
      programNo: programNo,
      questionNo: questionNo,
    }),
  };
  try {
    const response = await axios(axiosConfig);
    return [response.data, response.status];
  } catch (error) {
    return [error.message, error.response.status];
  }
};

export const apiPostNewQuestion = async ({ curProgramNo, title, content }) => {
  const axiosConfig = {
    method: "post",
    url: `${config.baseURL}/community/question/new`,
    headers: {},
    auth: {
      username: "test2@test.com",
      password: "qwer1234!",
    },
    data: qs.stringify({
      programNo: curProgramNo,
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

export const apiPostNewReview = async ({
  curProgramNo,
  star,
  title,
  content,
}) => {
  const axiosConfig = {
    method: "post",
    url: `${config.baseURL}/community/review/new`,
    headers: {},
    auth: {
      username: "test2@test.com",
      password: "qwer1234!",
    },
    data: qs.stringify({
      programNo: curProgramNo,
      star: star,
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
