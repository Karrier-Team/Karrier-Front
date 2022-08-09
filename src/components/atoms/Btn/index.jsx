import React from "react";
import * as S from "./style";

// /** react-router/Link 사용 (내부적인 routing)*/
// to?: string;
// /** 외부 링크 */
// href?: string;
// /** button styling type (ex. priamry, secondary) */
// styletype?: string;
// /** disabled 여부 */
// disabled?: boolean;
// /** click handler */
// onClick?: () => void;

function Btn({ to, hide, children }) {
  if (to) {
    return (
      <S.StyledLink to={to} hide={hide}>
        {children}
      </S.StyledLink>
    );
  }

  return <S.Btn hide={hide}>{children}</S.Btn>;
}

// function Button({ children, href, to, styletype = "primary", fit = false, grow = false, ...props }: Props): React.ReactElement {
//   const customprops = {
//     fit,
//     grow,
//   };

//   if (to) {
//     return (
//       <S.StyledLink styletype={styletype} to={to} customprops={customprops} {...props}>
//         {children}
//       </S.StyledLink>
//     );
//   } else if (href) {
//     return (
//       <S.Anchor styletype={styletype} href={href} customprops={customprops} {...props}>
//         {children}
//       </S.Anchor>
//     );
//   }

//   return (
//     <S.StyledBtn styletype={styletype} customprops={customprops} {...props}>
//       {children}
//     </S.StyledBtn>
//   );
// }
export default Btn;
