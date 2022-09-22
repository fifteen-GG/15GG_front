import styled from 'styled-components';

//UserStatInfo부분 스타일
export const UserStatInfoWrapper = styled.div`
  width: 100%;
  height: 56px;
  margin-top: 4px;
  background-color: #27282d;
  border-radius: 6px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const GraphImg = styled.div`
  width: 36px;
  margin-left: 15px;
  position: relative;
`;
export const GraphText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8px;
  color: #ffffff;
`;
export const UserInfoText = styled.div`
  width: 65px;
  margin: 0 10px 0 12px;
`;
export const UserInfoTitle = styled.div`
  font-size: 10px;
  color: #88898d;
`;
export const UserInfoContent = styled.div`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;
export const UserInfoSubTitle = styled.div`
  font-size: 10px;
  color: #fff;
`;
