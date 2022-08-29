import * as S from "./style";
import { useSearchParams } from "react-router-dom";
import Btn from "../../atoms/Btn";
import { Space } from "@mantine/core";

const SearchBar = ({
  withBtn = false,
  onClickBtn,
  searchType,
  searchTypeOptions,
  onChangeSearchType,
  searchValue,
  onChangeSearchValue,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  if (!searchValue) return null;

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
      <Space w="xs"></Space>
      {withBtn ? <Btn handleClick={onClickBtn}>작성하기</Btn> : null}
    </S.Wrapper>
  );
};

export default SearchBar;
