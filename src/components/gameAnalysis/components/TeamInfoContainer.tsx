import {
  TeamInfoWrapper,
  TeamInfo,
  TeamInfoHeader,
  TeamName,
  Team,
  UserInfoColumnWrapper,
  UserInfoColumn,
  PlayerList,
} from '../styles/teamInfoContainer.s';
import { useState } from 'react';

import Summoner from './Summoner';

import { summonerProps } from './Summoner';

const summonerRed: summonerProps[] = [
  {
    champion: 'Sona',
    championSpell1: 'SummonerHeal',
    championSpell2: 'SummonerFlash',
    perks: 8008,
    perkStyles: 8100,
    items: ['3133', '6694', '3089', '3340', '3047', '3086', '3087'],
  },
  {
    champion: 'Jax',
    championSpell1: 'SummonerDot',
    championSpell2: 'SummonerFlash',
    perks: 8008,
    perkStyles: 8100,
    items: ['3033', '3032', '3036', '3340', '3035', '3038', '3040'],
  },
  {
    champion: `Katarina`,
    championSpell1: 'SummonerSmite',
    championSpell2: 'SummonerFlash',
    perks: 8008,
    perkStyles: 8100,
    items: ['3133', '6694', '3089', '3340', '3047', '3086', '3087'],
  },
  {
    champion: 'Blitzcrank',
    championSpell1: 'SummonerBoost',
    championSpell2: 'SummonerFlash',
    perks: 8008,
    perkStyles: 8100,
    items: ['3033', '3032', '3036', '3340', '3035', '3038', '3040'],
  },
  {
    champion: 'Brand',
    championSpell1: 'SummonerExhaust',
    championSpell2: 'SummonerFlash',
    perks: 8008,
    perkStyles: 8100,
    items: ['3133', '6694', '3089', '3340', '3047', '3086', '3087'],
  },
];

const summonerBlue: summonerProps[] = [
  {
    champion: 'Aphelios',
    championSpell1: 'SummonerTeleport',
    championSpell2: 'SummonerFlash',
    perks: 8008,
    perkStyles: 8100,
    items: ['3033', '3032', '3036', '3340', '3035', '3038', '3040'],
  },
  {
    champion: 'Rumble',
    championSpell1: 'SummonerHeal',
    championSpell2: 'SummonerFlash',
    perks: 8008,
    perkStyles: 8100,
    items: ['3133', '6694', '3089', '3340', '3047', '3086', '3087'],
  },
  {
    champion: 'Lux',
    championSpell1: 'SummonerDot',
    championSpell2: 'SummonerFlash',
    perks: 8008,
    perkStyles: 8100,
    items: ['3033', '3032', '3036', '3340', '3035', '3038', '3040'],
  },
  {
    champion: 'Draven',
    championSpell1: 'SummonerHeal',
    championSpell2: 'SummonerFlash',
    perks: 8008,
    perkStyles: 8100,
    items: ['3133', '6694', '3089', '3340', '3047', '3086', '3087'],
  },
  {
    champion: 'Nasus',
    championSpell1: 'SummonerHeal',
    championSpell2: 'SummonerFlash',
    perks: 8008,
    perkStyles: 8100,
    items: ['3033', '3032', '3036', '3340', '3035', '3038', '3040'],
  },
];

const TeamInfoContainer = () => {
  const [redteams, setRedteams] = useState<summonerProps[]>([...summonerRed]);
  const [blueteams, setBlueteams] = useState<summonerProps[]>([
    ...summonerBlue,
  ]);
  return (
    <TeamInfoWrapper>
      <TeamInfo>
        <TeamInfoHeader>
          <TeamName team={Team.RED}>RED TEAM</TeamName>
          <UserInfoColumnWrapper>
            <UserInfoColumn>SUMMONER</UserInfoColumn>
            <UserInfoColumn>ITEMS</UserInfoColumn>
          </UserInfoColumnWrapper>
        </TeamInfoHeader>
        <PlayerList>
          {redteams.map((redteam: summonerProps, index) => {
            return <Summoner teamInfo={redteam} key={index} />;
          })}
        </PlayerList>
      </TeamInfo>
      <TeamInfo>
        <TeamInfoHeader>
          <TeamName team={Team.BLUE}>BLUE TEAM</TeamName>
          <UserInfoColumnWrapper>
            <UserInfoColumn>SUMMONER</UserInfoColumn>
            <UserInfoColumn>ITEMS</UserInfoColumn>
          </UserInfoColumnWrapper>
        </TeamInfoHeader>
        <PlayerList>
          {blueteams.map((blueteam: summonerProps, index) => {
            return <Summoner teamInfo={blueteam} key={index} />;
          })}
        </PlayerList>
      </TeamInfo>
    </TeamInfoWrapper>
  );
};

export default TeamInfoContainer;
