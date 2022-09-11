import styled from "styled-components";

export const Wrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.2em 0;
`;

export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em 0;
`;

export const Section = styled.section`
  width: 100%;
  margin-bottom: 5%;
`;
export const ContentWrapper = styled.div`
  width: 90%;
`;

export const StyledFileInput = styled.img`
  width: 100%;
  height: 50vh;
  background-color: tomato;
`;

export const Img = styled.img`
  box-sizing: border-box;
  width: 100%; // width (574px)
  aspect-ratio: ${(props) => (props.aspectRatio ? props.aspectRatio : 7 / 3)};

  padding: ${(props) => (props.padding ? props.padding : 0)};

  border: none;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "9px"};
  box-shadow: var(--box-shadow);

  font-size: 3em;
  font-weight: bold;
  text-align: center;

  object-fit: ${(props) => (props.objectFit ? props.objectFit : "scale-down")};

  cursor: pointer;
`;
