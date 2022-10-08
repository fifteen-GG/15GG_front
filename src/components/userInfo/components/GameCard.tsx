import { MatchInfoProps } from '../../type';
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
  PerkBox,
  Perk,
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
import {
  urlChampion,
  urlItem,
  urlSpell,
  formatPerks,
  formatPerkStyles,
} from '../../utility/Url';

const GameCard = ({ matchInfo }: MatchInfoProps) => {
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
              <Spell src={urlSpell('SummonerDot')} />
              <Spell src={urlSpell('SummonerFlash')} />
            </SpellBox>
            <PerkBox>
              <Perk src={formatPerks('8229')} />
              <Perk src={formatPerkStyles('8400')} />
            </PerkBox>
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
              return (
                <ItemImg
                  className={'item' + index}
                  src={urlItem(item)}
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
export default GameCard;
