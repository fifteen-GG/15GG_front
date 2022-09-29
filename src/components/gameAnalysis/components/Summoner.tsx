import { url } from 'inspector';
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

const formatKDA = (data: {
  kills: number;
  deaths: number;
  assists: number;
}) => {
  return `${data.kills}  /  ${data.deaths}  /  ${data.assists} `;
};

interface summonerProps {
  champion: string;
  championSpell1: string;
  championSpell2: string;
  item0: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
}

const Summoner = ({
  champion,
  championSpell1,
  championSpell2,
  item0,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
}: summonerProps) => {
  return (
    <PlayerWrapper>
      <UserInterface>
        <ChampionImg src={urlChampion(champion)} />
        <ChampionLevel>16</ChampionLevel>
        <SpellWrapper>
          <Spell src={urlSpell(championSpell1)} />
          <Spell src={urlSpell(championSpell2)} />
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
          <ItemImg src={urlItem(item0)} />
          <ItemImg src={urlItem(item1)} />
          <ItemImg src={urlItem(item2)} />
          <ItemImg src={urlItem(item3)} />
          <ItemImg src={urlItem(item4)} />
          <ItemImg src={urlItem(item5)} />
          <ItemImg style={{ borderRadius: '7px' }} src={urlItem(item6)} />
        </ItemWrapper>
        40,480 · 20K
      </ItemInterface>
    </PlayerWrapper>
  );
};

export default Summoner;
