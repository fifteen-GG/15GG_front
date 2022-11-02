import { useNavigate } from 'react-router-dom';
import { MatchInfoType } from '../../types/matchInfo';
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
import { formatMatchMode, formatAnalysisStatus } from '../userInfo';

interface propsType {
  matchInfo: MatchInfoType;
}

const MatchCard = (props: propsType) => {
  const navigate = useNavigate();
  // const routegameAnalysis = () => {
  //   navigate(`/live`, {
  //     state: props.matchInfo.status,
  //   });
  // };
  return (
    <MatchCardContainer
      onClick={() =>
        navigate(`/live`, {
          state: {
            status: 'incomplete',
            // props.matchInfo.status,
            mode: props.matchInfo.queue_mode,
            matchID: props.matchInfo.match_id,
            date: props.matchInfo.created_at,
          },
        })
      }
    >
      <AnalysisStatus status={props.matchInfo.status}>
        {formatAnalysisStatus(props.matchInfo.status)}
      </AnalysisStatus>
      <MatchInfoWrapper win={props.matchInfo.win}>
        <MatchMainInfo>
          <MatchResult>{props.matchInfo.win ? '승리' : '패배'}</MatchResult>
          <MatchDate>
            {props.matchInfo.created_at.replaceAll('-', '/').slice(2)}
          </MatchDate>
          <MatchMode>{formatMatchMode(props.matchInfo.queue_mode)}</MatchMode>
          <MatchDuration>
            {Math.round(props.matchInfo.game_duration / 60)}분{' '}
            {props.matchInfo.game_duration % 60}초
          </MatchDuration>
        </MatchMainInfo>
        <MatchDetailInfo>
          <MatchCardContent>
            <Profile
              src={
                process.env.REACT_APP_DDRAGON_API_ROOT +
                `/champion/${props.matchInfo.champion_name}.png`
              }
            />
            <SpellWrapper>
              <Spell
                src={
                  process.env.REACT_APP_DDRAGON_API_ROOT +
                  `/spell/${props.matchInfo.spells.spell1}.png`
                }
              />
              <Spell
                src={
                  process.env.REACT_APP_DDRAGON_API_ROOT +
                  `/spell/${props.matchInfo.spells.spell2}.png`
                }
              />
            </SpellWrapper>
            <PerkWrapper>
              <Perk
                src={
                  process.env.REACT_APP_OPGG_API_ROOT +
                  `/lol/perk/${props.matchInfo.perks.perk}.png`
                }
              />
              <Perk
                src={
                  process.env.REACT_APP_OPGG_API_ROOT +
                  `/lol/perkStyle/${props.matchInfo.perks.perkStyle}.png`
                }
              />
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
          </MatchCardContent>
          <ItemWrapper>
            {props.matchInfo.items.map((item: string, index: number) => {
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
