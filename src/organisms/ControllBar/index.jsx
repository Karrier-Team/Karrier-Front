import SortingBar from "../../components/molecules/SortingBar";
import SearchBar from "../../components/molecules/SearchBar";
import * as S from "./style";

const ControllBar = ({
  sortTypeOptions,
  onChangeSortType,
  searchTypeOptions,
  onChangeSearchValue,
  searchValue,
}) => {
  return (
    <S.Wrapper>
      <SortingBar
        sortTypeOptions={sortTypeOptions}
        onChangeSortType={onChangeSortType}
      ></SortingBar>
      <SearchBar
        searchValue={searchValue}
        searchTypeOptions={searchTypeOptions}
        onChangeSearchValue={onChangeSearchValue}
      ></SearchBar>
    </S.Wrapper>
  );
};

export default ControllBar;
