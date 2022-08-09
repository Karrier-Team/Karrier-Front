import styled from "styled-components";
// import { ifProp, palette, theme } from "styled-tools";

export const Label = styled.label`
  width: 100%;
  margin: 0.5em 0;
  font-size: 1.2em;
`;

// export const Label = styled.label<Props>`
//   ${theme('fontStyle.subtitle2')}
//   color: ${palette('grayscale', 1)};

//   &::after {
//     content: '*';
//     visibility: ${ifProp('required', 'unset', 'hidden')};
//     color: ${palette('primary')};
//   }
// `;
