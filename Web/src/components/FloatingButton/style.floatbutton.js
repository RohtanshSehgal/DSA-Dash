import styled from "styled-components";
export const FloatingButton = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  border-radius: 50px;
  text-align: center;
  svg {
    height: 50px;
    width: 50px;
  }
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    position: unset;
    margin-left: auto;
  }
`;
