import { GameInfoProps } from './type';
// import { url } from 'inspector';
import React from 'react';
import {
  GameListBox,
  GameInfoBox,
  AnalysisStatus,
  GameMainInfo,
  Result,
  Date,
  GameMode,
  GameDetailInfo,
  Profile,
  KDABox,
  KDAInfo,
  KDARate,
  CSNWard,
  CSInfo,
  Ward,
  ItemBox,
  // ItemRow,
  ItemImg,
} from './styles/gameCard.s';
const formatChampion = (data: { championName: string }) => {
  return `https://opgg-static.akamaized.net/images/lol/champion/${data.championName}.png`;
};
const formatItem = (data: { championItem: string }) => {
  return `https://opgg-static.akamaized.net/images/lol/item/${data.championItem}.png`;
};

export const GameCard = ({ gameInfo }: GameInfoProps) => {
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
    champion,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
  } = gameInfo;

  return (
    <GameListBox>
      {status === 'live' ? (
        <AnalysisStatus status={status}>실시간 분석</AnalysisStatus>
      ) : status === 'complete' ? (
        <AnalysisStatus status={status}>분석완료</AnalysisStatus>
      ) : (
        <AnalysisStatus status={status}>미분석</AnalysisStatus>
      )}
      <GameInfoBox result={result}>
        <GameMainInfo>
          <Result>{result === 'win' ? '승리' : '패배'}</Result>
          <Date>
            {month}/{date}
          </Date>
          <GameMode>{mode === 'solo' ? '솔로랭크' : '자유랭크'}</GameMode>
        </GameMainInfo>
        <GameDetailInfo>
          <div style={{ display: 'flex' }}>
            <Profile src={formatChampion({ championName: `${champion}` })} />
            <KDABox>
              <KDAInfo>
                {kill} / {death} / {assist}
              </KDAInfo>
              <KDARate>KDA {kda}</KDARate>
            </KDABox>
            <CSNWard>
              <CSInfo>
                CS {cs} ({rate})
              </CSInfo>
              <Ward>제어 와드 {ward}</Ward>
            </CSNWard>
          </div>
          <ItemBox>
            <ItemImg src={formatItem({ championItem: `${item1}` })} />
            <ItemImg src={formatItem({ championItem: `${item2}` })} />
            <ItemImg src={formatItem({ championItem: `${item3}` })} />
            <ItemImg
              className="item7"
              src={formatItem({ championItem: `${item7}` })}
            />
            <ItemImg src={formatItem({ championItem: `${item4}` })} />
            <ItemImg src={formatItem({ championItem: `${item5}` })} />
            <ItemImg src={formatItem({ championItem: `${item6}` })} />
          </ItemBox>
        </GameDetailInfo>
      </GameInfoBox>
    </GameListBox>
  );
};
