import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GameType } from './type';
import {
  UserGameListWrapper,
  UserInfoWrapper,
  UserStatWrapper,
} from './styles/index.s';

//import components
import { UserId } from './UserId';
import { UserRank } from './UserRank';
import { UserGraph } from './UserGraph';
import { UserStatInfo } from './UserStatInfo';
import { GameCard } from './GameCard';
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
  },
];

// interface RankProps{
//TODO 사이드 마진이 조금 남는 현상 수정필요
// }

export const UserInfo = () => {
  const [games, setGames] = useState<GameType[]>([...gameData]);
  const fetchData = () => {
    setTimeout(() => {
      const arr: GameType[] = games.concat([...gameData]);
      setGames(arr);
    }, 1500);
  };
  return (
    <UserInfoWrapper>
      <UserStatWrapper>
        <UserId />
        <UserRank />
        <UserStatInfo />
        <UserGraph />
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
