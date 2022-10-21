import React, { useEffect } from "react";

import MajorInfoBar from "../components/Major/MajorInfoBar";
import MajorInfo from "../components/Major/MajorInfo";
import ProfileList from "../organisms/ProfileList";
import Adbar from "../common/Adbar";
import ControllBar from "../organisms/ControllBar";
import { useState } from "react";
import useAsync from "../hooks/useAsync";
import Loading from "react-loading";
import { Navigate, useSearchParams } from "react-router-dom";
import { apiGetMentoringPrograms } from "../apis/mentoring";

const WrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const sortTypeOptions = [
  { value: "latest", name: "최신순" },
  { value: "likes", name: "찜갯수" },
  { value: "alphanumeric", name: "이름순" },
];

const searchTypeOptions = [
  { value: "programName", name: "프로그램 제목" },
  { value: "mentorName", name: "멘토 이름" },
];

const MentoringPage = () => {
  const [sortType, setSortType] = useState("latest"); // sort by recent, likes, name || recent, unsolved, solved
  const [searchType, setSearchType] = useState("programName"); // programName || mentorName
  const [searchValue, setSearchValue] = useState("");
  const [searchParams] = useSearchParams();
  const [major, setMajor] = useState(searchParams.get("dept"));
  const [state, fetchData] = useAsync(
    () => apiGetMentoringPrograms({ major }),
    [major]
  );
  const { loading, error, data } = state;

  useEffect(() => {
    setMajor(searchParams.get("dept"));
    fetchData();
    // Don't know why but it works even if there is no fetchData dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("dept")]);

  if (loading) return <Loading />;
  if (error) return <Navigate to="/error" replace></Navigate>;
  if (!data) return <h1>데이터에러</h1>;

  return (
    <div style={WrapperStyle}>
      <MajorInfoBar />
      <Adbar />
      <MajorInfo />
      <div style={{ width: "80%", paddingTop: "1.5rem" }}>
        <ControllBar
          sortType={sortType}
          sortTypeOptions={sortTypeOptions}
          onChangeSortType={setSortType}
          onChangeSearchType={setSearchType}
          searchType={searchType}
          searchValue={searchValue}
          onChangeSearchValue={setSearchValue}
          searchTypeOptions={searchTypeOptions}
        ></ControllBar>
        <ProfileList
          sortType={sortType}
          searchType={searchType}
          searchValue={searchValue}
          mentoData={data}
        />
      </div>
    </div>
  );
};
export default React.memo(MentoringPage);
