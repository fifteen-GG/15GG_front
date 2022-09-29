import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GameType, SummonerType } from './type';
import styled from 'styled-components';

import React from 'react';
//import components
import { UserId } from './UserId';
import { UserRank } from './UserRank';
import UserGraph from './UserGraph';
import { UserStatInfo } from './UserStatInfo';
import { GameCard } from './GameCard';

const UserInfoWrapper = styled.div``;
const UserStatWrapper = styled.div``;
const UserGameListWrapper = styled.div``;

const gameData: GameType[] = [
  {
    status: 'live',
    result: 'win',
    mode: 'solo',
    month: '09',
    date: '06',
    kill: 7,
    death: 3,
    assist: 21,
    kda: 9.33,
    cs: 177,
    rate: 8.33,
    ward: 0,
    champion: 'Sona',
    item0: '3133',
    item1: '6694',
    item2: '3089',
    item3: '3047',
    item4: '3086',
    item5: '3087',
    item6: '3340',
  },
  {
    status: 'complete',
    result: 'lose',
    mode: 'free',
    month: '09',
    date: '05',
    kill: 2,
    death: 8,
    assist: 15,
    kda: 5.33,
    cs: 123,
    rate: 7.29,
    ward: 0,
    champion: 'Jax',
    item0: '3033',
    item1: '3032',
    item2: '3036',
    item3: '3035',
    item4: '3038',
    item5: '3040',
    item6: '3340',
  },
  {
    status: 'incomplete',
    result: 'win',
    mode: 'solo',
    month: '09',
    date: '04',
    kill: 9,
    death: 2,
    assist: 25,
    kda: 9.88,
    cs: 143,
    rate: 9.17,
    ward: 0,
    champion: `Katarina`,
    item0: '3133',
    item1: '6694',
    item2: '3089',
    item3: '3047',
    item4: '3086',
    item5: '3087',
    item6: '3340',
  },
  {
    status: 'complete',
    result: 'win',
    mode: 'solo',
    month: '09',
    date: '02',
    kill: 8,
    death: 5,
    assist: 13,
    kda: 7.58,
    cs: 183,
    rate: 8.32,
    ward: 0,
    champion: 'Blitzcrank',
    item0: '3033',
    item1: '3032',
    item2: '3036',
    item3: '3035',
    item4: '3038',
    item5: '3040',
    item6: '3340',
  },
  {
    status: 'incomplete',
    result: 'lose',
    mode: 'solo',
    month: '08',
    date: '31',
    kill: 12,
    death: 0,
    assist: 19,
    kda: 9.99,
    cs: 183,
    rate: 9.89,
    ward: 0,
    champion: 'Brand',
    item0: '3133',
    item1: '6694',
    item2: '3089',
    item3: '3047',
    item4: '3086',
    item5: '3087',
    item6: '3340',
  },
];
const sumData: SummonerType[] = [
  {
    icon: '4027',
    userID: '브랜드',
    userLevel: 363,
    solorank: 'gold',
    solorankinfo: 'Gold 2',
    solorankLP: 89,
    freerank: 'platinum',
    freerankinfo: 'Platinum 2',
    freerankLP: 0,
    solowinrate: 52,
    freewinrate: 49,
    solowin: 164,
    sololose: 154,
    freewin: 156,
    freelose: 165,
    avgkda: 2.15,
    avgkill: 8.5,
    avgdeath: 7.2,
    avgassist: 11.4,
    avgposition: 'ADC',
    positionrate: 87,
  },
];

export const UserInfo = () => {
  const [games, setGames] = useState<GameType[]>([...gameData]);
  const [profiles, setProfiless] = useState<SummonerType[]>([...sumData]);

  const fetchData = () => {
    setTimeout(() => {
      const arr: GameType[] = games.concat([...gameData]);
      setGames(arr);
    }, 1500);
  };
  return (
    <UserInfoWrapper>
      <UserStatWrapper>
        {profiles.map((profile: SummonerType, index) => (
          <UserId summonerInfo={profile} key={index} />
        ))}
        {profiles.map((profile: SummonerType, index) => (
          <UserRank summonerInfo={profile} key={index} />
        ))}
        {profiles.map((profile: SummonerType, index) => (
          <UserStatInfo summonerInfo={profile} key={index} />
        ))}
        {profiles.map((profile: SummonerType, index) => (
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
          {games.map((game: GameType, index) => {
            return <GameCard gameInfo={game} key={index}></GameCard>;
          })}
        </InfiniteScroll>
      </UserGameListWrapper>
    </UserInfoWrapper>
  );
};
