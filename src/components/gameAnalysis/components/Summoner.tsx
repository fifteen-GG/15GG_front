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
const formatKDA = (data: {
  kills: number;
  deaths: number;
  assists: number;
}) => {
  return `${data.kills}  /  ${data.deaths}  /  ${data.assists} `;
};

export const formatChampion = (data: { championName: string }) => {
  return `https://opgg-static.akamaized.net/images/lol/champion/${data.championName}.png`;
};
const formatSpell = (data: { championSpell: string }) => {
  return `https://opgg-static.akamaized.net/images/lol/spell/Summoner${data.championSpell}.png`;
};
const formatItem = (data: { championItem: string }) => {
  return `https://opgg-static.akamaized.net/images/lol/item/${data.championItem}.png`;
};

interface summonerProps {
  champion: string;
  championSpell1: string;
  championSpell2: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
  item7: string;
}

const Summoner = ({
  champion,
  championSpell1,
  championSpell2,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
}: summonerProps) => {
  return (
    <PlayerWrapper>
      <UserInterface>
        <ChampionImg src={formatChampion({ championName: `${champion}` })} />
        <ChampionLevel>16</ChampionLevel>
        <SpellWrapper>
          <Spell src={formatSpell({ championSpell: `${championSpell1}` })} />
          <Spell src={formatSpell({ championSpell: `${championSpell2}` })} />
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
          <ItemImg src={formatItem({ championItem: `${item1}` })} />
          <ItemImg src={formatItem({ championItem: `${item2}` })} />
          <ItemImg src={formatItem({ championItem: `${item3}` })} />
          <ItemImg src={formatItem({ championItem: `${item4}` })} />
          <ItemImg src={formatItem({ championItem: `${item5}` })} />
          <ItemImg src={formatItem({ championItem: `${item6}` })} />
          <ItemImg
            style={{ borderRadius: '7px' }}
            src={formatItem({ championItem: `${item7}` })}
          />
        </ItemWrapper>
        40,480 · 20K
      </ItemInterface>
    </PlayerWrapper>
  );
};

export default Summoner;
