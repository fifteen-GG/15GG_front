import React from 'react';
import { SumInfoProps } from './type';

import {
  UserRankWrapper,
  RankWrapper,
  RankText,
  RankSubTitle,
  RankName,
  RankContent,
  RankLp,
  RankWinrate,
  RankImg,
} from './styles/userRank.s';

// const formatRank = (data: { summonerRank: string }) => {
//   return `https://opgg-static.akamaized.net/images/medals_new/${data.summonerRank}.png`;
// };

import { formatRank } from '../utility/Url';

export const UserRank = ({ summonerInfo }: SumInfoProps) => {
  const {
    solorank,
    freerank,
    solorankinfo,
    solorankLP,
    freerankinfo,
    freerankLP,
    solowinrate,
    freewinrate,
    solowin,
    sololose,
    freewin,
    freelose,
  } = summonerInfo;
  return (
    <UserRankWrapper>
      <RankWrapper className="Solo">
        <RankText>
          <RankSubTitle>솔로랭크</RankSubTitle>
          <RankName>{solorankinfo}</RankName>
          <RankContent>
            <RankLp>{solorankLP}LP</RankLp>
            <RankWinrate>
              {solowinrate}% ({solowin}승 {sololose}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        <RankImg src={formatRank(solorank)} />
      </RankWrapper>
      <RankWrapper className="Free">
        <RankText>
          <RankSubTitle>자유랭크</RankSubTitle>
          <RankName>{freerankinfo}</RankName>
          <RankContent>
            <RankLp>{freerankLP}LP</RankLp>
            <RankWinrate>
              {freewinrate}% ({freewin}승 {freelose}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        <RankImg src={formatRank(freerank)} />
      </RankWrapper>
    </UserRankWrapper>
  );
};
