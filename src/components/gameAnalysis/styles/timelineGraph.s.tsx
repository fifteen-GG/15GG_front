import styled from 'styled-components';

export const TimelineBorderBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 134px;
  /* height: 180px; */
  justify-content: center;
  align-items: center;
  background-color: #27282d;
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const TimelineWrappper = styled.div`
  display: flex;
  flex-direction: column;
  height: 86px;
  width: calc(100%);
  /* padding-left: 8px;
  padding-right: 8px; */
  margin: 12px 0 12px 0;
`;

export const WinningRate = styled.div`
  display: flex;
  justify-self: left;
  font-size: 12px;
  color: #fff;
`;
