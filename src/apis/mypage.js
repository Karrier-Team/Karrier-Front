import qs from "qs";
import axios from "axios";
import config from "../configs";

export const apiPostSolveQuestion = async ({ programNo, questionNo }) => {
  const axiosConfig = {
    method: "put",
    url: `${config.baseURL}/my-page/manage/question/solve`,
    headers: {},
    auth: {
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
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

export const apiUpdateCurQuestion = async ({
  programNo,
  questionNo,
  title,
  content,
}) => {
  const axiosConfig = {
    method: "put",
    url: `${config.baseURL}/community/question`,
    headers: {},
    auth: {
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
    },
    data: qs.stringify({
      title: title,
      content: content,
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
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
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
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
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

export const apiUpdateCurReview = async ({
  programNo,
  reviewNo,
  star,
  title,
  content,
}) => {
  const axiosConfig = {
    method: "put",
    url: `${config.baseURL}/community/review`,
    headers: {},
    auth: {
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
    },
    data: qs.stringify({
      programNo,
      reviewNo,
      star,
      title,
      content,
    }),
  };
  try {
    const response = await axios(axiosConfig);
    return [response.data, response.status];
  } catch (error) {
    return [error.message, error.response.status];
  }
};

export const apiGetMypageReviewPage = async () => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/my-page/manage/review`,
    headers: {},
    auth: {
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
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

export const apiGetMypageQnaPage = async () => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/my-page/manage/question`,
    headers: {},
    auth: {
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
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

export const apiGetMypageFollowingPage = async () => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/my-page/manage/followings`,
    headers: {},
    auth: {
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
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

export const apiGetMypageEnrolledPrograms = async () => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/programs/major`,
    headers: {},
    auth: {
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
    },
    params: {
      major: "컴퓨터학부",
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
