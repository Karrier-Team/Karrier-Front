import * as S from "./style";
import { Text } from "@mantine/core";

const CircleWithText = ({ upper, lower }) => {
  return (
    <S.Round>
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
