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
<<<<<<< HEAD

const formatKDA = (kills: number, deaths: number, assists: number) => {
  return `${kills}  /  ${deaths}  /  ${assists} `;
};

=======
import {
  urlChampion,
  urlSpell,
  urlItem,
  formatPerks,
  formatPerkStyles,
} from '../../utils/Url';

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
export interface propsType {
  teamInfo: summonerProps;
}
>>>>>>> 23658ea7ab045f0d4a549f806209f55dddffe0e2
export interface summonerProps {
  champion: string;
  championSpell1: string;
  championSpell2: string;
  perks: number;
  perkStyles: number;
  items: string[];
}

<<<<<<< HEAD
const Summoner = (props: { teamInfo: summonerProps }) => {
  return (
    <PlayerWrapper>
      <UserInterface>
        <ChampionImg
          src={`${process.env.REACT_APP_DDRAGON_API_ROOT}/champion/${props.teamInfo.champion}.png`}
        />
        <ChampionLevel>16</ChampionLevel>
        <SpellWrapper>
          <Spell
            src={`${process.env.REACT_APP_DDRAGON_API_ROOT}/spell/${props.teamInfo.championSpell1}.png`}
          />
          <Spell
            src={`${process.env.REACT_APP_DDRAGON_API_ROOT}/spell/${props.teamInfo.championSpell2}.png`}
          />
        </SpellWrapper>
        <PerksWrapper>
          <Perk
            src={`${process.env.REACT_APP_OPGG_API_ROOT}/lol/perk/${props.teamInfo.perks}.png`}
          />
          <Perk
            src={`${process.env.REACT_APP_OPGG_API_ROOT}/lol/perkStyle/${props.teamInfo.perkStyles}.png`}
          />
=======
const Summoner = (props: propsType) => {
  return (
    <PlayerWrapper>
      <UserInterface>
        <ChampionImg src={urlChampion(props.teamInfo.champion)} />
        <ChampionLevel>16</ChampionLevel>
        <SpellWrapper>
          <Spell src={urlSpell(props.teamInfo.championSpell1)} />
          <Spell src={urlSpell(props.teamInfo.championSpell2)} />
        </SpellWrapper>
        <PerksWrapper>
          <Perk src={formatPerks(props.teamInfo.perks)} />
          <Perk src={formatPerkStyles(props.teamInfo.perkStyles)} />
>>>>>>> 23658ea7ab045f0d4a549f806209f55dddffe0e2
        </PerksWrapper>
        <UserInfoWrapper>
          <SummonerInfo>
            <SummonerName>정잭영</SummonerName>
            <SummonerTier>P4</SummonerTier>
          </SummonerInfo>
          <KDAWrapper>
            <KDADetails>{formatKDA(15, 6, 5)}</KDADetails>
            <KDA>KDA 3.3</KDA>
          </KDAWrapper>
        </UserInfoWrapper>
      </UserInterface>
      <ItemInterface>
        <ItemWrapper>
          {props.teamInfo.items.map((item, index) => {
            return index !== 3 ? (
              <ItemImg
                src={`${process.env.REACT_APP_DDRAGON_API_ROOT}/item/${item}.png`}
                key={index}
              />
            ) : (
              <ItemImg
                className="item3"
<<<<<<< HEAD
                src={`${process.env.REACT_APP_DDRAGON_API_ROOT}/item/${props.teamInfo.items[3]}.png`}
=======
                src={urlItem(props.teamInfo.items[3])}
>>>>>>> 23658ea7ab045f0d4a549f806209f55dddffe0e2
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
