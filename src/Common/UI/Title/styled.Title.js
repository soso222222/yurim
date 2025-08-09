import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ margin, padding, align }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: ${align};
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
  ${({ titleSize }) => {
    return css`
      font-size: ${titleSize}rem;
    `;
  }}
`;


