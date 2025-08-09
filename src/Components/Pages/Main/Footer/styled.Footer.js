import styled, { css } from "styled-components";
import theme from "../../../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const Wrapper = styled.footer`
  ${({ theme: { colors } }) => {
    return css`
      grid-row: 3 / 4;
      width: 100%;
      border-top: 1px solid ${colors.TextOpacity10};
    `;
  }}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40rem 210rem;
  font-family: "Pretendard Regular", "sans-serif";

  @media screen and (max-width: ${mediaScreenWidth}) {
    padding: 40rem 4%;
  }
`;
export const InfoContainer = styled.div`
  font-family: inherit;
`;

export const Title = styled.p`
  font-family: inherit;
  font-weight: 700;
  font-size: 18rem;
  margin-bottom: 12rem;

  @media screen and (max-width: ${mediaScreenWidth}) {
    font-size: 16rem;
  }
`;

export const InfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12rem;
  font-family: inherit;
`;

export const TextBox = styled.div`
  font-family: inherit;
`;

export const Text = styled.p`
  display: inline-block;
  font-family: inherit;
  font-weight: 500;
  font-size: 16rem;

  & + p {
    margin-left: 40rem;
  }

  @media screen and (max-width: ${mediaScreenWidth}) {
    font-size: 14rem;

    & + p {
      margin-left: 24rem;
    }
  }
`;

export const Copyright = styled.p`
  ${({ theme: { colors } }) => {
    return css`
      margin-top: 40rem;
      font-family: inherit;
      font-weight: 500;
      color: ${colors.Gray300Opacity10};

      @media screen and (max-width: ${mediaScreenWidth}) {
        font-size: 12rem;
        margin-top: 30rem;
      }
    `;
  }}
`;