import qs from "qs";
import axios from "axios";
import config from "../configs";

export const apiGetMentoringApplySuccess = async ({ programNo }) => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/programs/participate-complete`,
    headers: {},
    auth: {
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
    },
    params: {
      programNo,
    },
  };

  const dummy = {
    title: "4444",
    mentorName: "김민수",
    type: "전공소개",
    openDate: "2022년 9월 26일(월)",
    closeDate: "2022년 10월 7일(금)",
    runningTime: "화, 목 오전 10시 ~12시 / 금 오후 2시 ~ 4시",
    onlineOffline: true,
  };

  try {
    const response = await axios(axiosConfig);
    return [response.data.body, response.status];
  } catch (error) {
    const errorResponse = error.response.data;
    return [errorResponse.message, errorResponse.status];
  }
};

export const apiGetMentoringPrograms = async ({ major }) => {
  if (major === "컴퓨터공학과") major = "컴퓨터학부";
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/programs/major`,
    headers: {},
    auth: {
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
    },
    params: {
      major,
    },
  };
  try {
    const response = await axios(axiosConfig);
    return [response.data.body, response.status];
    // return [dummy, 200];
  } catch (error) {
    const errorResponse = error.response.data;
    return [errorResponse.message, errorResponse.status];
  }
};

export const apiGetProgramPageData = async ({ programNo }) => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/programs/show`,
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

export const apiPostParticipateProgram = async ({
  programNo,
  name,
  gender,
  phoneNo,
  age,
  region,
  schoolName,
  applicationRoute,
  introduce,
  questionCategory,
  questionContent,
}) => {
  const axiosConfig = {
    method: "post",
    url: `${config.baseURL}/programs/participate`,
    headers: {},
    auth: {
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
    },
    data: qs.stringify({
      programNo,
      name,
      gender,
      phoneNo,
      age,
      region,
      schoolName,
      applicationRoute,
      introduce,
      questionCategory,
      questionContent,
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
