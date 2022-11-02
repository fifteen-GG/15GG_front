import {
  GameInfoContainer,
  TypeInfoWrapper,
  GameTypeInfo,
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
      <TypeInfoWrapper>
        <GameTypeInfo>{formatMatchMode(props.mode)}</GameTypeInfo>
        <AnalysisTypeInfo status={props.status}>
          {formatAnalysisStatus(props.status)}
        </AnalysisTypeInfo>
      </TypeInfoWrapper>
      <DateInfo>{formatMatchDate(props.date)}</DateInfo>
    </GameInfoContainer>
  );
};

export default GameInfo;
