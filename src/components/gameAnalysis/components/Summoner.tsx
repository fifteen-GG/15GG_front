import {
  SummonerContainer,
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
} from '../../utils/Url';

// export interface Team {
//   redTeam: summonerProps[];
//   blueTeam: summonerProps[];
// }
export interface propsType {
  teamInfo: summonerProps;
}
export interface summonerProps {
  champion: string;
  championSpell1: string;
  championSpell2: string;
  perks: number;
  perkStyles: number;
  items: string[];
  kills: number;
  deaths: number;
  assists: number;
}

const Summoner = (props: propsType) => {
  return (
    <SummonerContainer>
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
        </PerksWrapper>
        <UserInfoWrapper>
          <SummonerInfo>
            <SummonerName>정잭영</SummonerName>
            <SummonerTier>P4</SummonerTier>
          </SummonerInfo>
          <KDAWrapper>
            <KDADetails>
              {`${props.teamInfo.kills}  /  ${props.teamInfo.deaths}  /  ${props.teamInfo.assists} `}
            </KDADetails>
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
                src={urlItem(props.teamInfo.items[3])}
                key={index}
              />
            );
          })}
        </ItemWrapper>
        40,480 · 20K
      </ItemInterface>
    </SummonerContainer>
  );
};

export default Summoner;
