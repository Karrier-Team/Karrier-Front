import styled from "styled-components";

export const LoginButtonInput = styled.input`
  border: 1px solid #999999;
  border-radius: 10px;

  background-color: #2c8ecb;
  color: white;
  font-weight: bold;

  width: 430px;
  height: 55px;
  margin: 3em;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export default LoginButtonInput;

// NOTICE: 참고용1 (개발화라리)

export const BodyWrapper = styled.div`
  height: 60px;
  padding: 10px;
  border: 1px solid #d0ecf1;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

// NOTICE: 참고용2 (likelion)

export const MediaDiv = styled.div`
  margin: 0px auto;
  min-height: 100vh;
  width: 768px;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bgColor};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderDiv = styled.div`
  width: 768px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Black Han Sans", sans-serif;
  position: absolute;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleLogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  line-height: 1;
`;

export const TitleBig = styled.span`
  font-size: 40px;
`;

export const TitleSmall = styled.span`
  font-size: 20px;
`;

export const SubHeaderDiv = styled.div`
  margin: 15px;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const Main = styled.div`
  padding-top: 90px;
`;

export const SlogunSection = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SlogunBig = styled.span`
  font-size: 40px;
  font-family: "League Gothic", sans-serif;
`;

export const SlogunSmall = styled.span`
  margin: 3px;
  font-weight: bold;
  color: #f39926;
`;
export const PostSection = styled.div`
  margin: 0px auto;
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;
export const PostTitleDiv = styled.div`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  color: white;
  background-color: #f39926;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const PostTitle = styled.span`
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: "Black Han Sans", sans-serif;
  font-size: 25px;
`;

export const PostListDiv = styled.div`
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
`;

export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
`;

export const LoadingImg = styled.img`
  width: 30px;
`;

export const EachPostLi = styled.li`
  margin: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostLink = styled.span`
  margin-left: 5px;
`;
export const PostRepl = styled.div`
  font-family: "Courier New", Courier, monospace;
`;
export const PagingSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px auto;
  width: 150px;
  margin-top: 20px;
`;
export const PagenumberDiv = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f39926;
  border-radius: 5px;
`;
export const FooterDiv = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterBig = styled.span`
  margin: 5px;
  font-size: 12px;
`;
export const FooterSmall = styled.span`
  margin: 5px;
  font-size: 5px;
`;
export const CursorDiv = styled.div`
  cursor: pointer;
`;

//ShowPost에 추가되는 스타일 컴포넌트
export const PostReplDiv = styled.div`
  border-top: 2px solid white;
  margin-bottom: 15px;
  width: 100%;
  line-height: 24px;
`;
export const ReplTitleDiv = styled.div`
  font-size: 12px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const ReplWriter = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-weight: bolder;
`;
export const Repl = styled.span`
  font-size: 12px;
`;
export const WriterDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ReplInput = styled.textarea`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  height: 30px;
  border-radius: 5px;
  font-family: "Noto Sans KR", sans-serif;
`;
export const ReplSubmitDiv = styled.div`
  width: 100px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: #f39926;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

//WritePost.jsx
export const PostWriteDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const TitleInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
`;
export const ContentsInput = styled.textarea`
  margin-top: 10px;
  padding: 10px;
  height: 400px;
  border-radius: 5px;
  font-family: "Noto Sans KR", sans-serif;
`;
export const PostSubmitDiv = styled.div`
  width: 50%;
  margin: 0px auto;
  margin-top: 15px;
  border-radius: 10px;
  background-color: #f39926;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
export const PostSubmit = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: "Black Han Sans", sans-serif;
  font-size: 20px;
`;
// export default MediaDiv;

// NOTICE: 참고용3 (처음만난리액트

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
`;
