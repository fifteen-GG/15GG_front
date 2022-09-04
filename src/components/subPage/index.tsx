import * as S from "./styled";
import { PageEnum, SubPageProps } from "./type";
import { AiOutlineMenu } from "react-icons/ai";
import { Page15 } from "../page1.5";
import { Page2 } from "../page2";

export const SubPage = ({ page }: SubPageProps) => {
  const renderContent = () => {
    if (page === PageEnum.CODE) return <Page15 />;
    else if (page === PageEnum.LIVE) return <Page2 />;
  };
  return (
    <S.SubPageWrapper>
      <S.SubPageHeaderWrapper>
        <S.SubPageHeader>
          <S.LogoBox>LOLex</S.LogoBox>
          <AiOutlineMenu size="24" color="white" />
        </S.SubPageHeader>
      </S.SubPageHeaderWrapper>
      <S.SubPageContentWrapper>
        <S.SubPageContent>
          <>{renderContent()}</>
        </S.SubPageContent>
      </S.SubPageContentWrapper>
    </S.SubPageWrapper>
  );
};
