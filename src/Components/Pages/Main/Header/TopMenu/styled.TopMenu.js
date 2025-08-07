import styled, { css } from "styled-components";

export const Nav = styled.nav`
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
`;


export const Item = styled.li`
  padding: 0 30rem;
  // font-family: inherit;
`;