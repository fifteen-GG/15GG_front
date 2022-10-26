import {
  ErrorWrapper,
  SummonerWrapper,
  SummonerId,
  SummonerLevel,
  SummonerNameWrapper,
  SummonerName,
  ErrorTextWrapper,
  ErrorText,
  ErrorImg,
} from '../styles/errorPage.s';
import Error from '../../../assets/gg_error_img.png';

const ErrorPage = () => {
  const params = new URLSearchParams(window.location.search);
  let state = params.get('user');
  return (
    <ErrorWrapper>
      <SummonerWrapper>
        <SummonerId></SummonerId>
        <SummonerNameWrapper>
          <SummonerName>{state}</SummonerName>
          <SummonerLevel>LV 0</SummonerLevel>
        </SummonerNameWrapper>
      </SummonerWrapper>
      <ErrorTextWrapper>
        <ErrorImg src={Error} />
        <ErrorText>존재하지 않는 소환사입니다 다시 검색해주세요:(</ErrorText>
      </ErrorTextWrapper>
    </ErrorWrapper>
  );
};

export default ErrorPage;
