import styled from "styled-components";
import { FlexRowCenter } from "../../../commonStyles";

export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em 0;
`;

export const Wrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.2em 0;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  margin-bottom: 5%;
`;
export const ContentWrapper = styled.div`
  width: 90%;
`;

export const ProfileSection = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 5%;
`;

export const ProfileImg = styled.img`
  ${FlexRowCenter}

  box-sizing: border-box;
  width: 100%; // width (574px)
  aspect-ratio: ${(props) => (props.aspectRatio ? props.aspectRatio : 7 / 3)};

  border: none;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "9px"};
  box-shadow: var(--box-shadow);

  font-size: 3em;
  font-weight: bold;
  text-align: center;

  object-fit: scale-down;
`;

export const ProfileInfo = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameSpan = styled.span`
  font-weight: bold;
  font-size: 2em;
  margin-right: 0.5em;
`;

export const SmSpan = styled.span`
  font-weight: bold;
  font-size: 1.2em;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  margin-right: 0.5em;
`;
