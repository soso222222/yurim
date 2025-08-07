import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  
`;

export const SectionMainImage = styled.section`
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
        z-index: 1; /* 이미지 위에 위치하도록 설정 */
      }
    `;
  }}
`;


export const MainImage = styled.img`
  z-index: 2; /* 이미지 위에 위치하도록 설정 */
  width: 100%;
  max-height: 800rem;
  object-fit: cover;
  object-position: center;
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
      z-index: 3;
    `;
  }}
`;


export const ImageTextStrong = styled.p`
  font-size: 62rem;
`;

export const ImageText = styled.p`
  font-size: 24rem;
  font-weight: 100;
  margin-top: 24rem;
`;

export const SectionMainServices = styled.section`
  padding: 120rem 11%;
`;

export const ServicesTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ServicesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 60rem;
  margin: 40rem 0 0 0;
`;


export const ServicesItem = styled.div`
  display: flex;
  // align-items: center;
  // justify-content: center;
  flex-direction: column;
`;


export const ServicesImage = styled.img`
  margin-bottom: 30rem;
`;