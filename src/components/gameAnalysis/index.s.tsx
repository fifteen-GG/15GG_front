import styled from 'styled-components';

const GameAnalysisWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const TimeInfo = styled.div`
  display: flex;
  font-size: 12px;
  color: #ffffff;
  font-weight: 300;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Graph = styled.div`
  display: flex;
  flex-direction: column;
  height: 29px;
  width: 100%;
  margin: 12px 0 12px 0;
`;
// const TimeLine = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 86px;
//   width: 100%;
//   margin-bottom: 12px;
// `;

export { GameAnalysisWrapper, TimeInfo, Graph };
