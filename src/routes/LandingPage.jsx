import React from "react";
import { useNavigate } from "react-router-dom";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

//components
import Btn from "../components/atoms/Btn";
import Footer from "../common/Footer";

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
              backgroundSize: "70%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "rgb(248, 248, 248)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "65%",
                left: "24%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Btn
                size={"12em"}
                height={"2.6em"}
                fontSize={"1.2em"}
                borderRadius={"12px"}
                children={"멘토모집"}
                backgroundColor={"rgb(27,76,117)"}
                handleClick={() => navigate("/apply")}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "65%",
                left: "40%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Btn
                size={"12em"}
                height={"2.6em"}
                fontSize={"1.2em"}
                borderRadius={"12px"}
                children={"로그인 "}
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
            <div
              style={{
                position: "absolute",
                top: "65%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Btn
                size={"14em"}
                height={"2.6em"}
                fontSize={"1.2em"}
                children={"학과별 페이지 보기 >"}
                borderRadius={"12px"}
                backgroundColor={"var(--bg-color-l)"}
                color={"black"}
                handleClick={() => navigate("/mentoring")}
              />
            </div>
          </FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing4.png")})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "60%",
                left: "59%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Btn
                size={"13em"}
                height={"2.8em"}
                children={
                  <span>
                    <span style={{ color: "var(--reviews-color)" }}>
                      수강후기
                    </span>
                    &nbsp;페이지 보기 >
                  </span>
                }
                borderRadius={"10px"}
                backgroundColor={"var(--bg-color-l)"}
                color={"black"}
                fontSize={"1.2em"}
                handleClick={() => navigate("/community/reviews")}
              />
            </div>
          </FullpageSection>
          <FullpageSection
            style={{
              ...SectionStyle,
              backgroundImage: `url(${require("../images/landing5.png")})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "60%",
                left: "29%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Btn
                size={"13em"}
                height={"2.8em"}
                children={
                  <span>
                    <span style={{ color: "var(--primary-color)" }}>
                      질의응답
                    </span>
                    &nbsp;페이지 보기 >
                  </span>
                }
                borderRadius={"10px"}
                backgroundColor={"var(--bg-color-l)"}
                color={"black"}
                fontSize={"1.2em"}
                handleClick={() => navigate("/community/reviews")}
              />
            </div>
          </FullpageSection>
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
            <div
              style={{
                position: "absolute",
                top: "65%",
                left: "41%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Btn
                size={"12em"}
                height={"2.6em"}
                fontSize={"1.2em"}
                children={"멘토모집"}
                borderRadius={"15px"}
                backgroundColor={"rgb(27,76,117)"}
                handleClick={() => navigate("/apply")}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "65%",
                left: "59%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Btn
                size={"12em"}
                height={"2.6em"}
                fontSize={"1.2em"}
                children={"로그인 "}
                borderRadius={"15px"}
                backgroundColor={"var(--bg-color-l)"}
                color={"rgb(27,76,117)"}
                handleClick={() => navigate("/login")}
              />
            </div>
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
            <Footer />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
}

export default React.memo(LandingPage);
