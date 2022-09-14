import React from "react";
import { useNavigate } from "react-router-dom";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import styled from "styled-components";
//components
import Btn from "../components/atoms/Btn";

const StyledSection = styled.section`
  width: 100%;
  margin: 0 10%;
`;

const LinkSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12%;
`;

const Span = styled.span`
  font-size: 1.3em;
  font-weight: bold;
`;
const SmallSpan = styled.span`
  font-size: 1em;
  font-weight: bold;
  color: var(--bg-color);
`;

function LandingPage() {
  const SectionStyle = {
    height: "100vh",
    width: "100%",
    position: "relative",
  };

  const navigate = useNavigate();

  return (
    <>
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing1.png")})`,
              backgroundSize: "75%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "rgb(248, 248, 248)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <div
              style={{
                width: "20%",
                height: "20%",
                display: "flex",
                gap: "10%",
              }}
            >
              <Btn
                size={"100%"}
                height={"30%"}
                children={"멘토모집"}
                borderRadius={"20px"}
                backgroundColor={"rgb(27,76,117)"}
                handleClick={() => navigate("/apply")}
              />
              <Btn
                size={"100%"}
                height={"30%"}
                children={"로그인 "}
                borderRadius={"20px"}
                backgroundColor={"var(--bg-color-lll)"}
                color={"rgb(27,76,117)"}
                handleClick={() => navigate("/login")}
              />
            </div> */}
          </FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing2.png")})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing3.png")})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {/* <div
              style={{
                position: "absolute",
                top: "65%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Btn
                size={"20%"}
                height={"100%"}
                children={"학과별 페이지 보기 >"}
                borderRadius={"10px"}
                backgroundColor={"var(--bg-color-lll)"}
                color={"black"}
                fontSize={"1.3em"}
                handleClick={() => navigate("/mentoring")}
              />
            </div> */}
          </FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing4.png")})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing5.png")})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing6.png")})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing7.png")})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "rgb(44,69,120)",
            }}
          ></FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing8.png")})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing9.png")})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "rgb(85,156,222)",
            }}
          >
            {/* <div
              style={{
                width: "100%",
                height: "70%",
                backgroundImage: `url(${require("../images/landing9.png")})`,
                backgroundPosition: "50% 10%",
                backgroundColor: "rgb(85,156,222)",
              }}
            ></div> */}
          </FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              height: "50vh",
              backgroundColor: "rgb(248, 248, 248)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <StyledSection>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={require("../images/footerLogo.png")}
                  style={{ width: "17%", objectFit: "scale-down" }}
                />
                <LinkSection>
                  <Span>주요기능</Span>
                  <SmallSpan>멘토링</SmallSpan>
                  <SmallSpan>멘토 모집</SmallSpan>
                  <SmallSpan>마이페이지</SmallSpan>
                  <SmallSpan>자원봉사</SmallSpan>
                </LinkSection>
                <LinkSection>
                  <Span>둘러보기</Span>
                  <SmallSpan>공지사항</SmallSpan>
                  <SmallSpan>질의응답</SmallSpan>
                  <SmallSpan>수강후기</SmallSpan>
                </LinkSection>
                <LinkSection>
                  <Span>기업소개</Span>
                  <SmallSpan>서비스 소개</SmallSpan>
                  <SmallSpan>특허/인증서</SmallSpan>
                </LinkSection>
                <LinkSection>
                  <Span>고객센터</Span>
                  <SmallSpan>카카오톡 플러스 친구</SmallSpan>
                </LinkSection>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "5%",
                }}
              >
                <span style={{ color: "var(--bg-color)", marginBottom: "1%" }}>
                  사업가: 김준용
                </span>
                <span style={{ color: "var(--bg-color)" }}>
                  사업자 등록번호: 31111582210
                </span>
              </div>
            </StyledSection>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
}

export default React.memo(LandingPage);
