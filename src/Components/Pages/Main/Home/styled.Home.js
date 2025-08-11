import styled, { css } from "styled-components";
import theme from "../../../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const Wrapper = styled.div`
`;


export const SectionMainImage = styled.section`
  position: relative;
`;


export const SectionMainImageContainer = styled.div`
  ${({ theme: { colors } }) => {
    return css`
      position: relative;
      padding: 0 40rem;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 40rem;
        width: calc(100% - 80rem);
        height: 100%;
        background-color: ${colors.CoverGreenOpacity05};
      }

      @media screen and (max-width: ${mediaScreenWidth}) {
        padding: 0;

        &::before {
          left: 0;
          width: 100%;
        }
      }
    `;
  }}
`;


export const MainImage = styled.img`
  width: 100%;
  height: calc(100vmin - 120rem);
  max-height: 800rem;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: ${mediaScreenWidth}) {
    height: calc(100vmax - 80rem);
    max-height: calc(100vmax - 80rem);
  }
`;

export const MainImageImageBottom = styled.div`
  position: absolute;
  left: calc(50% - 100rem);
  bottom: 40rem;
  width: 100rem;
  display: flex;
  // align-items: center;
  // justify-content: center;
  flex-direction: column;
  padding: 0 40rem;

  @media screen and (max-width: ${mediaScreenWidth}) {
    bottom: 40rem;
  }
`;

export const MainText = styled.div`
  ${({ theme: { colors } }) => {
    return css`
      position: absolute;
      top: 0;
      left: 40rem;
      width: calc(100% - 80rem);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: ${colors.White};
      letter-spacing: 1.6rem;
    `;
  }}
`;


export const ImageTextStrong = styled.p`
  font-size: 62rem;

  @media screen and (max-width: ${mediaScreenWidth}) {
    font-size: 36rem;
  }
`;

export const ImageText = styled.p`
  font-size: 24rem;
  font-weight: 100;
  margin-top: 24rem;

  @media screen and (max-width: ${mediaScreenWidth}) {
    font-size: 16rem;
  }
`;

export const SectionMainServices = styled.section`
  padding: 120rem 11%;

  @media screen and (max-width: ${mediaScreenWidth}) {
    padding: 80rem 4%;
  }
`;

export const ServicesTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${mediaScreenWidth}) {
    .titlebox .titletxt {
      font-size: 32rem;
    }
    .titlebox .subtxt {
      font-size: 16rem;
    }
  }
`;

export const ServicesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 60rem;
  margin: 40rem 0 0 0;

  @media screen and (max-width: ${mediaScreenWidth}) {
    grid-template-columns: 1fr;
    grid-template-rows: (4, 1fr);
  }
`;

export const ServicesItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServicesImage = styled.img`
`;

export const SectionMainPortfolio = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const MainPortfolioContainer = styled.div`
  ${({ theme: { colors } }) => {
    return css`
      width: calc(100% - 22%);
      padding: 16rem 0 120rem 0;
      border-top: 1px solid transparent;

      @media screen and (max-width: ${mediaScreenWidth}) {
        width: calc(100% - 8%);
        padding: 80rem 0;
        border-top: 1px solid ${colors.TextOpacity10};
      }
    `;
  }}
`;


export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20rem;

  @media screen and (max-width: ${mediaScreenWidth}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12rem;
  }
`;

export const GalleryImgItem = styled.div`
  position: relative;
  width: 100%;
  height: 420rem;
  overflow: hidden;

  &.wide {
    grid-column: span 2; /* 가로로 긴 이미지를 2열 차지하도록 하는 CSS */
  }
  &:hover img {
    transform: scale(1.1);
  }
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.7s ease-out;
`;