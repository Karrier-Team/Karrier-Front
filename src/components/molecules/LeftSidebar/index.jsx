import * as S from "./style";

const LeftSidebar = ({ color, items }) => {
  return (
    <S.Wrapper>
      {items.map((item) => {
        return (
          <S.StyledNavLink color={color} to={item.link}>
            {item.name}
          </S.StyledNavLink>
        );
      })}
    </S.Wrapper>
  );
};

export default LeftSidebar;
