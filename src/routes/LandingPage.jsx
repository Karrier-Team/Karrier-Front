import React from "react";
import { useNavigate } from "react-router-dom";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import styled from "styled-components";

import Btn from "../components/atoms/Btn";

function LandingPage() {
  const SectionStyle = {
    height: "100vh",
    width: "100%",
    position: "relative",
    // backgroundImage: `url(${require("../images/landing1.png")})`,
    // backgroundSize: "auto",
    // backgroundPosition: "center",
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
              backgourndSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "rgb(248, 248, 248)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "63%",
                left: "23%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Btn
                size={"13em"}
                height={"2.8em"}
                children={"멘토모집"}
                borderRadius={"20px"}
                backgroundColor={"rgb(27,76,117)"}
                handleClick={() => navigate("/apply")}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "63%",
                left: "40%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Btn
                size={"13em"}
                height={"2.8em"}
                children={"로그인 "}
                borderRadius={"20px"}
                backgroundColor={"var(--bg-color-lll)"}
                color={"rgb(27,76,117)"}
                handleClick={() => navigate("/login")}
              />
            </div>
          </FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing2.png")})`,
              backgourndSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing3.png")})`,
              backgourndSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "65%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Btn
                size={"18em"}
                height={"2.8em"}
                children={"학과별 페이지 보기 >"}
                borderRadius={"10px"}
                backgroundColor={"var(--bg-color-lll)"}
                color={"black"}
                fontSize={"1.3em"}
                handleClick={() => navigate("/mentoring")}
              />
            </div>
          </FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing4.png")})`,
              backgourndSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing5.png")})`,
              backgourndSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing6.png")})`,
              backgourndSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing7.png")})`,
              backgourndSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "rgb(44,69,120)",
            }}
          ></FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing8.png")})`,
              backgourndSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing9.png")})`,
              backgourndSize: "cover",
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
        </FullPageSections>
      </Fullpage>
    </>
  );
}

export default React.memo(LandingPage);
