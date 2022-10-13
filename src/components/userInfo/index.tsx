import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MatchInfo } from '../types/matchInfo';
import { SummonerInfo } from '../types/summonerInfo';
import styled from 'styled-components';
import axios from 'axios';
//import components
import UserRank from './components/UserRank';
import UserGraph from './components/UserGraph';
import UserStatInfo from './components/UserStatInfo';
import GameCard from './components/GameCard';
import UserId from './components/UserId';
import PreferChampion from './components/PreferChampion';
import Loading from './components/Loading';
import ErrorPage from './components/ErrorPage';

const UserInfoWrapper = styled.div``;
const UserStatWrapper = styled.div``;
const UserGameListWrapper = styled.div``;

export const UserInfo = () => {
  const [games, setGames] = useState<MatchInfo[]>([]);
  const [profiles, setProfiless] = useState<SummonerInfo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [httpStatusCode, setHttpStatusCode] = useState();
  const params = new URLSearchParams(window.location.search);
  let state = params.get('user');
  console.log(state);
  useEffect(() => {
    getData();
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);
  const getData = async () => {
    setLoading(true);
    try {
      const value = await axios.get(
        `${process.env.REACT_APP_GG_API_ROOT}riot/user/${state}`,
      );
      console.log(value.data);
      if (value.status === 200) {
        setProfiless([value.data]);
      }
      if (value.data) setLoading(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
    } catch (e: any) {
      console.log(e); //이해필요
      setHttpStatusCode(e.response.status);
      console.log(e.response.status);
      //이해필요
    }
  };
  console.log(state);

  const fetchData = async () => {
    try {
      const match = await axios.get(
        `${process.env.REACT_APP_GG_API_ROOT}riot/match/${state}?page=${page}`,
      );
      console.log(match.data);
      const fetchedGames: MatchInfo[] = [...games, ...match.data];
      setGames(fetchedGames);
      setPage(page + 1);
    } catch (e) {
      console.log(e); //이해필요
    }
  };
  if (httpStatusCode === 404) return <ErrorPage />;
  return (
    <UserInfoWrapper>
      {loading ? <Loading /> : null}
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
        {profiles.map((profile: SummonerInfo, index) => (
          <PreferChampion summonerInfo={profile} key={index} />
        ))}
      </UserStatWrapper>
      <UserGameListWrapper>
        <InfiniteScroll
          next={fetchData}
          dataLength={games.length}
          hasMore={true}
          loader={
            <h4
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: '14px',
              }}
            >
              데이터 불러오는 중...
            </h4>
          }
        >
          {games.map((game: MatchInfo, index) => {
            return <GameCard matchInfo={game} key={index}></GameCard>;
          })}
        </InfiniteScroll>
      </UserGameListWrapper>
    </UserInfoWrapper>
  );
};
