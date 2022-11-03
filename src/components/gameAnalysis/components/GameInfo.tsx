import {
  GameInfoContainer,
  GameTypeWrapper,
  GameType,
  AnalysisTypeInfo,
  DateInfo,
} from '../styles/gameInfo.s';
import {
  formatMatchMode,
  formatAnalysisStatus,
  formatMatchDate,
} from '../gameInfo';

// enum gameState {
//   running,
//   end,
//   none,
// }
interface propsType {
  status: 'live' | 'complete' | 'incomplete';
  mode: string;
  date: string;
}

const GameInfo = (props: propsType) => {
  return (
    <GameInfoContainer>
      <GameTypeWrapper>
        <GameType>{formatMatchMode(props.mode)}</GameType>
        <AnalysisTypeInfo status={props.status}>
          {formatAnalysisStatus(props.status)}
        </AnalysisTypeInfo>
      </GameTypeWrapper>
      <DateInfo>{formatMatchDate(props.date)}</DateInfo>
    </GameInfoContainer>
  );
};

export default GameInfo;
