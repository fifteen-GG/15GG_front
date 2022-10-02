import {
  PlayerWrapper,
  UserInterface,
  ChampionImg,
  ChampionLevel,
  SpellWrapper,
  PerksWrapper,
  Spell,
  Perk,
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

import {
  urlChampion,
  urlSpell,
  urlItem,
  formatPerks,
  formatPerkStyles,
} from '../../utility/Url';
import { TeamInfo } from '../styles/teamInfoContainer.s';
import { useState } from 'react';

const formatKDA = (data: {
  kills: number;
  deaths: number;
  assists: number;
}) => {
  return `${data.kills}  /  ${data.deaths}  /  ${data.assists} `;
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
  perks: string[];
  items: string[];
}

const Summoner = ({ teamInfo }: TeamInfoProps) => {
  const { champion, championSpell1, championSpell2, perks, items } = teamInfo;
  return (
    <PlayerWrapper>
      <UserInterface>
        <ChampionImg src={urlChampion(champion)} />
        <ChampionLevel>16</ChampionLevel>
        <SpellWrapper>
          <Spell src={urlSpell(championSpell1)} />
          <Spell src={urlSpell(championSpell2)} />
        </SpellWrapper>
        <PerksWrapper>
          <Perk src={formatPerks(perks[0])} />
          <Perk src={formatPerkStyles(perks[1])} />
        </PerksWrapper>
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
          {items.map((item, index) => {
            return index !== 3 ? (
              <ItemImg src={urlItem(item)} key={index} />
            ) : (
              <ItemImg className="item3" src={urlItem(items[3])} key={index} />
            );
          })}
          {/* <ItemImg src={urlItem(items[0])} />
          <ItemImg src={urlItem(items[1])} />
          <ItemImg src={urlItem(items[2])} />
          <ItemImg src={urlItem(items[3])} />
          <ItemImg src={urlItem(items[4])} />
          <ItemImg src={urlItem(items[5])} />
          <ItemImg style={{ borderRadius: '7px' }} src={urlItem(items[6])} /> */}
        </ItemWrapper>
        40,480 · 20K
      </ItemInterface>
    </PlayerWrapper>
  );
};

export default Summoner;
