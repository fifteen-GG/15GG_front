import { useNavigate } from 'react-router-dom';
import { MatchInfo } from '../../types/matchInfo';
import {
  MatchCardContainer,
  MatchInfoWrapper,
  AnalysisStatus,
  MatchMainInfo,
  MatchResult,
  MatchDate,
  MatchMode,
  MatchDuration,
  MatchDetailInfo,
  MatchCardContent,
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
} from '../styles/matchCard.s';
import { formatMatchInfo, formatAnalysisStatus } from '../userInfo';

interface propsType {
  game: MatchInfo;
}

const MatchCard = (props: propsType) => {
  const navigate = useNavigate();
  const routegameAnalysis = () => {
    navigate(`/live?match=${props.game.match_id}`, {
      state: props.game.status,
    });
  };
  return (
    <MatchCardContainer onClick={routegameAnalysis}>
      <AnalysisStatus status={props.game.status}>
        {formatAnalysisStatus(props.game.status)}
      </AnalysisStatus>
      <MatchInfoWrapper win={props.game.win}>
        <MatchMainInfo>
          <MatchResult>{props.game.win ? '승리' : '패배'}</MatchResult>
          <MatchDate>
            {props.game.created_at.replaceAll('-', '/').slice(2)}
          </MatchDate>
          <MatchMode>{formatMatchInfo(props.game)}</MatchMode>
          <MatchDuration>
            {Math.round(props.game.game_duration / 60)}분{' '}
            {props.game.game_duration % 60}초
          </MatchDuration>
        </MatchMainInfo>
        <MatchDetailInfo>
          <MatchCardContent>
            <Profile
              src={
                process.env.REACT_APP_DDRAGON_API_ROOT +
                `/champion/${props.game.champion_name}.png`
              }
            />
            <SpellWrapper>
              <Spell
                src={
                  process.env.REACT_APP_DDRAGON_API_ROOT +
                  `/spell/${props.game.spells.spell1}.png`
                }
              />
              <Spell
                src={
                  process.env.REACT_APP_DDRAGON_API_ROOT +
                  `/spell/${props.game.spells.spell2}.png`
                }
              />
            </SpellWrapper>
            <PerkWrapper>
              <Perk
                src={
                  process.env.REACT_APP_OPGG_API_ROOT +
                  `/lol/perk/${props.game.perks.perk}.png`
                }
              />
              <Perk
                src={
                  process.env.REACT_APP_OPGG_API_ROOT +
                  `/lol/perkStyle/${props.game.perks.perkStyle}.png`
                }
              />
            </PerkWrapper>
            <KDAWrapper>
              <KDAInfo>
                {props.game.kills} / {props.game.deaths} / {props.game.assists}
              </KDAInfo>
              <KDARate>KDA {props.game.kda}</KDARate>
            </KDAWrapper>
            <CSNWard>
              <CSInfo>
                CS {props.game.cs} ({props.game.cs_per_min})
              </CSInfo>
              <Ward>제어 와드 {props.game.vision_wards_bought_in_game}</Ward>
            </CSNWard>
          </MatchCardContent>
          <ItemWrapper>
            {props.game.items.map((item: string, index: number) => {
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
        </MatchDetailInfo>
      </MatchInfoWrapper>
    </MatchCardContainer>
  );
};
export default MatchCard;
