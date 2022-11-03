import {
  GameInfoContainer,
  GameTypeWrapper,
  GameType,
  AnalysisTypeInfo,
  DateInfo,
} from '../styles/gameInfo.s';


enum gameState {
  live = 'live',
  end = 'complete',
  none = 'incomplete',
}
enum queue_mode {
  solo = '5v5 Ranked Solo games',
  flex = '5v5 Ranked Flex games',
  blind = '5v5 Blind Pick games',
  aram = '5v5 ARAM games',
  urf = 'Pick URF games',
}

interface propsType {
  status: gameState;
  mode: queue_mode;

  date: string;
}

const GameInfo = (props: propsType) => {
  const formatMatchInfo = (queueMode: string) => {
    if (queueMode === queue_mode.solo) {
      return '솔로랭크';
    } else if (queueMode === queue_mode.flex) {
      return '자유랭크';
    } else if (queueMode === queue_mode.blind) {
      return '일반게임';
    } else if (queueMode === queue_mode.aram) {
      return '칼바람나락';
    } else if (queueMode === queue_mode.urf) {
      return 'U.R.F.';
    } else {
      return '사용자설정';
    }
  };

  const formatAnalysisStatus = (status: string) => {
    if (status === gameState.live) return '실시간 분석';
    else if (status === gameState.end) return '분석완료';
    else return '미분석';
  };
  const formatMatchDate = (date: string) => {
    return (
      date.slice(0, 4) +
      '년' +
      ' ' +
      date.slice(5, 7) +
      '월' +
      ' ' +
      date.slice(8, 10) +
      '일'
    );
  };
  return (
    <GameInfoContainer>

      <TypeInfoWrapper>
        <GameTypeInfo>{formatMatchInfo(props.mode)}</GameTypeInfo>
        <AnalysisTypeInfo status={props.status}>
          {formatAnalysisStatus(props.status)}
        </AnalysisTypeInfo>
      </TypeInfoWrapper>

      <DateInfo>{formatMatchDate(props.date)}</DateInfo>
    </GameInfoContainer>
  );
};

export default GameInfo;
