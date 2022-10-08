import React from 'react';
import { SumInfoProps } from '../../../type';

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

import { formatRank } from '../../utility/Url';

const UserRank = (props: SumInfoProps) => {
  const rankName = (s: string) => {
    const name = s.charAt(0) + s.slice(1).toLowerCase();
    return name;
  };
  const rankNumber = (s: string) => {
    const romanToNum = (s: any) => {
      const romeNum = {
        I: 1,
        V: 5,
      };
      let number = 0;
      const romeArray = s.split('');
      const numArray = romeArray.map((rome: any) => rome in romeNum);
      for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < numArray[i + 1]) {
          number -= numArray[i];
        } else {
          number += numArray[i];
        }
      }
      return number;
    };
    let result = '';
    if (s === 'MASTER' || s === 'GRANDMASTER' || s === 'CHALLENGER')
      result = '';
    else result = ' ' + romanToNum(props.summonerInfo.solo.rank);
    return result;
  };
  return (
    <UserRankWrapper>
      <RankWrapper className="Solo">
        <RankText>
          <RankSubTitle>솔로랭크</RankSubTitle>
          <RankName>
            {rankName(props.summonerInfo.solo.tier) +
              rankNumber(props.summonerInfo.solo.tier)}
          </RankName>
          <RankContent>
            <RankLp>{props.summonerInfo.solo.lp}LP</RankLp>
            <RankWinrate>
              {props.summonerInfo.solo.win_rate}% ({props.summonerInfo.solo.win}
              승 {props.summonerInfo.solo.losses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        <RankImg src={formatRank(props.summonerInfo.solo.tier.toLowerCase())} />
      </RankWrapper>
      <RankWrapper className="Flex">
        <RankText>
          <RankSubTitle>자유랭크</RankSubTitle>
          <RankName>
            {rankName(props.summonerInfo.flex.tier) +
              rankNumber(props.summonerInfo.flex.tier)}
          </RankName>
          <RankContent>
            <RankLp>{props.summonerInfo.flex.lp}LP</RankLp>
            <RankWinrate>
              {props.summonerInfo.flex.win_rate}% ({props.summonerInfo.flex.win}
              승 {props.summonerInfo.flex.losses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        <RankImg src={formatRank(props.summonerInfo.flex.tier.toLowerCase())} />
      </RankWrapper>
    </UserRankWrapper>
  );
};
export default UserRank;
