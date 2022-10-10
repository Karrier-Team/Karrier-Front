import styled from "styled-components";

export const LoginInput = styled.input`
  width: 430px;
  height: 3rem;

  border: 2px solid #a9a9a9;
  border-radius: 10px;
  box-sizing: border-box;

  opacity: 1;
  padding: 3%;

  font-size: 1em;

  ::placeholder {
    opacity: 50%;
  }
`;

export const LoginInputCaptionDiv = styled.div`
  font-size: 1em;
  padding-bottom: 13px;
`;

export const Wrapper = styled.div`
  width: 430px;
  margin: 1em;
`;

export default LoginInput;
