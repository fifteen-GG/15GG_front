import styled, { keyframes } from 'styled-components';
const pulse = keyframes`
  0% {
    opacity: 0.2;
  }

  50% {
    opacity: 0.6;
  }

  100% {
    opacity: 1.0;
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: 360px) {
    width: 328px;
  }
`;

export const SkeletonWrapper = styled.div`
  width: 100%;
  height: 76px;
  margin: 0 auto;
  display: flex;
`;

export const SkeletonId = styled.div`
  width: 52px;
  height: 52px;
  background: rgba(255, 255, 255, 0.08);
  margin: 2px 8px 6px 2px;
  border-radius: 10px;
  animation: ${pulse} 2s infinite ease-in-out;
`;
export const SkeletonNameWrapper = styled.div`
  flex-direction: column;
`;
export const SkeletonName = styled.div`
  width: 108px;
  height: 24px;
  background: rgba(255, 255, 255, 0.16);
  margin: 2px 0px 8px 0px;
  border-radius: 50px;
  animation: ${pulse} 2s infinite ease-in-out;
  overflow: hidden;
`;

export const SkeletonLevel = styled.div`
  width: 57px;
  height: 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  animation: ${pulse} 2s infinite ease-in-out;
  overflow: hidden;
`;

export const LottieWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto;
  margin-top: 54px;
  margin-bottom: 14px;
`;
