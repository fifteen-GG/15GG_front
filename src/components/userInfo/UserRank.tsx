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
    solo,
    flex,
    solotier,
    sololp,
    flextier,
    flexlp,
    solowin_rate,
    flexwin_rate,
    solowin,
    sololosses,
    flexwin,
    flexlosses,
  } = summonerInfo;
  return (
    <UserRankWrapper>
      <RankWrapper className="Solo">
        <RankText>
          <RankSubTitle>솔로랭크</RankSubTitle>
          <RankName>{solotier}</RankName>
          <RankContent>
            <RankLp>{sololp}LP</RankLp>
            <RankWinrate>
              {solowin_rate}% ({solowin}승 {sololosses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        <RankImg src={formatRank(solo)} />
      </RankWrapper>
      <RankWrapper className="Flex">
        <RankText>
          <RankSubTitle>자유랭크</RankSubTitle>
          <RankName>{flextier}</RankName>
          <RankContent>
            <RankLp>{flexlp}LP</RankLp>
            <RankWinrate>
              {flexwin_rate}% ({flexwin}승 {flexlosses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        <RankImg src={formatRank(flex)} />
      </RankWrapper>
    </UserRankWrapper>
  );
};
