import styled from 'styled-components';

//UserGraph 스타일
export const UserGraphWrapper = styled.div`
  width: 100%;
  margin-top: 8px;
  background-color: #27282d;
  border-radius: 6px;
  display: flex;
`;

export const UserGraphDraw = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 360px) {
    width: 100%;
    height: 180px;
  }
  @media screen and (min-width: 361px) {
  }
`;
