import React, { memo } from "react";
import * as S from "./style";

import IconMiniFacebook from "../../../images/IconMiniFacebook.svg";
import IconMiniInstagram from "../../../images/IconMiniInstagram.svg";
import IconMiniNaver from "../../../images/IconMiniNaver.svg";

function MentorContactSection({ data }) {
  return (
    <>
      <S.Wrapper>
        <S.Text size="large">
          {data.name + " "}
          <S.Text size="small">멘토</S.Text>
        </S.Text>
        <S.SNSImg
          src={IconMiniNaver}
          onClick={() => window.open(data.naverblog_address, "_blank")}
        />
        <S.SNSImg
          src={IconMiniInstagram}
          onClick={() => window.open(data.instar_address, "_blank")}
        />
        <S.SNSImg
          src={IconMiniFacebook}
          onClick={() => window.open(data.facebook_address, "_blank")}
        />
      </S.Wrapper>
    </>
  );
}

export default memo(MentorContactSection);
