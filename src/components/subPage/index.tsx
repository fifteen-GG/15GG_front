import * as S from "./styled";
import * as T from "./type";
import { AiOutlineMenu } from "react-icons/ai";
import { Page15 } from "../page1.5";
import { Page2 } from "../page2";

export const SubPage = ({ page }: T.SubPageProps) => {
  const renderContent = () => {
    if (page === "1.5") return <Page15 />;
    else if (page === "2") return <Page2 />;
  };
  return (
    <S.SubPageWrapper>
      <S.SubPageHeader>
        <S.SubPageResponsiveHeader>
          <S.LogoBox>LOLex</S.LogoBox>
          <AiOutlineMenu size="24" color="white" />
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
