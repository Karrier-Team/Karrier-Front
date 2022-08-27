import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%; // width (574px)

  height: ${(props) => (props.height ? props.height : "10vh")};
  padding: ${(props) => (props.padding ? props.padding : "2em")};

  font-weight: bold;

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);

  font-size: 1em;
  ::placeholder {
    color: #acacac;
  }
`;
