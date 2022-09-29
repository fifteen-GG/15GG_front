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
// const formatChampion = (data: { championName: string }) => {
//   return `https://opgg-static.akamaized.net/images/lol/champion/${data.championName}.png`;
// };
// const formatItem = (data: { championItem: string }) => {
//   return `https://opgg-static.akamaized.net/images/lol/item/${data.championItem}.png`;
// };
import { urlChampion, urlItem } from '../utility/Url';

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
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
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
            <Profile src={urlChampion(champion)} />
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
            <ItemImg src={urlItem(item0)} />
            <ItemImg src={urlItem(item1)} />
            <ItemImg src={urlItem(item2)} />
            <ItemImg className="item6" src={urlItem(item6)} />
            <ItemImg src={urlItem(item3)} />
            <ItemImg src={urlItem(item4)} />
            <ItemImg src={urlItem(item5)} />
          </ItemBox>
        </GameDetailInfo>
      </GameInfoBox>
    </GameListBox>
  );
};
