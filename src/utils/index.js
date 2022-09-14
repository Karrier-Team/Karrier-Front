export function validate(
  emailValue,
  passwordValue,
  repasswordValue,
  nicknameValue
) {
  const errors = {};
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailValue) {
    errors.emailError = "이메일을 입력하지 않으셨습니다.";
  } else if (!regex.test(emailValue)) {
    errors.emailError = "이메일이 형식에 맞지 않습니다.";
  }

  if (!passwordValue) {
    errors.passwordError = "비밀번호를 입력하지 않으셨습니다.";
  } else if (!(8 <= passwordValue.length && passwordValue.length <= 16)) {
    errors.passwordError = "비밀번호 길이를 8~16자로 해주세요.";
  }

  if (!repasswordValue) {
    errors.repasswordError = "비밀번호 확인을 입력하지 않으셨습니다.";
  } else if (passwordValue !== repasswordValue) {
    errors.repasswordError = "비밀번호가 일치하지 않습니다.";
  }

  if (!nicknameValue) {
    errors.nicknameError = "닉네임을 입력하지 않으셨습니다.";
  } else if (!(3 <= nicknameValue.length && nicknameValue.length <= 10)) {
    errors.nicknameError = "닉네임 길이를 3~10자로 해주세요. ";
  }
  return errors;
}

export const getColorByType = (type) => {
  switch (type) {
    case "qna":
      return "var(--primary-color)";
    case "reviews":
      return "var(--reviews-color)";
    case "notice":
      return "var(--nocie-color)";
    case "wishlist":
      return "var(--wishlist-color)";
    case "programs":
      return "var(--programs-color)";
    case "followers":
      return "var(--followers-color)";
    default:
      return "var(--primary-color)";
  }
};

export const getFullPropertyName = (object, str) => {
  const arr = Object.keys(object);
  const idx = arr.findIndex((key) => key.includes(str));
  return arr[idx];
};

export const parseDate = (date) => {
  return date.slice(0, 10);
};

export const rand = (start, end) => {
  return start + Math.floor(Math.random() * end - start);
};

export const parseNthPath = (pathname, nth) => {
  const paths = pathname.split("/");
  if (paths.length <= nth) return null;
  return paths[nth];
};
