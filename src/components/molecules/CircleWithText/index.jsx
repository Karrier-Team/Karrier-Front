import * as S from "./style";
import { Text } from "@mantine/core";

const CircleWithText = ({ type, upper, lower }) => {
  return (
    <S.Round type={type}>
      <Text align="center" size="md">
        {upper}
      </Text>
      <Text align="center" size="xs">
        {lower}
      </Text>
    </S.Round>
  );
};

export default CircleWithText;
