import {
  GameInfoContainer,
  GameTypeWrapper as GameTypeWrapper,
  GameType as GameType,
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
    <GameInfoContainer>
      <GameTypeWrapper>
        <GameType>자유랭크</GameType>
        <AnalysisTypeInfo
          isLive={props.state === gameState.running ? true : false}
        >
          {props.state === gameState.running ? '실시간' : '분석완료'}
        </AnalysisTypeInfo>
      </GameTypeWrapper>
      <DateInfo>2022년 7월 19일</DateInfo>
    </GameInfoContainer>
  );
};

export default GameInfo;
