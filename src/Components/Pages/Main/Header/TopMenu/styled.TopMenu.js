import styled, { css } from "styled-components";
import theme from "../../../../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const Nav = styled.nav`
  .ItemBox {
    display: flex;
  }
  .ItemBoxM {
    display: none;
  }
  @media screen and (max-width: ${mediaScreenWidth}) {
    .ItemBox {
      display: none;
    }
    .ItemBoxM {
      display: flex;
    }
  }
`;

// export const Nav = styled.nav`
//   ${({ theme: { colors } }) => {
//     return css`
//       color: ${colors.Orange08};
//     `;
//   }}
// `;



export const ItemBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "KoPub Batang Bold";
  font-size: 16rem;
`;


export const Item = styled.li`
  padding: 0 30rem;
  // font-family: inherit;
  a {
    padding: 5rem 10rem;
  }
`;


export const ItemBoxContainerM = styled.div`
  
`;


export const ItemBoxM = styled.ul`
  
`;