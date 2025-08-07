import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme: { elevation, colors } }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      // padding: 0 210rem;
      padding: 0 11%;
    `;
  }}
`;

export const Logo = styled.img`
  max-width: 100rem;
`;

export const Hidden = styled.span`
  position: absolute;
  left: -9999px;
`;