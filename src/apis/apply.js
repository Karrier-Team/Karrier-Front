import config from "../configs";

export const postMentorApplyBasicInformation = async (data) => {
  const request = {
    ...data,
  };

  console.log("POST 요청");
  console.log(request);

  // const result = await fetch(`${config.url}/api/cls`, {
  //   method: "POST",
  //   credentials: "include",
  //   body: new URLSearchParams(request),
  // });

  const result = { statusCode: 200 };

  return result;
};

export const postMentorApplyDetailedInformation = async (data) => {
  const result = { statusCode: 200 };
  console.log("멘토 세부 정보 전송 완료", data);
  return result;
};

export const postMentorVerificationInformation = async (data) => {
  const result = { statusCode: 200 };
  console.log("이미지 파일 전송 완료", data);
  return result;
};

export const postMentorApplyContactsInformation = async (data) => {
  const result = { statusCode: 200 };
  console.log("멘토 연락처 정보 전송 완료", data);
  return result;
};

export const postMentorApplyInfo = async (data) => {
  const result = { statusCode: 200 };
  console.log("멘토 지원 정보 POST 요청 완료", data);
  return result;
};
