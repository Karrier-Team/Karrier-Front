import qs from "qs";
import axios from "axios";
import config from "../configs";

const dummy = {
  programName: "고3 대비 컴퓨터공학의 모든것",
  title: "4444",
  mentorName: "김민수",
  type: "전공소개",
  openDate: "2022년 9월 26일(월)",
  closeDate: "2022년 10월 7일(금)",
  runningTime: "화, 목 오전 10시 ~12시 / 금 오후 2시 ~ 4시",
  onlineOffline: true,
};

export const apiGetMentoringApplySuccess = async ({ programNo }) => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/programs/participate-complete`,
    headers: {},
    auth: {
      username: "test2@test.com",
      password: "qwer1234!",
    },
    params: {
      programNo,
    },
  };
  try {
    // const response = await axios(axiosConfig);
    // return [response.data, response.status];
    return [dummy, 200];
  } catch (error) {
    return [error.message, error.response.status];
  }
};
