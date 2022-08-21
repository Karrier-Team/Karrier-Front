import SortingBar from "../../components/molecules/SortingBar";
import SearchBar from "../../components/molecules/SearchBar";
import * as S from "./style";

const ControllBar = ({
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
      <SortingBar
        sortType={sortType}
        sortTypeOptions={sortTypeOptions}
        onChangeSortType={onChangeSortType}
      ></SortingBar>
      <SearchBar
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
