import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100rem calc(100vmin - 100rem);
`;

export const Hidden = styled.span`
    position: absolute;
    left: -9999px;
`;