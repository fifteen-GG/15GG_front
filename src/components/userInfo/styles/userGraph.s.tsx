import styled from 'styled-components';

//UserGraph 스타일
export const UserGraphWrapper = styled.div`
  width: 100%;
  margin-top: 8px;
  background-color: #27282d;
  border-radius: 6px;
  display: flex;
  position: relative;
`;
export const UserGraphDraw = styled.div`
  margin: 0 auto;
  padding: 13px 0;
  width: 160px;
  height: 160px;
`;
// export const BackgroundCircle = styled.div`
//   width: 114px;
//   height: 114px;
//   position: absolute;
//   border: solid 1px #373737;
//   border-radius: 80px;
//   top: 49.5%;
//   left: 49.5%;
//   transform: translate(-50%, -50%);
// `;
export const UserGraphText = styled.div`
  display: in-line;
  position: absolute;
  margin-left: 14px;
  margin-top: 10px;
`;
export const UserGraphLabel = styled.div`
  display: flex;
`;
export const UserEx = styled.div`
  width: 10px;
  height: 10px;
  background-color: #2f67a1;
  border-radius: 2px;
`;
export const UserText = styled.div`
  margin-left: 4px;
  font-size: 10px;
  color: #ffffff;
`;

export const AverageGraphLabel = styled.div`
  display: flex;
`;
export const AvgEx = styled.div`
  width: 10px;
  height: 10px;
  background-color: #737577;
  border-radius: 2px;
`;
export const AvgText = styled.div`
  margin-left: 4px;
  font-size: 10px;
  color: #ffffff;
`;
