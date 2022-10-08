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

// const formatRank = (data: { summonerRank: string }) => {
//   return `https://opgg-static.akamaized.net/images/medals_new/${data.summonerRank}.png`;
// };

import { formatRank } from '../../utility/Url';

const UserRank = (props: SumInfoProps) => {
  const romanToNum = (s: any) => {
    const romeNum = {
      I: 1,
      V: 5,
    };
    let result = 0;
    const romeArray = s.split('');
    const numArray = romeArray.map((rome: any) => rome in romeNum);
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] < numArray[i + 1]) {
        result -= numArray[i];
      } else {
        result += numArray[i];
      }
    }

    return result;
  };
  // const rank = ['MASTER', 'GRANDMASTER', 'CHALLENGER'];
  // {ranks.map((index:any)=>{
  //   {ranks[index] === summonerInfo.flex.tier ? return setValidation(true) : setValidation(false)}
  // })};
  //인라인으로 표현하기
  return (
    <UserRankWrapper>
      <RankWrapper className="Solo">
        <RankText>
          <RankSubTitle>솔로랭크</RankSubTitle>
          {props.summonerInfo.solo.tier === 'MASTER' ||
          props.summonerInfo.solo.tier === 'GRANDMASTER' ||
          props.summonerInfo.solo.tier === 'CHALLENGER' ? (
            <RankName>
              {props.summonerInfo.solo.tier.charAt(0) +
                props.summonerInfo.solo.tier.slice(1).toLowerCase()}
            </RankName>
          ) : (
            <RankName>
              {props.summonerInfo.solo.tier.charAt(0) +
                props.summonerInfo.solo.tier.slice(1).toLowerCase() +
                ' ' +
                romanToNum(props.summonerInfo.solo.rank)}
            </RankName>
          )}
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
          {props.summonerInfo.flex.tier === 'MASTER' ||
          props.summonerInfo.flex.tier === 'GRANDMASTER' ||
          props.summonerInfo.flex.tier === 'CHALLENGER' ? (
            <RankName>
              {props.summonerInfo.flex.tier.charAt(0) +
                props.summonerInfo.flex.tier.slice(1).toLowerCase()}
            </RankName>
          ) : (
            <RankName>
              {props.summonerInfo.flex.tier.charAt(0) +
                props.summonerInfo.flex.tier.slice(1).toLowerCase() +
                ' ' +
                romanToNum(props.summonerInfo.flex.rank)}
            </RankName>
          )}
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
