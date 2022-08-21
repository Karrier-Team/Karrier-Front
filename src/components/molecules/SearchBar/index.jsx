import * as S from "./style";
import { useSearchParams } from "react-router-dom";

const SearchBar = ({
  searchType,
  searchTypeOptions,
  onChangeSearchType,
  searchValue,
  onChangeSearchValue,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <S.Wrapper>
      <select
        name="searchOption"
        id="searchOption"
        onChange={(event) => {
          searchParams.delete(searchType);
          onChangeSearchType(event.target.value);
        }}
      >
        {searchTypeOptions.map((searchType, idx) => (
          <option key={idx} value={searchType.value}>
            {searchType.name}
          </option>
        ))}
      </select>
      <S.Input
        value={searchValue}
        onChange={(event) => {
          onChangeSearchValue(event.target.value);
          // 원래 있던 쿼리에 다른 쿼리 더하기!
          searchParams.set(searchType, event.target.value);
          setSearchParams(searchParams);
        }}
        placeholder="입력하세요."
      ></S.Input>
    </S.Wrapper>
  );
};

export default SearchBar;
