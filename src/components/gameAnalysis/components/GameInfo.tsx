import {
  GameInfoWrapper,
  TypeInfoWrapper,
  GameTypeInfo,
  AnalysisTypeInfo,
  DateInfo,
} from '../styles/gameInfo.s';
enum gameState {
  running,
  end,
  none,
}
interface propsType {
  state: gameState;
}

const GameInfo = (props: propsType) => {
  return (
    <GameInfoWrapper>
      <TypeInfoWrapper>
        <GameTypeInfo>자유랭크</GameTypeInfo>
        <AnalysisTypeInfo
          isLive={props.state === gameState.running ? true : false}
        >
          {props.state === gameState.running ? '실시간' : '분석완료'}
        </AnalysisTypeInfo>
      </TypeInfoWrapper>
      <DateInfo>2022년 7월 19일</DateInfo>
    </GameInfoWrapper>
  );
};

export default GameInfo;
