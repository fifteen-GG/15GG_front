import { useNavigate } from 'react-router-dom';
import { MatchInfo } from '../../types/matchInfo';
import {
  GameCardContainer,
  GameInfoWrapper,
  AnalysisStatus,
  GameMainInfo,
  Result,
  Date,
  GameMode,
  Duration,
  GameDetailInfo,
  GameCardContent,
  Profile,
  SpellWrapper,
  Spell,
  PerkWrapper,
  Perk,
  KDAWrapper,
  KDAInfo,
  KDARate,
  CSNWard,
  CSInfo,
  Ward,
  ItemWrapper,
  ItemImg,
} from '../styles/gameCard.s';

import {
  urlChampion,
  urlSpell,
  formatPerks,
  formatPerkStyles,
} from '../../utils/Url';
import { gameInfo, itemInfo } from '../userInfo';

const GameCard = (props: { matchInfo: MatchInfo }) => {
  const navigate = useNavigate();
  const routegameAnalysis = () => {
    navigate(
      `/live?match=${props.matchInfo.match_id}&status=${props.matchInfo.status}`,
    );
  };
  const analysisStatus = (s: string) => {
    let result = '';
    if (s === 'live') result = '실시간 분석';
    else if (s === 'complete') result = '분석완료';
    else result = '미분석';
    return result;
  };
  return (
    <GameCardContainer onClick={routegameAnalysis}>
      <AnalysisStatus status={props.matchInfo.status}>
        {analysisStatus(props.matchInfo.status)}
      </AnalysisStatus>
      <GameInfoWrapper win={props.matchInfo.win}>
        <GameMainInfo>
          <Result>{props.matchInfo.win ? '승리' : '패배'}</Result>
          <Date>
            {props.matchInfo.created_at.replaceAll('-', '/').slice(2)}
          </Date>
          <GameMode>{gameInfo(props.matchInfo)}</GameMode>
          <Duration>
            {Math.round(props.matchInfo.game_duration / 60)}분{' '}
            {props.matchInfo.game_duration % 60}초
          </Duration>
        </GameMainInfo>
        <GameDetailInfo>
          <GameCardContent>
            <Profile src={urlChampion(props.matchInfo.champion_name)} />
            <SpellWrapper>
              <Spell src={urlSpell(props.matchInfo.spells.spell1)} />
              <Spell src={urlSpell(props.matchInfo.spells.spell2)} />
            </SpellWrapper>
            <PerkWrapper>
              <Perk src={formatPerks(props.matchInfo.perks.perk)} />
              <Perk src={formatPerkStyles(props.matchInfo.perks.perkStyle)} />
            </PerkWrapper>
            <KDAWrapper>
              <KDAInfo>
                {props.matchInfo.kills} / {props.matchInfo.deaths} /{' '}
                {props.matchInfo.assists}
              </KDAInfo>
              <KDARate>KDA {props.matchInfo.kda}</KDARate>
            </KDAWrapper>
            <CSNWard>
              <CSInfo>
                CS {props.matchInfo.cs} ({props.matchInfo.cs_per_min})
              </CSInfo>
              <Ward>
                제어 와드 {props.matchInfo.vision_wards_bought_in_game}
              </Ward>
            </CSNWard>
          </GameCardContent>
          <ItemWrapper>
            {props.matchInfo.items.map((item: string, index: number) => {
              return (
                <ItemImg
                  className={'item' + index}
                  src={itemInfo(item)}
                  key={index}
                />
              );
            })}
          </ItemWrapper>
        </GameDetailInfo>
      </GameInfoWrapper>
    </GameCardContainer>
  );
};
export default GameCard;
