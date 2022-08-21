import * as S from "./style";

const SearchBar = ({ searchTypeOptions, searchValue, onChangeSearchValue }) => {
  return (
    <S.Wrapper>
      <select name="searchOption" id="searchOption">
        {searchTypeOptions.map((searchType) => (
          <option value={searchType.value}>{searchType.name}</option>
        ))}
      </select>
      <S.Input
        value={searchValue}
        onChange={(event) => onChangeSearchValue(event.target.value)}
        placeholder="입력하세요."
      ></S.Input>
    </S.Wrapper>
  );
};

export default SearchBar;
