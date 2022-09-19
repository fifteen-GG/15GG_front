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

const Summoner = () => {
  return (
    <PlayerWrapper>
      <UserInterface>
        <ChampionImg />
        <ChampionLevel>16</ChampionLevel>
        <SpellWrapper>
          <Spell />
          <Spell />
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
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
        </ItemWrapper>
        40,480 · 20K
      </ItemInterface>
    </PlayerWrapper>
  );
};

export default Summoner;
