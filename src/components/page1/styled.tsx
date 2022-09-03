import styled from "styled-components";

export const Page1Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Page1Responsive = styled.div`
  @media screen and (max-width: 650px) {
    width: 100%;
  }
  @media screen and (min-width: 651px) {
    width: 650px;
  }
`;
