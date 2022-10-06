import { MatchInfoProps } from './type';
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
  GameCardContent,
  Profile,
  SpellBox,
  Spell,
  RuneBox,
  Rune,
  KDABox,
  KDAInfo,
  KDARate,
  CSNWard,
  CSInfo,
  Ward,
  ItemBox,
  // ItemRow,
  ItemImg,
} from '../styles/gameCard.s';
// const formatChampion = (data: { championName: string }) => {
//   return `https://opgg-static.akamaized.net/images/lol/champion/${data.championName}.png`;
// };
// const formatItem = (data: { championItem: string }) => {
//   return `https://opgg-static.akamaized.net/images/lol/item/${data.championItem}.png`;
// };
import { urlChampion, urlItem } from '../../utility/Url';

export const GameCard = ({ matchInfo }: MatchInfoProps) => {
  return (
    <GameListBox>
      {matchInfo?.status === 'live' ? (
        <AnalysisStatus status={matchInfo?.status}>실시간 분석</AnalysisStatus>
      ) : matchInfo?.status === 'complete' ? (
        <AnalysisStatus status={matchInfo?.status}>분석완료</AnalysisStatus>
      ) : (
        <AnalysisStatus status={matchInfo?.status}>미분석</AnalysisStatus>
      )}
      <GameInfoBox win={matchInfo?.win}>
        <GameMainInfo>
          <Result>{matchInfo?.win ? '승리' : '패배'}</Result>
          <Date>{matchInfo?.created_at.replaceAll('-', '/').slice(2)}</Date>
          <GameMode>
            {matchInfo?.queue_mode === '5v5 Ranked Solo games'
              ? '솔로랭크'
              : '자유랭크'}
          </GameMode>
        </GameMainInfo>
        <GameDetailInfo>
          <GameCardContent>
            <Profile src={urlChampion(matchInfo?.champion_name)} />
            <SpellBox>
              <Spell
                src={
                  'https://opgg-static.akamaized.net/images/lol/spell/SummonerDot.png?image=q_auto,f_webp,w_36&v=1664954332121'
                }
              />
              <Spell
                src={
                  'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_36&v=1664954332121'
                }
              />
            </SpellBox>
            <RuneBox>
              <Rune
                src={
                  'https://opgg-static.akamaized.net/images/lol/perk/8229.png?image=q_auto,f_webp,w_36&v=1664954332121'
                }
              />
              <Rune
                src={
                  'https://opgg-static.akamaized.net/images/lol/perkStyle/8400.png?image=q_auto,f_webp,w_36&v=1664954332121'
                }
              />
            </RuneBox>
            <KDABox>
              <KDAInfo>
                {matchInfo?.kills} / {matchInfo?.deaths} / {matchInfo?.assists}
              </KDAInfo>
              <KDARate>KDA {matchInfo?.kda}</KDARate>
            </KDABox>
            <CSNWard>
              <CSInfo>
                CS {matchInfo?.cs} ({matchInfo?.cs_per_min})
              </CSInfo>
              <Ward>제어 와드 {matchInfo?.vision_wards_bought_in_game}</Ward>
            </CSNWard>
          </GameCardContent>
          <ItemBox>
            {matchInfo?.items.map((item, index) => {
              return index !== 3 ? (
                <ItemImg src={urlItem(item)} key={index} />
              ) : (
                <ItemImg
                  className="item3"
                  src={urlItem(matchInfo?.items[3])}
                  key={index}
                />
              );
            })}
          </ItemBox>
        </GameDetailInfo>
      </GameInfoBox>
    </GameListBox>
  );
};
