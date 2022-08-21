import styled, { css } from "styled-components";
// import { ifProp, palette, theme } from "styled-tools";

export const Label = styled.label`
  font-size: ${(props) => (props.fontsize === "big" ? "1.7em" : "1.2em")};
  font-weight: bold;
  ${(props) =>
    props.required
      ? css`
          ::after {
            content: "*";
            position: relative;
            top: 0.4em;
            left: 0.2em;
            color: red;
            font-size: 2em;
          }
        `
      : null}
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
