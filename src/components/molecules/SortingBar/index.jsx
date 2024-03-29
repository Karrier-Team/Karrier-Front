import { useSearchParams } from "react-router-dom";
import * as S from "./style";

const SortingBar = ({
  hideSortingbar,
  type,
  sortType,
  sortTypeOptions,
  onChangeSortType,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div
      style={{
        display: "flex",
        gap: "1em",
        visibility: hideSortingbar && "hidden",
      }}
    >
      {sortTypeOptions.map((sortTypeOption, idx) => {
        return (
          <S.Wrapper>
            <S.Circle
              type={type}
              className={sortType === sortTypeOption.value ? "active" : null}
            />
            <S.StyledText
              type={type}
              className={sortType === sortTypeOption.value ? "active" : null}
              onClick={() => {
                onChangeSortType(sortTypeOption.value);
                // 기존에 있는 searchParams에다가 key-value를 추가하고 다시 세팅한다.
                searchParams.set("sort", sortTypeOption.value);
                setSearchParams(searchParams);
              }}
            >
              {sortTypeOption.name}
            </S.StyledText>
          </S.Wrapper>
        );
      })}
    </div>
  );
};

export default SortingBar;
