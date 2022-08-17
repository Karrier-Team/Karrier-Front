import React from "react";
import * as S from "./style";

function Btn({ data, handleClick, to, hide, children, withAlert }) {
  const handleClickWithData = (event) => {
    if (handleClick === undefined) return null;
    if (withAlert) alert("제출완료!");
    return handleClick(data);
  };

  if (to) {
    return (
      <S.StyledLink onClick={handleClickWithData} to={to} hide={hide}>
        {children}
      </S.StyledLink>
    );
  }

  return (
    <S.Btn onClick={handleClickWithData} hide={hide}>
      {children}
    </S.Btn>
  );
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