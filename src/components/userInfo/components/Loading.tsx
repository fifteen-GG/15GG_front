import Lottie from 'lottie-react';

import { gg_lottie_bg } from '../../../assets';
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
        <Lottie animationData={gg_lottie_bg} />
      </LottieWrapper>
    </LoadingContainer>
  );
};

export default Loading;
