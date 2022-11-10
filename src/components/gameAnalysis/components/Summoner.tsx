import {
  SummonerContainer,
  SummonerInterface,
  ChampionImg,
  ChampionLevel,
  SpellWrapper,
  PerksWrapper,
  ImgBox as SpellImg,
  ImgBox as PerkImg,
  SummonerInfoWrapper,
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
import type { summonerDetail } from '../../types/matchDetails';
export interface propsType {
  summonerInfo: summonerDetail;
}
const Summoner = (props: propsType) => {
  return (
    <SummonerContainer>
      <SummonerInterface>
        <ChampionImg
          src={
            process.env.REACT_APP_DDRAGON_API_ROOT +
            `/champion/${props.summonerInfo.championName}.png`
          }
        />
        <ChampionLevel>{props.summonerInfo.champLevel}</ChampionLevel>
        <SpellWrapper>
          <SpellImg
            src={
              process.env.REACT_APP_DDRAGON_API_ROOT +
              `/spell/${props.summonerInfo.spells.spell1}.png`
            }
          />
          <SpellImg
            src={
              process.env.REACT_APP_DDRAGON_API_ROOT +
              `/spell/${props.summonerInfo.spells.spell2}.png`
            }
          />
        </SpellWrapper>
        <PerksWrapper>
          <PerkImg
            src={
              process.env.REACT_APP_OPGG_API_ROOT +
              `/lol/perk/${props.summonerInfo.perks.perk}.png`
            }
          />
          <PerkImg
            src={
              process.env.REACT_APP_OPGG_API_ROOT +
              `/lol/perkStyle/${props.summonerInfo.perks.perkStyle}.png`
            }
          />
        </PerksWrapper>
        <SummonerInfoWrapper>
          <SummonerInfo>
            <SummonerName>{props.summonerInfo.summonerName}</SummonerName>
            {props.summonerInfo.rank === '' ? null : (
              <SummonerTier>{props.summonerInfo.rank}</SummonerTier>
            )}
          </SummonerInfo>
          <KDAWrapper>
            <KDADetails>
              {`${props.summonerInfo.kills}  /  ${props.summonerInfo.deaths}  /  ${props.summonerInfo.assists} `}
            </KDADetails>
            <KDA>
              KDA{' '}
              {(
                (props.summonerInfo.kills + props.summonerInfo.assists) /
                props.summonerInfo.deaths
              ).toFixed(1)}
            </KDA>
          </KDAWrapper>
        </SummonerInfoWrapper>
      </SummonerInterface>
      <ItemInterface>
        <ItemWrapper>
          {props.summonerInfo.items.map((item: number, index) => {
            return (
              <ItemImg
                className={'item' + index}
                src={
                  process.env.REACT_APP_DDRAGON_API_ROOT + `/item/${item}.png`
                }
                key={index}
              />
            );
          })}
        </ItemWrapper>
        {props.summonerInfo.totalDamageDealtToChampions > 1000
          ? `${(props.summonerInfo.totalDamageDealtToChampions / 1000)
              .toString()
              .replace('.', ',')}`
          : props.summonerInfo.totalDamageDealtToChampions}{' '}
        · {parseInt((props.summonerInfo.goldEarned / 1000).toString())}K
      </ItemInterface>
    </SummonerContainer>
  );
};

export default Summoner;
