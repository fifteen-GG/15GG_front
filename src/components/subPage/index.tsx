import * as S from './styled';
import * as T from './type';
import { AiOutlineMenu } from 'react-icons/ai';
import { UserInfo } from '../userInfo';

export const SubPage = ({ page }: T.SubPageProps) => {
  const renderContent = () => {
    if (page === 'userInfo') return <UserInfo />;
  };
  return (
    <S.SubPageWrapper>
      <S.SubPageHeader>
        <S.SubPageResponsiveHeader>
          <S.LogoBox>LOLex</S.LogoBox>
          <AiOutlineMenu size='24' color='white' />
        </S.SubPageResponsiveHeader>
      </S.SubPageHeader>
      <S.SubPageContent>
        <S.SubPageContentResponse>
          <>{renderContent()}</>
        </S.SubPageContentResponse>
      </S.SubPageContent>
    </S.SubPageWrapper>
  );
};
