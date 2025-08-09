import styled from "styled-components";
import theme from "../../../Style/theme";

const mediaScreenWidth = theme.deviceSizes.tabletL;

export const Wrapper = styled.div`
  padding: 100rem 11%;

  @media screen and (max-width: ${mediaScreenWidth}) {
    padding: 80rem 4%;
  }
`;
