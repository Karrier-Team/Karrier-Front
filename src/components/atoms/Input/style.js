import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%; // width (574px)

  height: ${(props) => (props.height ? props.height : "10vh")};
  padding: ${(props) => (props.padding ? props.padding : "1.7em")};

  font-weight: bold;

  color: ${(props) => (props.color ? props.color : "black")};

  border: none;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "9px"};
  box-shadow: var(--box-shadow);

  font-size: ${(props) => (props.fontSize ? props.fontSize : "1em")};

  ::placeholder {
    color: #acacac;
  }
`;
