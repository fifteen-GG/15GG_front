import React from 'react';
import { SumInfoProps } from '../../../type';
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

const UserRank = (props: SumInfoProps) => {
  return (
    <UserRankWrapper>
      <RankWrapper className="Solo">
        <RankText>
          <RankSubTitle>솔로랭크</RankSubTitle>
          <RankName>{rankName(props, 'solo')}</RankName>
          <RankContent>
            <RankLp>{rankInfo(props, 'solo').lp}LP</RankLp>
            <RankWinrate>
              {rankInfo(props, 'solo').win_rate}% ({rankInfo(props, 'solo').win}
              승 {rankInfo(props, 'solo').losses}패)
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
          <RankName>{rankName(props, 'flex')}</RankName>
          <RankContent>
            <RankLp>{rankInfo(props, 'flex').lp}LP</RankLp>
            <RankWinrate>
              {rankInfo(props, 'flex').win_rate}% ({rankInfo(props, 'flex').win}
              승 {rankInfo(props, 'flex').losses}패)
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
