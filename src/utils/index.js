export function validate(emailValue, passwordValue, repasswordValue) {
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
  return errors;
}
