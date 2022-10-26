import Lottie from 'lottie-react';

import { lottie } from '../../../assets';
import {
  LoadingContainer,
  LottieWrapper,
  SkeletonWrapper,
  SkeletonId,
  SkeletonNameWrapper,
  SkeletonName,
  SkeletonLevel,
} from '../styles/loading.s';

const Loading = () => {
  return (
    <LoadingContainer>
      <SkeletonWrapper>
        <SkeletonId></SkeletonId>
        <SkeletonNameWrapper>
          <SkeletonName></SkeletonName>
          <SkeletonLevel></SkeletonLevel>
        </SkeletonNameWrapper>
      </SkeletonWrapper>
      <LottieWrapper>
        <Lottie animationData={lottie} />
      </LottieWrapper>
    </LoadingContainer>
  );
};

export default Loading;
