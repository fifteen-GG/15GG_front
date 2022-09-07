import * as S from './styled';

export const Page15 = () => {
  const code = [7, 2, 1, 9, 3, 4];
  return (
    <S.Page15Wrapper>
      <S.Page15Responsive>
        <S.Title>데이터코드 생성</S.Title>
        <S.SubTitle>데이터내셔에서 여섯자리 코드를 입력해주세요.</S.SubTitle>
        <S.DataCodeWrapper>
          {code.map((value: number, index: number) => {
            return (
              <S.SingleDataCodeWrapper key={index}>
                <S.SingleDataCode>{value}</S.SingleDataCode>
              </S.SingleDataCodeWrapper>
            );
          })}
        </S.DataCodeWrapper>
        <S.Footer>
          <S.FooterContent>남은시간 2:21 · 재생성</S.FooterContent>
        </S.Footer>
      </S.Page15Responsive>
    </S.Page15Wrapper>
  );
};
