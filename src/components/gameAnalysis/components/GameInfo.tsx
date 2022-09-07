import {
  GameInfoWrapper,
  TypeInfoWrapper,
  GameTypeInfo,
  AnalysisTypeInfo,
  DateInfo,
} from '../styled';

const GameInfo = () => {
  return (
    <GameInfoWrapper>
      <TypeInfoWrapper>
        <GameTypeInfo>자유랭크</GameTypeInfo>
        <AnalysisTypeInfo isLive={true}>분석완료</AnalysisTypeInfo>
      </TypeInfoWrapper>
      <DateInfo>2022년 7월 19일</DateInfo>
    </GameInfoWrapper>
  );
};

export default GameInfo;
