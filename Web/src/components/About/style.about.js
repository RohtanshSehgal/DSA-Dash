import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin: 0 5px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const NameTile = styled.span`
  padding: 10px;
  width: max-content;
  height: max-content;
  color: white;
  background-color: #262e38;
  margin: 5px;
  font-weight: bold;
  &:hover {
    background-color: #7f65f8;
    cursor: pointer;
  }
`;
