import React from 'react';
import { SummonerInfo } from '../../types/summonerInfo';
import rankimg from '../../../assets/gg_tier_unranked_4x.png';
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
} from '../styles/userRank.s';

import { formatRank } from '../../utils/Url';
import { rankInfo, rankName } from '../userInfo';

const UserRank = (props: { summonerInfo: SummonerInfo }) => {
  return (
    <UserRankWrapper>
      <RankWrapper className="Solo">
        <RankText>
          <RankSubTitle>솔로랭크</RankSubTitle>
          <RankName>{rankName(props.summonerInfo, 'solo')}</RankName>
          <RankContent>
            <RankLp>{rankInfo(props.summonerInfo, 'solo').lp}LP</RankLp>
            <RankWinrate>
              {rankInfo(props.summonerInfo, 'solo').win_rate}% (
              {rankInfo(props.summonerInfo, 'solo').win}승{' '}
              {rankInfo(props.summonerInfo, 'solo').losses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        {!props.summonerInfo.solo ? (
          <RankImg src={rankimg} />
        ) : (
          <RankImg
            src={formatRank(props.summonerInfo.solo.tier.toLowerCase())}
          />
        )}
      </RankWrapper>
      <RankWrapper className="Flex">
        <RankText>
          <RankSubTitle>자유랭크</RankSubTitle>
          <RankName>{rankName(props.summonerInfo, 'flex')}</RankName>
          <RankContent>
            <RankLp>{rankInfo(props.summonerInfo, 'flex').lp}LP</RankLp>
            <RankWinrate>
              {rankInfo(props.summonerInfo, 'flex').win_rate}% (
              {rankInfo(props.summonerInfo, 'flex').win}승{' '}
              {rankInfo(props.summonerInfo, 'flex').losses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        {!props.summonerInfo.flex ? (
          <RankImg src={rankimg} />
        ) : (
          <RankImg
            src={formatRank(props.summonerInfo.flex.tier.toLowerCase())}
          />
        )}
      </RankWrapper>
    </UserRankWrapper>
  );
};
export default UserRank;
