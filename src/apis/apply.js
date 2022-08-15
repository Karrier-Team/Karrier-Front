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
  return result;
};
