import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { match_info_list, summoner_info } from './type';
import styled from 'styled-components';

import React from 'react';
//import components
import { UserRank } from './UserRank';
import UserGraph from './UserGraph';
import { UserStatInfo } from './UserStatInfo';
import { GameCard } from './GameCard';
import { UserId } from './UserId';

const UserInfoWrapper = styled.div``;
const UserStatWrapper = styled.div``;
const UserGameListWrapper = styled.div``;

const matchData: match_info_list[] = [
  {
    status: 'live',
    result: 'win',
    queue_mode: 'solo',
    month: '09',
    date: '06',
    kills: 7,
    deaths: 3,
    assists: 21,
    kda: 9.33,
    cs: 177,
    cs_per_min: 8.33,
    ward: 0,
    champion_name: 'Sona',
    items: ['3133', '6694', '3089', '3340', '3047', '3086', '3087'],
  },
  {
    status: 'complete',
    result: 'lose',
    queue_mode: 'flex',
    month: '09',
    date: '05',
    kills: 2,
    deaths: 8,
    assists: 15,
    kda: 5.33,
    cs: 123,
    cs_per_min: 7.29,
    ward: 0,
    champion_name: 'Jax',
    items: ['3033', '3032', '3036', '3340', '3035', '3038', '3040'],
  },
  {
    status: 'incomplete',
    result: 'win',
    queue_mode: 'solo',
    month: '09',
    date: '04',
    kills: 9,
    deaths: 2,
    assists: 25,
    kda: 9.88,
    cs: 143,
    cs_per_min: 9.17,
    ward: 0,
    champion_name: `Katarina`,
    items: ['3133', '6694', '3089', '3340', '3047', '3086', '3087'],
  },
  {
    status: 'complete',
    result: 'win',
    queue_mode: 'solo',
    month: '09',
    date: '02',
    kills: 8,
    deaths: 5,
    assists: 13,
    kda: 7.58,
    cs: 183,
    cs_per_min: 8.32,
    ward: 0,
    champion_name: 'Blitzcrank',
    items: ['3033', '3032', '3036', '3340', '3035', '3038', '3040'],
  },
  {
    status: 'incomplete',
    result: 'lose',
    queue_mode: 'solo',
    month: '08',
    date: '31',
    kills: 12,
    deaths: 0,
    assists: 19,
    kda: 9.99,
    cs: 183,
    cs_per_min: 9.89,
    ward: 0,
    champion_name: 'Brand',
    items: ['3133', '6694', '3089', '3340', '3047', '3086', '3087'],
  },
];
const sumData: summoner_info[] = [
  {
    icon: '4027',
    summoner_id: '브랜드',
    level: 363,
    solo: 'gold',
    solotier: 'Gold 2',
    sololp: 89,
    flex: 'platinum',
    flextier: 'Platinum 2',
    flexlp: 0,
    solowin_rate: 52,
    flexwin_rate: 48,
    solowin: 164,
    sololosses: 154,
    flexwin: 156,
    flexlosses: 165,
    kda_avg: 2.15,
    kills_avg: 8.5,
    deaths_avg: 7.2,
    assists_avg: 11.4,
    prefer_position: 'ADC',
    positionrate: 87,
  },
];

export const UserInfo = () => {
  const [games, setGames] = useState<match_info_list[]>([...matchData]);
  const [profiles, setProfiless] = useState<summoner_info[]>([...sumData]);

  const fetchData = () => {
    setTimeout(() => {
      const arr: match_info_list[] = games.concat([...matchData]);
      setGames(arr);
    }, 1500);
  };
  return (
    <UserInfoWrapper>
      <UserStatWrapper>
        {profiles.map((profile: summoner_info, index) => (
          <UserId summonerInfo={profile} key={index} />
        ))}
        {profiles.map((profile: summoner_info, index) => (
          <UserRank summonerInfo={profile} key={index} />
        ))}
        {profiles.map((profile: summoner_info, index) => (
          <UserStatInfo summonerInfo={profile} key={index} />
        ))}
        {profiles.map((profile: summoner_info, index) => (
          <UserGraph summonerInfo={profile} key={index} />
        ))}
      </UserStatWrapper>
      <UserGameListWrapper>
        <InfiniteScroll
          next={fetchData}
          dataLength={games.length}
          hasMore={true}
          loader={<h4 style={{ color: 'white' }}>Loading...</h4>}
        >
          {games.map((game: match_info_list, index) => {
            return <GameCard matchInfo={game} key={index}></GameCard>;
          })}
        </InfiniteScroll>
      </UserGameListWrapper>
    </UserInfoWrapper>
  );
};
