import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MatchInfoList, SummonerInfo } from '../../type';
import styled from 'styled-components';
import axios from 'axios';
//import components
import UserRank from './components/UserRank';
import UserGraph from './components/UserGraph';
import UserStatInfo from './components/UserStatInfo';
import GameCard from './components/GameCard';
import UserId from './components/UserId';

const UserInfoWrapper = styled.div``;
const UserStatWrapper = styled.div``;
const UserGameListWrapper = styled.div``;

const matchData: MatchInfoList[] = [
  {
    status: 'live',
    win: true,
    queue_mode: '5v5 Ranked Solo games',
    created_at: '2022-07-19',
    kills: 7,
    deaths: 3,
    assists: 21,
    kda: 9.33,
    cs: 177,
    cs_per_min: 8.33,
    vision_wards_bought_in_game: 0,
    champion_name: 'Sona',
    items: ['3133', '6694', '3089', '3340', '3047', '3086', '3083'],
  },
  {
    status: 'complete',
    win: false,
    queue_mode: '5v5 Ranked Flex games',
    created_at: '2022-07-19',
    kills: 2,
    deaths: 8,
    assists: 15,
    kda: 5.33,
    cs: 123,
    cs_per_min: 7.29,
    vision_wards_bought_in_game: 0,
    champion_name: 'Jax',
    items: ['3033', '3031', '3036', '3340', '3035', '3068', '3040'],
  },
  {
    status: 'incomplete',
    win: true,
    queue_mode: '5v5 Ranked Solo games',
    created_at: '2022-07-19',
    kills: 9,
    deaths: 2,
    assists: 25,
    kda: 9.88,
    cs: 143,
    cs_per_min: 9.17,
    vision_wards_bought_in_game: 0,
    champion_name: `Katarina`,
    items: ['3133', '6694', '3089', '3340', '3047', '3086', '3083'],
  },
  {
    status: 'complete',
    win: true,
    queue_mode: '5v5 Ranked Solo games',
    created_at: '2022-07-19',
    kills: 8,
    deaths: 5,
    assists: 13,
    kda: 7.58,
    cs: 183,
    cs_per_min: 8.32,
    vision_wards_bought_in_game: 0,
    champion_name: 'Blitzcrank',
    items: ['3033', '3031', '3036', '3340', '3035', '3068', '3040'],
  },
  {
    status: 'incomplete',
    win: false,
    created_at: '2022-07-19',
    queue_mode: '5v5 Ranked Solo games',
    champion_name: 'Brand',
    kills: 12,
    deaths: 0,
    assists: 19,
    kda: 9.99,
    cs: 183,
    cs_per_min: 9.89,
    vision_wards_bought_in_game: 0,
    items: ['3133', '6694', '3089', '3340', '3047', '3086', '3083'],
  },
];
const sumData: SummonerInfo[] = [
  {
    name: '브랜드',
    level: 363,
    profileIconId: '4027',
    solo: {
      tier: 'GRANDMASTER',
      rank: 'II',
      lp: 89,
      win_rate: 52,
      win: 164,
      losses: 154,
    },
    flex: {
      tier: 'PLATINUM',
      rank: 'II',
      lp: 0,
      win_rate: 48,
      win: 156,
      losses: 165,
    },
    kda_avg: 2.15,
    kills_avg: 8.5,
    deaths_avg: 7.2,
    assists_avg: 11.4,
    prefer_position: {
      ADC: 87,
    },
  },
];

export const UserInfo = () => {
  const [games, setGames] = useState<MatchInfoList[]>([...matchData]);
  const [profiles, setProfiless] = useState<SummonerInfo[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const params = new URLSearchParams(window.location.search);
  let state = params.get('user');
  console.log(state);
  const getData = async () => {
    try {
      const value = await axios.get(
        `${process.env.REACT_APP_GG_API_ROOT}riot/user/${state}`,
      );
      console.log(value.data);
      if (value.status === 200) {
        setProfiless([value.data]);
      }
    } catch (e) {
      console.log(e); //이해필요
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(state);
  // const getMatch = async () => {
  //   try {
  //     const match0 = await axios.get(
  //       `${process.env.REACT_APP_GG_API_ROOT}riot/match/${state}?page=${page}`,
  //     );
  //     console.log(match0.data);
  //     if (match0.status === 200) {
  //       setGames([match0.data]);
  //       setPage(page + 1);
  //     }
  //   } catch (e) {
  //     console.log(e); //이해필요
  //   }
  // };
  // useEffect(() => {
  //   getMatch();
  // }, []);
  const fetchData = async () => {
    try {
      const match = await axios.get(
        `${process.env.REACT_APP_GG_API_ROOT}riot/match/${state}?page=${page}`,
      );

      setTimeout(() => {
        console.log(match.data);
        if (match.status === 200) {
          const arr: MatchInfoList[] = games.concat([...match.data]);
          setGames(arr);
          setPage(page + 1);
        }
      }, 1500);
    } catch (e) {
      console.log(e); //이해필요
    }
  };
  return (
    <UserInfoWrapper>
      <UserStatWrapper>
        {profiles.map((profile: SummonerInfo, index) => (
          <UserId summonerInfo={profile} key={index} />
        ))}
        {profiles.map((profile: SummonerInfo, index) => (
          <UserRank summonerInfo={profile} key={index} />
        ))}
        {profiles.map((profile: SummonerInfo, index) => (
          <UserStatInfo summonerInfo={profile} key={index} />
        ))}
        {profiles.map((profile: SummonerInfo, index) => (
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
          {games.map((game: MatchInfoList, index) => {
            return <GameCard matchInfo={game} key={index}></GameCard>;
          })}
        </InfiniteScroll>
      </UserGameListWrapper>
    </UserInfoWrapper>
  );
};
