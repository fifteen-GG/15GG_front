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
import MatchCard from './components/MatchCard';
import UserId from './components/UserId';
import PreferChampion from './components/PreferChampion';
import LoadingPage from './components/LoadingPage';
import ErrorPage from './components/ErrorPage';

const UserInfoContainer = styled.div``;
const UserStatWrapper = styled.div``;
const UserGameListWrapper = styled.div``;
const Loader = styled.div`
  color: white;
  text-align: center;
  font-size: 14px;
  margin-top: 4px;
`;

export const UserInfo = () => {
  const [games, setGames] = useState<MatchInfo[]>([]);
  const [profiles, setProfiless] = useState<SummonerInfo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [httpStatusCode, setHttpStatusCode] = useState<number>(200);
  const params = new URLSearchParams(window.location.search);
  let id = params.get('ID');
  console.log(id);
  useEffect(() => {
    getUserData();
    getMatchData();
  }, []);
  console.log(httpStatusCode);
  const getUserData = async () => {
    setLoading(true);
    try {
      const value = await axios.get(
        `${process.env.REACT_APP_GG_API_ROOT}/riot/user/${id}`,
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
  console.log(id);

  const getMatchData = async () => {
    try {
      const match = await axios.get(
        `${process.env.REACT_APP_GG_API_ROOT}/riot/match/${id}?page=${page}`,
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
    <UserInfoContainer>
      {loading ? <LoadingPage /> : null}
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
      <InfiniteScroll
        next={getMatchData}
        dataLength={games.length}
        hasMore={true}
        loader={<Loader>데이터 불러오는 중...</Loader>}
      >
        {games.map((game: MatchInfo, index) => {
          return <MatchCard game={game} key={index}></MatchCard>;
        })}
      </InfiniteScroll>
    </UserInfoContainer>
  );
};
