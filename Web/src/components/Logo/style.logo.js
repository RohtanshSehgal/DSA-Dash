import styled from "styled-components";
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
  svg {
    width: 185px;
  }
  @media (max-width: 650px) {
    margin: 0px;
    svg {
      height: 53px;
      width: 192px;
    }
  }
`;
