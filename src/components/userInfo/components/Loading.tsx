import Lottie from 'lottie-react';

import { lottie } from '../../../assets';
import {
  LoadingWrapper,
  LottieWrapper,
  SkeletonWrapper,
  SkeletonId,
  SkeletonNameWrapper,
  SkeletonName,
  SkeletonLevel,
} from '../styles/loading.s';

const Loading = () => {
  return (
    <LoadingWrapper>
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
    </LoadingWrapper>
  );
};

export default Loading;
