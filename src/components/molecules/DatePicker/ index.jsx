import { useState } from "react";
import { DateRangePicker } from "@mantine/dates";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
// const Span = styled.span`
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//     Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   font-weight: bold;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 20px;
// `;

function DatePicker() {
  const [value, setValue] = useState([new Date(), new Date()]);
  return (
    <Wrapper>
      <DateRangePicker
        label="Book hotel"
        placeholder="Pick dates range"
        value={value}
        inputFormat="MM/DD/YYYY"
        labelFormat="MM/YYYY"
        onChange={setValue}
        style={{ width: "20vw", height: "10vh" }}
      />
    </Wrapper>
  );
}
export default DatePicker;
