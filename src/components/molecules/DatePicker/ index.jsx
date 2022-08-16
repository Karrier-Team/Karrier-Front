import { DateRangePicker } from "@mantine/dates";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const Span = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

function DatePicker() {
  const [date, setDate] = useState();
  return (
    <Wrapper>
      <Span>진행 기간</Span>
      <DateRangePicker
        placeholder="Pick dates range"
        value={date}
        style={{ width: "20vw" }}
        onChange={setDate}
      />
    </Wrapper>
  );
}
export default DatePicker;
