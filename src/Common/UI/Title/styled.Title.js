import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ margin, padding }) => {
    return css`
      margin: ${margin};
      padding: ${padding};
    `;
  }}
`;

export const SubText = styled.p`
  ${({ theme: { title }, gap, subColor, subSize }) => {
    const color = title.sub[subColor];
    return css`
      margin-bottom: ${gap}rem;
      color: ${color};
      font-size: ${subSize}rem;
    `;
  }}
`;

export const TitleText = styled.p`
  ${({ theme: { colors }, titleSize }) => {
    return css`
      font-size: ${titleSize}rem;
    `;
  }}
`;


