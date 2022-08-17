import styled from "styled-components";

export const RowWrapper = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em 0;
`;

export const Div = styled.div`
  width: 40%;
  aspect-ratio: 3 / 1;

  box-sizing: border-box;
  padding: 25px;

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);

  font-size: 1em;
  ::placeholder {
    opacity: 50%;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.2em 0;
`;

export const Span = styled.span`
  /* fontSize: "4rem", fontWeight: "bold", margin: "2rem" */
  font-size: 2em;
  font-weight: bold;
  margin: 15px;
`;
