import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as S from './styled';
import { GameProps } from './type';

const gameData: GameProps[] = [
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

const GameCard = (props: { gameInfo: GameProps }) => {
  const {
    status,
    result,
    month,
    date,
    mode,
    kill,
    death,
    assist,
    kda,
    cs,
    rate,
    ward,
  } = props.gameInfo;
  return (
    <S.GameListBox>
      {status === 'live' ? (
        <S.AnalysisStatus status={status}>실시간 분석</S.AnalysisStatus>
      ) : status === 'complete' ? (
        <S.AnalysisStatus status={status}>분석완료</S.AnalysisStatus>
      ) : (
        <S.AnalysisStatus status={status}>미분석</S.AnalysisStatus>
      )}
      <S.GameInfoBox result={props.gameInfo.result}>
        <S.GameMainInfo>
          <S.Result>{result === 'win' ? '승리' : '패배'}</S.Result>
          <S.Date>
            {month}/{date}
          </S.Date>
          <S.GameMode>{mode === 'solo' ? '솔로랭크' : '자유랭크'}</S.GameMode>
        </S.GameMainInfo>
        <S.GameDetailInfo>
          <S.Profile></S.Profile>
          <S.KDABox>
            <S.KDAInfo>
              {kill} / {death} / {assist}
            </S.KDAInfo>
            <S.KDARate>KDA {kda}</S.KDARate>
          </S.KDABox>
          <S.CSNWard>
            <S.CSInfo>
              CS {cs} ({rate})
            </S.CSInfo>
            <S.Ward>제어 와드 {ward}</S.Ward>
          </S.CSNWard>
          <S.ItemBox>
            <S.ItemRow>
              <S.Item></S.Item>
              <S.Item></S.Item>
              <S.Item></S.Item>
              <S.Item></S.Item>
            </S.ItemRow>
            <S.ItemRow>
              <S.Item></S.Item>
              <S.Item></S.Item>
              <S.Item></S.Item>
              <S.Item></S.Item>
            </S.ItemRow>
          </S.ItemBox>
        </S.GameDetailInfo>
      </S.GameInfoBox>
    </S.GameListBox>
  );
};

const UserId = () => {
  return (
    <S.UserIdWrapper>
      <S.UserImg>이미지</S.UserImg>
      <S.NameWrapper>
        <S.UserName>정잭영</S.UserName>
        <S.SubName>142views</S.SubName>
      </S.NameWrapper>
    </S.UserIdWrapper>
  );
};

// interface RankProps{
//사이드 마진이 조금 남는 현상 수정필요
// }

const UserRank = () => {
  return (
    <S.UserRankWrapper>
      <S.RankWrapper className='Solo'>
        <S.RankText>
          <S.RankSubTitle>솔로랭크</S.RankSubTitle>
          <S.RankName>Gold 2</S.RankName>
          <S.RankContent>
            <S.RankLp>89LP</S.RankLp>
            <S.RankWinrate>52% (164승 154패)</S.RankWinrate>
          </S.RankContent>
        </S.RankText>
        <S.RankImg></S.RankImg>
      </S.RankWrapper>
      <S.RankWrapper className='Free'>
        <S.RankText>
          <S.RankSubTitle>자유랭크</S.RankSubTitle>
          <S.RankName>Platinum 4</S.RankName>
          <S.RankContent>
            <S.RankLp>0LP</S.RankLp>
            <S.RankWinrate>49% (156승 165패)</S.RankWinrate>
          </S.RankContent>
        </S.RankText>
        <S.RankImg></S.RankImg>
      </S.RankWrapper>
    </S.UserRankWrapper>
  );
};

const UserStatInfo = () => {
  return (
    <S.UserStatInfoWrapper>
      <S.GraphImg></S.GraphImg>
      <S.UserInfoText>
        <S.UserInfoTitle>승률</S.UserInfoTitle>
        <S.UserInfoContent>52%</S.UserInfoContent>
        <S.UserInfoSubTitle>164승 154패</S.UserInfoSubTitle>
      </S.UserInfoText>
      <S.UserInfoText>
        <S.UserInfoTitle>KDA</S.UserInfoTitle>
        <S.UserInfoContent>2.15</S.UserInfoContent>
        <S.UserInfoSubTitle>8.5/7.2/11.4</S.UserInfoSubTitle>
      </S.UserInfoText>
      <S.UserInfoText>
        <S.UserInfoTitle>선호 포지션</S.UserInfoTitle>
        <S.UserInfoContent>ADC</S.UserInfoContent>
        <S.UserInfoSubTitle>87%</S.UserInfoSubTitle>
      </S.UserInfoText>
    </S.UserStatInfoWrapper>
  );
};

const UserGraph = () => {
  return <S.UserGraphWrapper></S.UserGraphWrapper>;
};

export const UserInfo = () => {
  // const [page, setPage] = useState<number>(1);
  const [games, setGames] = useState<GameProps[]>([...gameData]);
  const fetchData = () => {
    setTimeout(() => {
      const arr: GameProps[] = games.concat([...gameData]);
      setGames(arr);
    }, 1500);
  };
  return (
    <S.UserInfoWrapper>
      <S.UserStatWrapper>
        <UserId />
        <UserRank />
        <UserStatInfo />
        <UserGraph />
      </S.UserStatWrapper>
      <S.UserGameListWrapper>
        <InfiniteScroll
          next={fetchData}
          dataLength={games.length}
          hasMore={true}
          loader={<h4 style={{ color: 'white' }}>Loading...</h4>}
        >
          {games.map((game: GameProps, index) => {
            return <GameCard gameInfo={game} key={index}></GameCard>;
          })}
        </InfiniteScroll>
      </S.UserGameListWrapper>
    </S.UserInfoWrapper>
  );
};
