import styled, { css } from "styled-components";
import theme from "../../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const CardBox = styled.div`
  ${({ columns }) => {
    return css`
      display: grid;
      grid-template-columns: repeat(${columns}, 1fr);
      gap: 20rem;

      @media screen and (max-width: ${mediaScreenWidth}) {
        grid-template-columns: repeat(1, 1fr);
        gap: 24rem;
      }
    `;
  }}
`;


export const CardItem = styled.div`
  ${({ theme: { colors } }) => {
    return css`
      display: flex;
      align-items: center;
      background-color: ${colors.BackgroundGrayOpacity10};
      padding: 43rem 32rem;

      @media screen and (max-width: ${mediaScreenWidth}) {
        flex-direction: column;
      }
    `;
  }}
`;


export const CardText = styled.p`
  font-weight: 300;
`;

export const CardImage = styled.img`
  display: flex;
  width: 120rem;
  object-fit: cover;
  object-position: center;
  margin-right: 40rem;

  @media screen and (max-width: ${mediaScreenWidth}) {
    width: 80rem;
    margin-right: 0;
    margin-bottom: 24rem;
  }
`;