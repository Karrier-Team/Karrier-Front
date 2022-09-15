import qs from "qs";
import axios from "axios";
import config from "../configs";

export const apiGetMentoringApplySuccess = async ({ programNo }) => {
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/programs/participate-complete`,
    headers: {},
    auth: {
      username: "mentee@karrier.com",
      password: "qwer1234!",
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
  const axiosConfig = {
    method: "get",
    url: `${config.baseURL}/programs/major`,
    headers: {},
    auth: {
      username: "mentee@karrier.com",
      password: "qwer1234!",
    },
    params: {
      major: "컴퓨터학부",
    },
  };
  const dummy = [
    {
      programNo: 9,
      name: "김철",
      title: "1111",
      profileImage: "c5b8a81e-c261-440c-8894-0016e12aa0f5프로필 사진.PNG",
      mainImage: "545efb6b-8a7c-4cc2-a391-317c8a9da530photo.jpg",
      major: "글로벌소프트웨어전공",
      likeCount: 0,
      onlineOffline: true,
      state: "Recruiting",
    },
  ];
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
      username: "mentee@karrier.com",
      password: "qwer1234!",
    },
    params: {
      programNo,
    },
  };
  const dummy = {
    // 왼쪽위
    name: "김민수",
    university: "경북대",
    studentId: "22학번",
    department: "컴퓨터학과",
    major: null,
    profileImage:
      "https://karrier.s3.ap-northeast-2.amazonaws.com/profile-image/84569b2c-7195-44e5-a9b2-1c37d34acafc%ED%94%84%EB%A1%9C%ED%95%84%20%EC%82%AC%EC%A7%84.jpg",

    // 왼쪽위
    naverBlogAddress: "",
    facebookAddress: "",
    instarAddress: "",

    // 왼쪽중간
    likeCount: 0,
    isMyWishList: false,
    isMyFollowList: false,
    isMyParticipate: false,

    // 왼쪽밑
    onlineOffline: true,
    offlinePlace: null,
    openDate: "2022-09-30",
    closeDate: "2024-07-10",
    runningTime: "수요일, 금요일 - 오후 1시 ~ 오후 3시\n",
    maxPeople: 6,
    participationStudentList: null,
    price: 8000,

    // 오른쪽위
    tagList: [
      {
        programNo: 2,
        tagName: "#상냥",
      },
      {
        programNo: 2,
        tagName: "#친절",
      },
    ],
    mentorIntroduce:
      "컴퓨터공학과에 대한 모든 것을 알려드립니다. 만나서 반갑습니다. 잘 알려드리겠습니다 반갑습니다.",
    club: "동아리 3개 가입한적 없음",
    contest: "수상 이력 없습니다",
    externalActivity: "여러가지 외부 프로젝트를 해봤어요",
    intern: "대기업 인턴 경험 ",
    blog: "블로그",

    mainImage:
      "https://karrier.s3.ap-northeast-2.amazonaws.com/main-image/e26fe96a-f01f-459d-9c41-9a168ad2fd64photo.jpg",
    state: "Recruiting",

    // 메인1 introduction
    title: "컴퓨터에 대한 모든 것",
    introduce: "프로그램 소개 블라블라",
    recommendedTargetList: [
      {
        programNo: 2,
        target: "컴퓨터를 배우고 싶은 학생",
      },
      {
        programNo: 2,
        target: "컴퓨터에 관심이 많은 학생",
      },
    ],

    // 메인2 커리큘럼
    curriculumList: [
      {
        programNo: 2,
        curriculumTitle: "1장",
        curriculumContent: "컴퓨터란 무엇인가에 관해서 ",
      },
      {
        programNo: 2,
        curriculumTitle: "2장",
        curriculumContent: "컴퓨터 관련 실습을 해보자",
      },
    ],

    // 메인3 질의응답
    reviewDetailDtoList: [
      {
        programNo: 2,
        programName: "컴퓨터에 대한 모든 것",
        reviewNo: 1,
        writerNickname: "fancy",
        writerProfileImage:
          "https://karrier.s3.ap-northeast-2.amazonaws.com/profile-image/50381f81-4ab9-4be0-84b2-436296d0c545%EB%A9%98%ED%8B%B0%20%ED%94%84%EB%A1%9C%ED%95%84%20%EC%82%AC%EC%A7%84.jpg",
        mentorName: "김민수",
        mentorProfileImage:
          "https://karrier.s3.ap-northeast-2.amazonaws.com/profile-image/84569b2c-7195-44e5-a9b2-1c37d34acafc%ED%94%84%EB%A1%9C%ED%95%84%20%EC%82%AC%EC%A7%84.jpg",
        title: "좋아요!",
        content: "많이 배웠습니다.",
        comment: "좋아요!",
        registerDate: "2022-09-13T00:33:38.880742",
        commentDate: "2022-09-13T00:38:22.624596",
        reviewLikeNo: 2,
        star: 4.5,
        writer: false,
        mentor: false,
      },
      {
        programNo: 2,
        programName: "컴퓨터에 대한 모든 것",
        reviewNo: 2,
        writerNickname: "fancy",
        writerProfileImage:
          "https://karrier.s3.ap-northeast-2.amazonaws.com/profile-image/50381f81-4ab9-4be0-84b2-436296d0c545%EB%A9%98%ED%8B%B0%20%ED%94%84%EB%A1%9C%ED%95%84%20%EC%82%AC%EC%A7%84.jpg",
        mentorName: "김민수",
        mentorProfileImage:
          "https://karrier.s3.ap-northeast-2.amazonaws.com/profile-image/84569b2c-7195-44e5-a9b2-1c37d34acafc%ED%94%84%EB%A1%9C%ED%95%84%20%EC%82%AC%EC%A7%84.jpg",
        title: "잘들었습니다.",
        content: "더 자세히 알려주면 좋을거 같아요!",
        comment: null,
        registerDate: "2022-09-13T00:39:07.160144",
        commentDate: null,
        reviewLikeNo: 0,
        star: 3,
        writer: false,
        mentor: false,
      },
    ],

    //메인4 수강후기
    questionDetailDtoList: [
      {
        programNo: 2,
        programName: "컴퓨터에 대한 모든 것",
        questionNo: 1,
        writerNickname: "fancy",
        writerProfileImage:
          "https://karrier.s3.ap-northeast-2.amazonaws.com/profile-image/50381f81-4ab9-4be0-84b2-436296d0c545%EB%A9%98%ED%8B%B0%20%ED%94%84%EB%A1%9C%ED%95%84%20%EC%82%AC%EC%A7%84.jpg",
        mentorName: "김민수",
        mentorProfileImage:
          "https://karrier.s3.ap-northeast-2.amazonaws.com/profile-image/84569b2c-7195-44e5-a9b2-1c37d34acafc%ED%94%84%EB%A1%9C%ED%95%84%20%EC%82%AC%EC%A7%84.jpg",
        title: "궁금한점 있어요\n",
        content: "궁금한 내용 있어요\n",
        answer: "알려드렸습니다~",
        modifyDate: "2022-09-13T00:25:34.18898",
        answerDate: "2022-09-13T00:29:58.680901",
        questionLikeNo: 1,
        answerLikeNo: 2,
        writer: false,
        mentor: false,
        questionCommentListDto: [
          {
            commentNo: 1,
            content: "저도 궁금해요",
            writerName: "Hello",
            writerProfileImage: null,
            writer: false,
            commentDate: "2022-09-13T00:30:28.28588",
          },
          {
            commentNo: 2,
            content: "저도 궁금해요!!",
            writerName: "Hi",
            writerProfileImage: null,
            writer: true,
            commentDate: "2022-09-13T00:31:53.55964",
          },
        ],
      },
      {
        programNo: 2,
        programName: "컴퓨터에 대한 모든 것",
        questionNo: 2,
        writerNickname: "Hello",
        writerProfileImage: null,
        mentorName: "김민수",
        mentorProfileImage:
          "https://karrier.s3.ap-northeast-2.amazonaws.com/profile-image/84569b2c-7195-44e5-a9b2-1c37d34acafc%ED%94%84%EB%A1%9C%ED%95%84%20%EC%82%AC%EC%A7%84.jpg",
        title: "궁금한것이 있어요\n\n",
        content: "궁금한 내용 있어요!!\n",
        answer: null,
        modifyDate: "2022-09-13T00:32:41.199025",
        answerDate: null,
        questionLikeNo: 0,
        answerLikeNo: 0,
        writer: false,
        mentor: false,
        questionCommentListDto: [],
      },
    ],
  };
  try {
    const response = await axios(axiosConfig);
    console.log("z", response.data.body);
    return [response.data.body, response.status];
  } catch (error) {
    const errorResponse = error.response.data;
    console.log("z", error);
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
      username: "mentee@karrier.com",
      password: "qwer1234!",
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
