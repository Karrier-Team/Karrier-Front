import React, { useState, useEffect } from "react";
import ProfileList from "../../organisms/ProfileList.jsx";
import CommunityNavbar from "../../organisms/CommunityNavbar/index.jsx";
import ControllBar from "../../organisms/ControllBar/index.jsx";
import * as S from "./style.js";
import { apiGetMypageEnrolledPrograms } from "../../apis/mypage.js";
import useAsync from "../../hooks/useAsync.js";
import { Navigate } from "react-router-dom";
import Loading from "react-loading";

const sortTypeOptions = [
  { value: "all", name: "전체" },
  { value: "online", name: "온라인" },
  { value: "offline", name: "오프라인" },
];

function MypageProgramsPage() {
  const [sortType, setSortType] = useState("all"); // sort by recent, likes, name || recent, unsolved, solved

  const [state, fetchData] = useAsync(apiGetMypageEnrolledPrograms);
  const { loading, error, data } = state;

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Navigate to="/error" replace></Navigate>;
  if (!data) return <h1>데이터에러</h1>;

  return (
    <>
      <CommunityNavbar type="programs">마이페이지 수강목록</CommunityNavbar>
      <S.Wrapper>
        <ControllBar
          type="programs"
          lefttxt="수강목록"
          leftnum={data?.length || 0}
          sortType={sortType}
          sortTypeOptions={sortTypeOptions}
          onChangeSortType={setSortType}
        ></ControllBar>
        <ProfileList mentoData={data} />
      </S.Wrapper>
    </>
  );
}

export default MypageProgramsPage;
