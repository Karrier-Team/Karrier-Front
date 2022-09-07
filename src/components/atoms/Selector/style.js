import styled from "styled-components";

export const Selector = styled.select`
  box-sizing: border-box;
  width: 100%; // width (574px)
  height: 7vh;
  padding: 1em 2em;

  // selected 값이 false이면 해당 셀렉터가 아무 옵션도 설정되지 않은 상태이고, 이때는 placeholder 색을 사용한다.
  color: ${(props) => (props.selected ? "" : "var(--bg-color)")};

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);

  font-size: 1em;
  font-weight: bold;
  ::placeholder {
    opacity: 50%;
  }
`;
