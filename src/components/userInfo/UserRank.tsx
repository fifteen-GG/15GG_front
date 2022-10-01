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
  return (
    <UserRankWrapper>
      <RankWrapper className="Solo">
        <RankText>
          <RankSubTitle>솔로랭크</RankSubTitle>
          <RankName>{summonerInfo.solotier}</RankName>
          <RankContent>
            <RankLp>{summonerInfo.sololp}LP</RankLp>
            <RankWinrate>
              {summonerInfo.solowin_rate}% ({summonerInfo.solowin}승{' '}
              {summonerInfo.sololosses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        <RankImg src={formatRank(summonerInfo.solo)} />
      </RankWrapper>
      <RankWrapper className="Flex">
        <RankText>
          <RankSubTitle>자유랭크</RankSubTitle>
          <RankName>{summonerInfo.flextier}</RankName>
          <RankContent>
            <RankLp>{summonerInfo.flexlp}LP</RankLp>
            <RankWinrate>
              {summonerInfo.flexwin_rate}% ({summonerInfo.flexwin}승{' '}
              {summonerInfo.flexlosses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        <RankImg src={formatRank(summonerInfo.flex)} />
      </RankWrapper>
    </UserRankWrapper>
  );
};
