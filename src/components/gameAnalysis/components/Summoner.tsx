import {
  PlayerWrapper,
  UserInterface,
  ChampionImg,
  ChampionLevel,
  SpellWrapper,
  Spell,
  UserInfoWrapper,
  SummonerInfo,
  SummonerName,
  SummonerTier,
  KDAWrapper,
  KDADetails,
  KDA,
  ItemInterface,
  ItemImg,
  ItemWrapper,
} from '../styles/summoners.s';

import { urlChampion, urlSpell, urlItem } from '../../utility/Url';
import { TeamInfo } from '../styles/teamInfoContainer.s';
import { useState } from 'react';

const formatKDA = (props: {
  kills: number;
  deaths: number;
  assists: number;
}) => {
  return `${props.kills}  /  ${props.deaths}  /  ${props.assists} `;
};

// export interface Team {
//   redTeam: summonerProps[];
//   blueTeam: summonerProps[];
// }
export type TeamInfoProps = {
  teamInfo: summonerProps;
};

export interface summonerProps {
  // team: 'red' | 'blue';
  champion: string;
  championSpell1: string;
  championSpell2: string;
  items: string[];
}

const Summoner = ({ teamInfo }: TeamInfoProps) => {
  return (
    <PlayerWrapper>
      <UserInterface>
        <ChampionImg src={urlChampion(teamInfo.champion)} />
        <ChampionLevel>16</ChampionLevel>
        <SpellWrapper>
          <Spell src={urlSpell(teamInfo.championSpell1)} />
          <Spell src={urlSpell(teamInfo.championSpell2)} />
        </SpellWrapper>
        <UserInfoWrapper>
          <SummonerInfo>
            <SummonerName>정잭영</SummonerName>
            <SummonerTier>P4</SummonerTier>
          </SummonerInfo>
          <KDAWrapper>
            <KDADetails>
              {formatKDA({ kills: 15, deaths: 6, assists: 5 })}
            </KDADetails>
            <KDA>KDA 3.3</KDA>
          </KDAWrapper>
        </UserInfoWrapper>
      </UserInterface>
      <ItemInterface>
        <ItemWrapper>
          {teamInfo.items.map((item, index) => {
            return index !== 3 ? (
              <ItemImg src={urlItem(item)} key={index} />
            ) : (
              <ItemImg
                className="item3"
                src={urlItem(teamInfo.items[3])}
                key={index}
              />
            );
          })}
        </ItemWrapper>
        40,480 · 20K
      </ItemInterface>
    </PlayerWrapper>
  );
};

export default Summoner;
