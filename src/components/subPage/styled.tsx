import styled from "styled-components";

export const SubPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const SubPageHeaderWrapper = styled.div`
  height: 48px;
  background: #27282d;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
`;

export const SubPageHeader = styled.div`
  @media screen and (max-width: 650px) {
    width: 100%;
  }
  @media screen and (min-width: 651px) {
    width: 650px;
  }
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoBox = styled.div`
  width: 110px;
  height: 23.6px;
  font-size: 24px;
  color: white;
`;

export const SubPageContentWrapper = styled.div`
  background: #1e2025;
  display: flex;
  justify-content: center;
  height: calc(100vh - 48px);
`;

export const SubPageContent = styled.div`
  @media screen and (max-width: 650px) {
    width: 100%;
  }
  @media screen and (min-width: 651px) {
    width: 650px;
  }
  padding: 16px;
`;
