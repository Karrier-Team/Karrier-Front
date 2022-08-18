// import config from "../configs";
// const result = await fetch(`${config.url}/api/cls`, {
//   method: "POST",
//   credentials: "include",
//   body: new URLSearchParams(request),
// });

export const postMentorVerificationInformation = async (data) => {
  const result = { statusCode: 200 };
  console.log("이미지 파일 전송 완료", data);
  return result;
};

export const postMentorApplyInfo = async (data) => {
  const result = { statusCode: 200 };
  console.log("멘토지원정보 전송완료", data);
  return result;
};
