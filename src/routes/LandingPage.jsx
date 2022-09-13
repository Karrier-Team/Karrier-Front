import React, { useEffect } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import styled from "styled-components";

import Btn from "../components/atoms/Btn";

const BtnSection = styled.section`
  /* width: 100%;
  height: 100%; */
  /* position: relative; */
`;
function LandingPage() {
  const SectionStyle = {
    height: "100vh",
    width: "100%",
    position: "relative",
    // backgroundImage: `url(${require("../images/landing1.png")})`,
    // backgroundSize: "auto",
    // backgroundPosition: "center",
  };
  return (
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
          }}
        >
          {/* <BtnSection>
          </BtnSection> */}
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
              children={"멘토모집"}
              borderRadius={"20px"}
            />
          </div>
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
              children={"로그인 "}
              borderRadius={"20px"}
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
        ></FullpageSection>
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
        ></FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}

export default React.memo(LandingPage);
