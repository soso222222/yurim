import styled from "styled-components";
import { isNum } from "../../Utils/common";

export const Svg = styled.svg`
  ${({ size, fill, theme: { colors } }) => {
    return ` 
        width: ${isNum(size) ? size + "rem" : size};
        fill: ${fill ? fill : colors.TextOpacity10};
        text-indent: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        `;
  }}
`;