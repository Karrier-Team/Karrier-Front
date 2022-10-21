import axios from "axios";
import config from "../configs/index";
import qs from "qs";

// const result = await fetch(`${config.url}/api/cls`, {
//   method: "POST",
//   credentials: "include",
//   body: new URLSearchParams(request),
// });

export const postMentorVerificationInformation = async (data) => {
  const axiosConfig = {
    method: "post",
    url: `${config.baseURL}/members/login`,
    headers: {},
    data: qs.stringify({
      name: data.name,
      gender: data.gender,
      university: data.university,
      college: data.college,
      department: data.major,
      studentId: data.student_id,
      year: data.year,
      introduce: data.introduce,
      club: data.club,
      contest: data.contest,
      externalActivity: data.external_activity,
      intern: data.intern,
      naverBlogAddress: data.naverUrl,
      facebookAddress: data.facebookUrl,
      instarAddress: data.instaUrl,
      phoneNo: data.phone_no,
      country: data.country,
      city: data.city,
    }),
  };
  try {
    const response = await axios(axiosConfig);
    // return [response.data, response.status];
    console.log(response.data);
  } catch (error) {
    return [null, 401];
  }
};

export const postMentorApplyInfo = async (data) => {
  // const result = { statusCode: 200 };
  // console.log("멘토지원정보 전송완료", data);
  // return result;

  const formData = new FormData();

  const newData = {
    name: data.name,
    gender: data.gender,
    university: data.university,
    college: data.college,
    department: data.major,
    studentId: data.student_id,
    year: data.year,
    introduce: data.introduce,
    club: data.club,
    contest: data.contest,
    externalActivity: data.external_activity,
    intern: data.intern,
    naverBlogAddress: data.naverUrl,
    facebookAddress: data.facebookUrl,
    instarAddress: data.instaUrl,
    phoneNo: data.phone_no,
    country: data.country,
    city: data.city,
    studentInfoFile: "",
    profileImageFile: "",
  };

  for (let key in newData) {
    formData.append(key, newData[key]);
  }

  for (let value of formData.values()) {
    console.log(value);
  }

  const axiosConfig = {
    method: "post",
    url: `${config.baseURL}/mentors/new`,
    withCredentials: true,
    auth: {
      username: JSON.parse(localStorage.getItem("auth"))?.email,
      password: JSON.parse(localStorage.getItem("auth"))?.password,
    },
    data: formData,
  };

  try {
    const response = await axios(axiosConfig);
    // return [response.data, response.status];
    console.log(response.data);
  } catch (error) {
    console.log(error);
    return [null, 401];
  }
};
