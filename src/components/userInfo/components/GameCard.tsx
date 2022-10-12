import { useNavigate } from 'react-router-dom';
import { MatchInfo } from '../../types/matchInfo';
import {
  GameListBox,
  GameInfoBox,
  AnalysisStatus,
  GameMainInfo,
  Result,
  Date,
  GameMode,
  GameDetailInfo,
  GameCardContent,
  Profile,
  SpellBox,
  Spell,
  PerkBox,
  Perk,
  KDABox,
  KDAInfo,
  KDARate,
  CSNWard,
  CSInfo,
  Ward,
  ItemBox,
  // ItemRow,
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
    navigate(`/live?match=${props.matchInfo.match_id}`);
  };
  const analysisStatus = (s: string) => {
    let result = '';
    if (s === 'live') result = '실시간 분석';
    else if (s === 'complete') result = '분석완료';
    else result = '미분석';
    return result;
  };
  return (
    <GameListBox onClick={routegameAnalysis}>
      <AnalysisStatus status={props.matchInfo.status}>
        {analysisStatus(props.matchInfo.status)}
      </AnalysisStatus>
      <GameInfoBox win={props.matchInfo.win}>
        <GameMainInfo>
          <Result>{props.matchInfo.win ? '승리' : '패배'}</Result>
          <Date>
            {props.matchInfo.created_at.replaceAll('-', '/').slice(2)}
          </Date>
          <GameMode>{gameInfo(props.matchInfo)}</GameMode>
        </GameMainInfo>
        <GameDetailInfo>
          <GameCardContent>
            <Profile src={urlChampion(props.matchInfo.champion_name)} />
            <SpellBox>
              <Spell src={urlSpell(props.matchInfo.spells.spell1)} />
              <Spell src={urlSpell(props.matchInfo.spells.spell2)} />
            </SpellBox>
            <PerkBox>
              <Perk src={formatPerks(props.matchInfo.perks.perk)} />
              <Perk src={formatPerkStyles(props.matchInfo.perks.perkStyle)} />
            </PerkBox>
            <KDABox>
              <KDAInfo>
                {props.matchInfo.kills} / {props.matchInfo.deaths} /{' '}
                {props.matchInfo.assists}
              </KDAInfo>
              <KDARate>KDA {props.matchInfo.kda}</KDARate>
            </KDABox>
            <CSNWard>
              <CSInfo>
                CS {props.matchInfo.cs} ({props.matchInfo.cs_per_min})
              </CSInfo>
              <Ward>
                제어 와드 {props.matchInfo.vision_wards_bought_in_game}
              </Ward>
            </CSNWard>
          </GameCardContent>
          <ItemBox>
            {props.matchInfo.items.map((item: string, index: number) => {
              return (
                <ItemImg
                  className={'item' + index}
                  src={itemInfo(item)}
                  key={index}
                />
              );
            })}
          </ItemBox>
        </GameDetailInfo>
      </GameInfoBox>
    </GameListBox>
  );
};
export default GameCard;
