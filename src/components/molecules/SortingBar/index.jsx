const SortingBar = ({ sortTypeOptions, onChangeSortType }) => {
  return (
    <div style={{ display: "flex", gap: "1em" }}>
      {sortTypeOptions.map((sortType, idx) => {
        return (
          <div onClick={() => onChangeSortType(sortType.value)} key={idx}>
            {sortType.name}
          </div>
        );
      })}
    </div>
  );
};

export default SortingBar;
