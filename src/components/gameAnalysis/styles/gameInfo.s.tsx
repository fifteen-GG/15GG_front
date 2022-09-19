import styled from 'styled-components';

const GameInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 54px;
`;

const TypeInfoWrapper = styled.div`
  display: flex;
  height: 18px;
  align-items: center;
  flex-direction: row;
  color: #ffffff;
`;

const GameTypeInfo = styled.div`
  display: flex;
  font-size: 18px;
`;
interface RealTimeInfoProps {
  isLive?: boolean;
}
const AnalysisTypeInfo = styled.div<RealTimeInfoProps>`
  display: flex;
  height: 16px;
  width: auto;
  padding: 0 4px 0 4px;
  color: #ffffff;
  margin-left: 6px;
  font-size: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: ${props => (props.isLive ? '#e84057' : '#4d4ae2')};
`;
const DateInfo = styled.div`
  display: flex;
  height: 13px;
  margin-top: 6px;
  align-items: center;
  color: #88898d;
  font-size: 13px;
  margin-bottom: 16px;
`;

export {
  GameInfoWrapper,
  TypeInfoWrapper,
  GameTypeInfo,
  AnalysisTypeInfo,
  DateInfo,
};
