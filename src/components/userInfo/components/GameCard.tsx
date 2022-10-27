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

import { gameInfo, analysisStatus } from '../userInfo';

const GameCard = (props: { matchInfo: MatchInfo }) => {
  const navigate = useNavigate();
  const routegameAnalysis = () => {
    navigate(`/live?match=${props.matchInfo.match_id}`, {
      state: props.matchInfo.status,
    });
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
          </GameCardContent>
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
        </GameDetailInfo>
      </GameInfoWrapper>
    </GameCardContainer>
  );
};
export default GameCard;
