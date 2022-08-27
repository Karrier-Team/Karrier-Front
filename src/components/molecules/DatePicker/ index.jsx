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

function DatePicker({ label, placeholder }) {
  const [value, setValue] = useState([new Date(), new Date()]);
  return (
    <Wrapper>
      <DateRangePicker
        placeholder="placeholder"
        value={value}
        inputFormat="MM/DD/YYYY"
        labelFormat="MM/YYYY"
        onChange={setValue}
        style={{ width: "24.5vw", height: "10vh" }}
        size={"md"}
      />
    </Wrapper>
  );
}
export default DatePicker;
