import Lottie from 'lottie-react';

import { gg_lottie_bg } from '../../../assets';
import {
  LoadingPageContainer,
  LottieWrapper,
  SkeletonWrapper,
  SkeletonId,
  SkeletonNameWrapper,
  SkeletonName,
  SkeletonLevel,
} from '../styles/loadingPage.s';

const LoadingPage = () => {
  return (
    <LoadingPageContainer>
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
    </LoadingPageContainer>
  );
};

export default LoadingPage;
