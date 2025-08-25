import styled, { css } from "styled-components";
import theme from "../../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const Wrapper = styled.div`
  padding: 100rem 11%;
  font-weight: 300;

  @media screen and (max-width: ${mediaScreenWidth}) {
    // padding: 80rem 4%;
    padding: 80rem 0;
  }
`;

export const SectionIntroContainer = styled.section`
  margin-bottom: 100rem;
  font-weight: inherit;

  @media screen and (max-width: ${mediaScreenWidth}) {
    margin: 0 4% 100rem 4%;
    margin-bottom: 60rem;
  }
`;

export const IntroHeadText = styled.p`
  font-size: 32rem;
  margin-bottom: 12rem;
  font-weight: inherit;

  @media screen and (max-width: ${mediaScreenWidth}) {
    font-size: 18rem;
  }
`;

export const IntroText = styled.p`
  font-size: 18rem;
  font-weight: inherit;

  @media screen and (max-width: ${mediaScreenWidth}) {
    font-size: 15rem;
  }
`;


export const SectionCategoryContainer = styled.section`
  font-size: 18rem;
  font-weight: inherit;
  margin-bottom: 120rem;

  @media screen and (max-width: ${mediaScreenWidth}) {
    margin: 0 4%;
    font-size: 15rem;
  }
`;

export const SectionIntroImgContainer = styled.section`
  ${({ theme: { colors } }) => {
    return css`
      display: grid;
      grid-template-columns: calc(60% - 60rem) 40%;
      padding: 80rem 0;
      gap: 60rem;
      font-weight: inherit;

      @media screen and (max-width: ${mediaScreenWidth}) {
        gap: 40rem;
        padding: 60rem 0;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
      }
    `;
  }}
`;

export const AboutImg = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: ${mediaScreenWidth}) {
  }
`;

export const IntroImgTextBox = styled.div`
  align-content: end;
  @media screen and (max-width: ${mediaScreenWidth}) {
  }
`;

export const IntroImgHeadText = styled.p`
  font-size: 24rem;
  font-weight: 800;

  @media screen and (max-width: ${mediaScreenWidth}) {
    font-size: 26rem;
  }
`;

export const IntroImgText = styled.p`
  font-size: 20rem;
  font-weight: inherit;
  margin-top: 40rem;

  @media screen and (max-width: ${mediaScreenWidth}) {
    font-size: 16rem;
    text-align: center;
    margin-top: 20rem;
  }
`;


export const SectionProcessContainer = styled.section`
  ${({ theme: { colors } }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 120rem 0 200rem 0;
      border-bottom: 1px solid transparent;

      @media screen and (max-width: ${mediaScreenWidth}) {
        margin: 80rem 4% 80rem 4%;
        border-top: 1px solid ${colors.TextOpacity10};
      }
    `;
  }}
`;


export const ProcessBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 35rem 1fr 35rem 1fr 35rem 1fr 35rem 1fr;
  @media screen and (max-width: ${mediaScreenWidth}) {
    grid-template-columns: 1fr 1fr;
    gap: 12rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ProcessItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${mediaScreenWidth}) {
    margin-bottom: 60rem;
    &.angleR {
      position: absolute;
      left: -9999px;
    }
  }
`;

export const ProcessItemHeadText = styled.p`
  font-size: 20rem;
  margin-bottom: 16rem;

  @media screen and (max-width: ${mediaScreenWidth}) {
    font-size: 14rem;
    margin-bottom: 12rem;
  }
`;

export const ProcessItemSvgBox = styled.div`
  ${({ theme: { colors } }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 180rem;
      min-height: 180rem;
      border: 1px solid ${colors.BorderOpacity10};
      border-radius: 100%;

      &:hover {
        border-color: ${colors.TextOpacity10};
      }
      &:hover img {
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(12%) contrast(100%);
      }

      @media screen and (max-width: ${mediaScreenWidth}) {
      }
    `;
  }}
`;


export const ProcessItemSvg = styled.img`
  ${({ theme: { colors } }) => {
    return css`
      width: 70rem;
      @media screen and (max-width: ${mediaScreenWidth}) {
      }
    `;
  }}
`;

export const ProcessItemTitleText = styled.p`
  font-size: 24rem;
  margin-top: 20rem;

  @media screen and (max-width: ${mediaScreenWidth}) {
    font-size: 20rem;
    margin-top: 24rem;
  }
`;

export const ProcessItemText = styled.p`
  ${({ theme: { colors } }) => {
    return css`
      font-size: 16rem;
      color: ${colors.Gray300Opacity10};
      margin-top: 12rem;

      @media screen and (max-width: ${mediaScreenWidth}) {
        font-size: 14rem;
        margin-top: 6rem;
      }
    `;
  }}
`;