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

const formatRank = (data: { summonerRank: string }) => {
  return `https://opgg-static.akamaized.net/images/medals_new/${data.summonerRank}.png`;
};

export const UserRank = ({ summonerInfo }: SumInfoProps) => {
  const { solorank, freerank } = summonerInfo;
  return (
    <UserRankWrapper>
      <RankWrapper className="Solo">
        <RankText>
          <RankSubTitle>솔로랭크</RankSubTitle>
          <RankName>Gold 2</RankName>
          <RankContent>
            <RankLp>89LP</RankLp>
            <RankWinrate>52% (164승 154패)</RankWinrate>
          </RankContent>
        </RankText>
        <RankImg src={formatRank({ summonerRank: `${solorank}` })} />
      </RankWrapper>
      <RankWrapper className="Free">
        <RankText>
          <RankSubTitle>자유랭크</RankSubTitle>
          <RankName>Platinum 4</RankName>
          <RankContent>
            <RankLp>0LP</RankLp>
            <RankWinrate>49% (156승 165패)</RankWinrate>
          </RankContent>
        </RankText>
        <RankImg src={formatRank({ summonerRank: `${freerank}` })} />
      </RankWrapper>
    </UserRankWrapper>
  );
};
