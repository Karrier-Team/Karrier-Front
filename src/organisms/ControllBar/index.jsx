import SortingBar from "../../components/molecules/SortingBar";
import SearchBar from "../../components/molecules/SearchBar";
import * as S from "./style";

const ControllBar = ({
  type,
  lefttxt,
  leftnum,
  withBtn,
  onClickBtn,
  sortType,
  sortTypeOptions,
  onChangeSortType,
  searchTypeOptions,
  searchType,
  onChangeSearchType,
  onChangeSearchValue,
  searchValue,
}) => {
  return (
    <S.Wrapper>
      {lefttxt && (
        <div>
          <S.Text type={type}>{lefttxt}</S.Text>
          <S.Text style={{ marginLeft: "1em" }}>{leftnum}</S.Text>
        </div>
      )}
      <SortingBar
        type={type}
        sortType={sortType}
        sortTypeOptions={sortTypeOptions}
        onChangeSortType={onChangeSortType}
      ></SortingBar>
      <SearchBar
        type={type}
        withBtn={withBtn}
        onClickBtn={onClickBtn}
        searchType={searchType}
        searchValue={searchValue}
        searchTypeOptions={searchTypeOptions}
        onChangeSearchType={onChangeSearchType}
        onChangeSearchValue={onChangeSearchValue}
      ></SearchBar>
    </S.Wrapper>
  );
};

export default ControllBar;
