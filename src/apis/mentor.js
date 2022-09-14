// import qs from "qs";
import axios from "axios";
import config from "../configs";

export const apiGetMyMentorPrograms = async () => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/mentors/manage/program-list`,
    headers: {},
    auth: {
      username: config.mentorEmail,
      password: config.password,
    },
  };
  try {
    const response = await axios(axiosConfig);
    return [response.data.body, response.data.status];
  } catch (error) {
    return [error.message, error.response.status];
  }
};

export const apiGetMentorQnaPage = async () => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/mentors/manage/question`,
    headers: {},
    auth: {
      username: config.mentorEmail,
      password: config.password,
    },
  };
  try {
    const response = await axios(axiosConfig);
    return [response.data.body, response.data.status];
  } catch (error) {
    return [error.message, error.response.status];
  }
};
